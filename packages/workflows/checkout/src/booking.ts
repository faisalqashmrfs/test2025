import { Car } from '@xcarbox/cars';

export interface BookingUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
  createdAt: string;
}

export function initiateCarBooking(user: BookingUser, car: Car) {
  if (!car.isAvailable) {
    return {
      success: false,
      message: `عذراً، السيارة ${car.make} ${car.model} غير متاحة للحجز حالياً.`,
    };
  }

  return {
    success: true,
    message: `تم بدء عملية الحجز بنجاح للمستخدم ${user.fullName}.`,
  };
}