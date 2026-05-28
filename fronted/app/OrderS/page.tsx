"use client"
import React from "react";
import { FaCircleCheck, FaWhatsapp } from "react-icons/fa6";

const Page = () => {

    // 🔥 Dummy Data (replace later with real data)
    const order = {
        id: "ORD123456",
        items: [
            { name: "Chicken Biryani", qty: 2, price: 599 },
            { name: "Special Combo", qty: 1, price: 799 }
        ],
        total: 1997,
        delivery: 49,
        tax: 120,
        finalTotal: 2166,
        paymentMethod: "Online Payment",
        paymentStatus: "failed",
        address: {
            name: "John Doe",
            phone: "9876543210",
            street: "MG Road",
            city: "Bangalore",
            pincode: "560001"
        }
    };

    // ✅ WhatsApp Message Generator
    const whatsappMessage = encodeURIComponent(`
Order Help Request

Order ID: ${order.id}

Items:
${order.items.map(i => `${i.name} x${i.qty}`).join("\n")}

Total: ₹${order.finalTotal}

Payment: ${order.paymentMethod}
Payment Status : ${order.paymentStatus}


Address:
${order.address.name}
${order.address.phone}
${order.address.street}, ${order.address.city} - ${order.address.pincode}
  `);

    const whatsappLink = `https://wa.me/8147503170?text=${whatsappMessage}`; // replace number

    return (
        <div className="min-h-screen bg-[#0B1F2E] text-white px-4 md:px-10 py-8">

            {/* SUCCESS HEADER */}
            <div className="flex flex-col items-center text-center mb-8">
                <FaCircleCheck className="text-[#22C55E] text-5xl mb-3" />
                <h1 className="text-2xl md:text-3xl font-bold">
                    Order Placed Successfully 🎉
                </h1>
                <p className="text-[#9CA3AF] mt-2">
                    Your delicious food is on the way!
                </p>
            </div>

            {/* GRID */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* LEFT SECTION */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* ORDER DETAILS */}
                    <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">
                        <h2 className="text-lg font-semibold mb-4">Order Details</h2>

                        <div className="flex flex-col gap-3">
                            {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                    <span>{item.name} x{item.qty}</span>
                                    <span className="text-[#F4B400]">₹ {item.price}</span>
                                </div>
                            ))}
                        </div>

                        <hr className="border-[#2C4A5F] my-4" />

                        <div className="flex justify-between text-sm text-[#9CA3AF]">
                            <span>Subtotal</span>
                            <span className="text-white">₹ {order.total}</span>
                        </div>

                        <div className="flex justify-between text-sm text-[#9CA3AF]">
                            <span>Delivery</span>
                            <span className="text-white">₹ {order.delivery}</span>
                        </div>

                        <div className="flex justify-between text-sm text-[#9CA3AF]">
                            <span>Tax</span>
                            <span className="text-white">₹ {order.tax}</span>
                        </div>

                        <div className="flex justify-between text-base font-semibold mt-3">
                            <span>Total</span>
                            <span className="text-[#F4B400]">₹ {order.finalTotal}</span>
                        </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">
                        <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>

                        <div className="text-sm text-[#9CA3AF]">
                            <p className="text-white font-medium">{order.address.name}</p>
                            <p>{order.address.phone}</p>
                            <p>{order.address.street}</p>
                            <p>{order.address.city} - {order.address.pincode}</p>
                        </div>
                    </div>

                    {/* PAYMENT */}
                    <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">
                        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>

                        <div className="flex justify-between text-sm">
                            <span className="text-[#9CA3AF]">Method</span>
                            <span className="text-white">{order.paymentMethod}</span>
                        </div>

                        <div className="flex justify-between text-sm mt-2">
                            <span className="text-[#9CA3AF]">Status</span>
                            <span className="text-[#22C55E] font-medium">Paid</span>
                        </div>
                    </div>

                </div>

                {/* RIGHT PANEL */}
                <div className="h-fit">

                    <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">

                        <h2 className="text-lg font-semibold mb-4">Need Help?</h2>

                        <p className="text-sm text-[#9CA3AF] mb-4">
                            Facing any issue with your order? Contact us instantly on WhatsApp.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-[#25D366] text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
                        >
                            <FaWhatsapp /> Chat on WhatsApp
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Page;