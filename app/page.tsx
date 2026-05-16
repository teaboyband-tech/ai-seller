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

  /* =========================================================
     GENERATE POST
  ========================================================= */

  const generatePost = async () => {
    if (!product || !detail) {
      alert("กรุณากรอกข้อมูลสินค้า");
      return;
    }

    try {
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

      if (!data.success) {
        alert("เกิดข้อผิดพลาด");
        return;
      }

      setResult(data.result);
    } catch (error) {
      console.error(error);

      alert("ไม่สามารถเชื่อมต่อ AI ได้");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">

      {/* =========================================================
         HERO SECTION START
      ========================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* =========================================================
             LEFT CONTENT
          ========================================================= */}

          <div>

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur-xl">

              🚀 AI Marketing Assistant

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-8">

              เขียนโพสต์ขายของ

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">

                {" "}ด้วย AI

              </span>

            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mt-8 max-w-xl">

              สร้าง Caption, Hook, CTA และ Hashtag
              สำหรับ Facebook, TikTok และ Shopee
              ภายในไม่กี่วินาที

            </p>

            {/* BADGES */}

            <div className="flex flex-wrap gap-4 mt-10">

              <div className="bg-white/10 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                ⚡ สร้างเร็ว
              </div>

              <div className="bg-white/10 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                🎯 เพิ่มยอดขาย
              </div>

              <div className="bg-white/10 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                🤖 ใช้งานฟรี
              </div>

            </div>

          </div>

          {/* =========================================================
             FORM SECTION START
          ========================================================= */}

          <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                ✨
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  สร้างโพสต์ด้วย AI
                </h2>

                <p className="text-gray-400 text-sm">
                  พร้อมใช้งานทันที
                </p>

              </div>

            </div>

            <div className="space-y-5">

              {/* PRODUCT */}

              <div>

                <label className="text-sm text-gray-400 block mb-2">
                  ชื่อสินค้า
                </label>

                <input
                  type="text"
                  placeholder="เช่น รองเท้าวิ่งผู้หญิง"
                  className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />

              </div>

              {/* DETAIL */}

              <div>

                <label className="text-sm text-gray-400 block mb-2">
                  รายละเอียดสินค้า
                </label>

                <textarea
                  rows={4}
                  placeholder="เช่น เบา ใส่สบาย ระบายอากาศดี"
                  className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />

              </div>

              {/* CUSTOMER */}

              <div>

                <label className="text-sm text-gray-400 block mb-2">
                  กลุ่มลูกค้า
                </label>

                <input
                  type="text"
                  placeholder="เช่น ผู้หญิงวัยทำงาน"
                  className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                />

              </div>

              {/* TONE */}

              <div>

                <label className="text-sm text-gray-400 block mb-2">
                  โทนภาษา
                </label>

                <input
                  type="text"
                  placeholder="เช่น สนุก หรูหรา วัยรุ่น"
                  className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                />

              </div>

              {/* TEMPLATE */}

              <div>

                <label className="text-sm text-gray-400 block mb-2">
                  Template
                </label>

                <select
                  className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
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

              </div>

              {/* BUTTON */}

              <button
                onClick={generatePost}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 p-4 rounded-2xl text-lg font-bold hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >

                {loading
                  ? "⏳ กำลังสร้างโพสต์..."
                  : "🚀 สร้างโพสต์ด้วย AI"}

              </button>

            </div>

          </div>

          {/* =========================================================
             FORM SECTION END
          ========================================================= */}

        </div>

      </section>

      {/* =========================================================
         HERO SECTION END
      ========================================================= */}

      {/* =========================================================
         RESULT SECTION START
      ========================================================= */}

      {result && (

        <section className="max-w-5xl mx-auto px-6 pb-20">

          <div className="bg-white text-black rounded-[32px] p-8 shadow-2xl border border-gray-200">

            {/* TOP */}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

              <div>

                <h2 className="text-4xl font-black">
                  ✨ ผลลัพธ์จาก AI
                </h2>

                <p className="text-gray-500 mt-2">
                  พร้อมนำไปโพสต์ได้ทันที
                </p>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="bg-black text-white px-5 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
                >
                  📋 Copy
                </button>

                <button
                  onClick={() => setResult("")}
                  className="bg-gray-200 text-black px-5 py-3 rounded-2xl font-semibold"
                >
                  🔄 ล้างผลลัพธ์
                </button>

              </div>

            </div>

            {/* CONTENT */}

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 whitespace-pre-wrap leading-relaxed text-lg">

              {result}

            </div>

          </div>

        </section>

      )}

      {/* =========================================================
         RESULT SECTION END
      ========================================================= */}

      {/* =========================================================
         FEATURES SECTION START
      ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-black">
            ทำไมคนขายของถึงชอบเรา
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            ประหยัดเวลาและเพิ่มยอดขายด้วย AI
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:translate-y-[-5px] transition-all">

            <div className="text-6xl mb-6">
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-4">
              สร้างเร็ว
            </h3>

            <p className="text-gray-300 leading-relaxed">
              ได้ Caption และ Hook ภายในไม่กี่วินาที
            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:translate-y-[-5px] transition-all">

            <div className="text-6xl mb-6">
              🎯
            </div>

            <h3 className="text-2xl font-bold mb-4">
              เพิ่มยอดขาย
            </h3>

            <p className="text-gray-300 leading-relaxed">
              AI ช่วยเขียนให้น่าสนใจและดึงดูดลูกค้า
            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:translate-y-[-5px] transition-all">

            <div className="text-6xl mb-6">
              🤖
            </div>

            <h3 className="text-2xl font-bold mb-4">
              หลาย Template
            </h3>

            <p className="text-gray-300 leading-relaxed">
              รองรับ Facebook, TikTok, Shopee และอื่นๆ
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
         FEATURES SECTION END
      ========================================================= */}

    </main>
  );
}
