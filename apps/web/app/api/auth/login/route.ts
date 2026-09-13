import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // --- [ وضع المحاكاة المبدئي (Mocking) حتى يكتمل الباك إند] ---
    if (email === "demo@xcarbox.com" && password === "123456") {
      const mockUser = {
        id: "usr_101",
        email: "demo@xcarbox.com",
        fullName: "أحمد علي",
        role: "customer" as const,
        createdAt: new Date().toISOString(),
      };
      
      const mockToken = "mocked_jwt_token_xcarbox_2026";

      // حفظ التوكن في HTTP-Only Cookie مشفرة
      const cookieStore = await cookies();
      cookieStore.set("access_token", mockToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // أسبوع واحد
      });

      return NextResponse.json({ user: mockUser, success: true });
    }

    // في حال كانت البيانات غير مطابقة للمحاكاة
    return NextResponse.json(
      { message: "البريد الإلكتروني أو كلمة المرور غير صحيحة (جرب: demo@xcarbox.com / 123456)" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "حدث خطأ في الخادم الوسيط" },
      { status: 500 }
    );
  }
}