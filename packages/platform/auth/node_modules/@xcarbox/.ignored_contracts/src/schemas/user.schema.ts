import { z } from 'zod';
import { UserRole } from '../enums/status.enum';

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, 'الاسم مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  role: z.nativeEnum(UserRole),
});

export const LoginSchema = z.object({
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 خانات على الأقل'),
});