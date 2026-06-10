import Razorpay from "razorpay";
import { NextResponse } from "next/server";

function getRazorpayInstance() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({ key_id: keyId, key_secret: keySecret });
}

export async function POST(request: Request) {
  try {
    const razorpay = getRazorpayInstance();
    if (!razorpay) {
      return NextResponse.json(
        {
          error:
            "Payment gateway is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.",
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const amount = Number(body.amount);
    const receipt = String(body.receipt ?? `rcpt_${Date.now()}`);

    if (!Number.isFinite(amount) || amount < 100) {
      return NextResponse.json(
        { error: "Invalid amount. Minimum order is ₹1." },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount),
      currency: "INR",
      receipt,
      notes: {
        source: "ltshav-biryani-frontend",
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Razorpay create order error:", error);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
