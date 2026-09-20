import { z } from 'zod';
import { CarStatus } from '../enums/status.enum';

export const CarSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(3, 'عنوان السيارة يجب أن يكون 3 أحرف على الأقل'),
  pricePerDay: z.number().positive('السعر اليومي يجب أن يكون رقماً موجباً'),
  status: z.nativeEnum(CarStatus),
  companyId: z.string().uuid(),
});

export const CreateCarSchema = CarSchema.omit({ id: true });
export const UpdateCarSchema = CreateCarSchema.partial();