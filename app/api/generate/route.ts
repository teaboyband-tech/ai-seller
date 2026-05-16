import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const templates: Record<string, string> = {
  facebook: `
เขียนโพสต์สไตล์ Facebook Ads
- เปิด Hook แรง
- เน้นปัญหา + วิธีแก้
- มี Call To Action
- อ่านง่าย
`,
 tiktok: `
เขียนโพสต์สไตล์ TikTok
- Hook ตั้งแต่บรรทัดแรก
- ภาษาไว
- วัยรุ่น
- ชวนดูต่อ
- มี Emoji
`,
shopee: `
เขียนรายละเอียดสินค้า Shopee
- อ่านง่าย
- เน้นจุดเด่นสินค้า
- Bullet point
- ปิดการขาย
`,

  luxury: `
เขียนสไตล์ Luxury
- ดูแพง
- หรูหรา
- Minimal
- ใช้คำพรีเมียม
`,
funny: `
เขียนสไตล์สายฮา
- ตลก
- เป็นกันเอง
- มีมุก
- อ่านแล้วหยุดดู
`,
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      product,
      detail,
      customer,
      tone,
      template,
    } = body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const selectedTemplate =
      templates[template] || templates.facebook;
      const prompt = `
คุณคือผู้เชี่ยวชาญด้านการตลาดออนไลน์

${selectedTemplate}

ข้อมูลสินค้า:

สินค้า: ${product}
รายละเอียด: ${detail}
กลุ่มลูกค้า: ${customer}
โทนภาษา: ${tone}

กรุณาสร้าง:

1. Hook
2. Caption
3. Call To Action
4. Hashtag
จัดรูปแบบให้อ่านง่าย
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    return Response.json({
      success: true,
      result: text,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: "Something went wrong",
    });
  }
}