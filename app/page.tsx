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
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm mb-6">
              🚀 AI Marketing Assistant
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              เขียนโพสต์ขายของ
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {" "}ด้วย AI
              </span>
            </h1>

            <p className="text-gray-300 text-lg mt-6 leading-relaxed">
              สร้าง Caption, Hook และ Hashtag
              สำหรับ Facebook, TikTok, Shopee
              ภายในไม่กี่วินาที
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/10">
                ⚡ สร้างเร็ว
              </div>

              <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/10">
                🎯 เพิ่มยอดขาย
              </div>

              <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/10">
                🤖 ใช้งานฟรี
              </div>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold mb-6">
              ✨ สร้างโพสต์ด้วย AI
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="ชื่อสินค้า"
                className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />

              <textarea
                placeholder="รายละเอียดสินค้า"
                rows={4}
                className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />

              <input
                type="text"
                placeholder="กลุ่มลูกค้า"
                className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />

              <input
                type="text"
                placeholder="โทนภาษา"
                className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              />

              <select
                className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500"
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
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl text-lg font-bold hover:scale-[1.02] transition-all"
              >
                {loading
                  ? "กำลังสร้าง..."
                  : "🚀 สร้างโพสต์ด้วย AI"}
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* RESULT */}
      {result && (
        <section className="max-w-4xl mx-auto px-6 pb-20">

          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold">
                ✨ ผลลัพธ์จาก AI
              </h2>

              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="bg-black text-white px-4 py-2 rounded-xl"
              >
                Copy
              </button>

            </div>

            <div className="whitespace-pre-wrap leading-relaxed text-lg">
              {result}
            </div>

          </div>

        </section>
      )}

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            ทำไมคนขายของถึงชอบเรา
          </h2>

          <p className="text-gray-400 mt-4">
            ช่วยประหยัดเวลาและเพิ่มยอดขายด้วย AI
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
            <div className="text-5xl mb-4">⚡</div>

            <h3 className="text-2xl font-bold mb-3">
              สร้างเร็ว
            </h3>

            <p className="text-gray-300">
              ได้ Caption และ Hook ภายในไม่กี่วินาที
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
            <div className="text-5xl mb-4">🎯</div>

            <h3 className="text-2xl font-bold mb-3">
              เพิ่มยอดขาย
            </h3>

            <p className="text-gray-300">
              ใช้ AI ช่วยเขียนให้ดึงดูดและน่าซื้อ
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
            <div className="text-5xl mb-4">🤖</div>

            <h3 className="text-2xl font-bold mb-3">
              หลาย Template
            </h3>

            <p className="text-gray-300">
              รองรับ Facebook, TikTok, Shopee และอื่นๆ
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
