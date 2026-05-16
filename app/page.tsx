"use client";

import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");
  const [detail, setDetail] = useState("");
  const [customer, setCustomer] = useState("");
  const [tone, setTone] = useState("");
  const [template, setTemplate] = useState("facebook");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePost = async () => {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product,
        detail,
        customer,
        tone,
        template,
      }),
    });
     const data = await res.json();

    setResult(data.result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-2">
          AI เขียนโพสต์ขายของ
        </h1>

        <p className="text-gray-500 mb-8">
          สร้างโพสต์ขายของด้วย AI ภายในไม่กี่วินาที
        </p>
         <div className="space-y-4">

          <input
            type="text"
            placeholder="ชื่อสินค้า"
            className="w-full border p-4 rounded-xl"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />

          <textarea
            placeholder="รายละเอียดสินค้า"
            className="w-full border p-4 rounded-xl"
            rows={5}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
           <input
            type="text"
            placeholder="กลุ่มลูกค้า"
            className="w-full border p-4 rounded-xl"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />

          <input
            type="text"
            placeholder="โทนภาษา"
            className="w-full border p-4 rounded-xl"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          />
          <select
            className="w-full border p-4 rounded-xl"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option value="facebook">
              Facebook Ads
            </option>

            <option value="tiktok">
              TikTok
            </option>

            <option value="shopee">
              Shopee
            </option>
            <option value="luxury">
              Luxury
            </option>

            <option value="funny">
              สายฮา
            </option>
          </select>

          <button
            onClick={generatePost}
            className="w-full bg-black text-white p-4 rounded-xl text-lg font-semibold hover:opacity-90"
          >
            {loading ? "กำลังสร้าง..." : "สร้างโพสต์ด้วย AI"}
          </button>
          {result && (
            <div className="bg-gray-50 border p-6 rounded-2xl whitespace-pre-wrap mt-6">
              {result}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}