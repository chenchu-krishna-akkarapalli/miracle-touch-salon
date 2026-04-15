import { create } from 'zustand';
import type { BookingStep, BookingFormData } from '@/types/booking';

interface BookingState {
  step: BookingStep;
  formData: BookingFormData;
  setStep: (step: BookingStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<BookingFormData>) => void;
  reset: () => void;
}

const STEP_ORDER: BookingStep[] = ['service', 'datetime', 'details', 'confirm'];

const initialFormData: BookingFormData = {
  name: '',
  gender: '',
  service: '',
  serviceId: '',
  date: '',
  time: '',
  email: '',
  phone: '',
  notes: '',
};

export const useBookingStore = create<BookingState>((set) => ({
  step: 'service',
  formData: initialFormData,
  setStep: (step) => set({ step }),
  nextStep: () =>
    set((state) => {
      const idx = STEP_ORDER.indexOf(state.step);
      return { step: STEP_ORDER[Math.min(idx + 1, STEP_ORDER.length - 1)] };
    }),
  prevStep: () =>
    set((state) => {
      const idx = STEP_ORDER.indexOf(state.step);
      return { step: STEP_ORDER[Math.max(idx - 1, 0)] };
    }),
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  reset: () => set({ step: 'service', formData: initialFormData }),
}));
