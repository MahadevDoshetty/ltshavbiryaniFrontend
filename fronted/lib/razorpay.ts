import type { DeliveryAddress, OrderSummary } from "@/lib/types";

type RazorpayHandlerResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: { color?: string };
  handler: (response: RazorpayHandlerResponse) => void;
  modal?: {
    ondismiss?: () => void;
  };
};

type RazorpayInstance = {
  open: () => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function createRazorpayOrder(amountInPaise: number, receipt: string) {
  const response = await fetch("/api/razorpay/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: amountInPaise, receipt }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error ?? "Failed to create payment order");
  }

  return response.json() as Promise<{
    orderId: string;
    amount: number;
    currency: string;
  }>;
}

export async function verifyRazorpayPayment(payload: RazorpayHandlerResponse) {
  const response = await fetch("/api/razorpay/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Payment verification failed");
  }

  return response.json() as Promise<{ verified: boolean }>;
}

export async function initiateRazorpayCheckout(options: {
  keyId: string;
  amountInPaise: number;
  receipt: string;
  address: DeliveryAddress;
  onSuccess: (paymentId: string, orderId: string) => void;
  onDismiss: () => void;
}) {
  const scriptLoaded = await loadRazorpayScript();
  if (!scriptLoaded || !window.Razorpay) {
    throw new Error("Unable to load payment gateway. Please try again.");
  }

  const { orderId } = await createRazorpayOrder(
    options.amountInPaise,
    options.receipt
  );

  return new Promise<void>((resolve, reject) => {
    const razorpay = new window.Razorpay!({
      key: options.keyId,
      amount: options.amountInPaise,
      currency: "INR",
      name: "LtsHavBiryani",
      description: "Food Order Payment",
      order_id: orderId,
      prefill: {
        name: options.address.name,
        contact: options.address.phone,
      },
      theme: { color: "#F4B400" },
      handler: async (response) => {
        try {
          await verifyRazorpayPayment(response);
          options.onSuccess(response.razorpay_payment_id, orderId);
          resolve();
        } catch {
          reject(new Error("Payment verification failed"));
        }
      },
      modal: {
        ondismiss: () => {
          options.onDismiss();
          reject(new Error("Payment cancelled"));
        },
      },
    });

    razorpay.open();
  });
}

export const ORDER_STORAGE_KEY = "ltshav-last-order";

export function saveOrderToSession(order: OrderSummary) {
  sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
}

export function loadOrderFromSession(): OrderSummary | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = sessionStorage.getItem(ORDER_STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as OrderSummary;
  } catch {
    return null;
  }
}

export function clearOrderFromSession() {
  sessionStorage.removeItem(ORDER_STORAGE_KEY);
}
