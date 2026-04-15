import { z } from 'zod';

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  stylistId: string;
  stylistName: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  gender: 'male' | 'female' | 'other';
  status: BookingStatus;
  createdAt: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type BookingStep = 'service' | 'datetime' | 'details' | 'confirm';

export interface BookingFormData {
  name: string;
  gender: string;
  service: string;
  serviceId: string;
  date: string;
  time: string;
  email: string;
  phone: string;
  notes?: string;
}

export const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  gender: z.enum(['male', 'female', 'other'], { required_error: 'Please select a gender' }),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
});

export interface TimeSlot {
  value: string;
  label: string;
  available: boolean;
}
