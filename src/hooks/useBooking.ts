'use client';

import { useBookingStore } from '@/store/bookingSlice';
import { bookingSchema } from '@/types/booking';
import type { BookingFormData } from '@/types/booking';

export function useBooking() {
  const store = useBookingStore();

  const validateCurrentStep = (): boolean => {
    const { formData, step } = store;

    switch (step) {
      case 'service':
        return formData.service !== '' || formData.serviceId !== '';
      case 'datetime':
        return formData.date !== '' && formData.time !== '';
      case 'details':
        return formData.name !== '' && formData.email !== '' && formData.phone !== '';
      case 'confirm':
        return bookingSchema.safeParse(formData).success;
      default:
        return false;
    }
  };

  const submitBooking = async (data: BookingFormData) => {
    const validated = bookingSchema.parse(data);

    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      throw new Error('Booking failed');
    }

    return response.json();
  };

  return {
    ...store,
    validateCurrentStep,
    submitBooking,
  };
}
