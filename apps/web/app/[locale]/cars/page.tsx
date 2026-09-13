"use client";

import { useState } from "react";
import { Button } from "@xcarbox/ui";
import { Car } from "@xcarbox/cars";
import { initiateCarBooking } from "@xcarbox/checkout";

const mockCars: Car[] = [
  {
    id: "car_1",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    pricePerDay: 150,
    isAvailable: true,
  },
  {
    id: "car_2",
    make: "BMW",
    model: "X5",
    year: 2025,
    pricePerDay: 350,
    isAvailable: false,
  },
];

export default function CarsPage() {
  const [bookingMessage, setBookingMessage] = useState<string>("");

  const handleBookCar = (car: Car) => {
    const currentUser = {
      id: "usr_101",
      email: "demo@xcarbox.com",
      fullName: "أحمد علي",
      role: "customer" as const,
      createdAt: new Date().toISOString(),
    };

    const result = initiateCarBooking(currentUser, car);
    setBookingMessage(`[${car.make} ${car.model}]: ${result.message}`);
  };

  return (
    <div className="p-8 dir-rtl">
      <h2 className="text-2xl font-bold mb-4">السيارات المتاحة للحجز</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {mockCars.map((car) => (
          <div
            key={car.id}
            className={`border p-4 rounded-lg shadow-sm ${
              car.isAvailable ? "bg-white" : "bg-gray-100"
            }`}
          >
            <h3 className="font-semibold text-lg">
              {car.make} {car.model} ({car.year})
            </h3>
            
            <p className="mt-2 text-sm text-gray-700">
              السعر اليومي: <strong>{car.pricePerDay} EUR</strong>
            </p>
            <p className="text-sm mb-4">
              الحالة:{" "}
              <span className={car.isAvailable ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                {car.isAvailable ? "متاحة" : "غير متاحة"}
              </span>
            </p>
            <Button onClick={() => handleBookCar(car)}>حجز الآن</Button>
          </div>
        ))}
      </div>

      {bookingMessage && (
        <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-md text-indigo-900">
          <strong>نتيجة معالجة الحجز:</strong> {bookingMessage}
        </div>
      )}
    </div>
  );
}