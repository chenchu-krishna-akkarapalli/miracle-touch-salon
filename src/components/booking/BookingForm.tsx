'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';
import { useBookingStore } from '@/store/bookingSlice';
import { SERVICES, TIME_SLOTS } from '@/config/constants';
import type { BookingStep } from '@/types/booking';

const steps: { key: BookingStep; label: string }[] = [
  { key: 'service', label: 'Select Service' },
  { key: 'datetime', label: 'Date & Time' },
  { key: 'details', label: 'Your Details' },
  { key: 'confirm', label: 'Confirm' },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export function BookingForm() {
  const { step, formData, setStep, nextStep, prevStep, updateFormData, reset } =
    useBookingStore();
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const currentIdx = steps.findIndex((s) => s.key === step);

  const goNext = useCallback(() => {
    setDirection(1);
    nextStep();
  }, [nextStep]);

  const goBack = useCallback(() => {
    setDirection(-1);
    prevStep();
  }, [prevStep]);

  const handleSubmit = useCallback(async () => {
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // Error handled silently – toast can be added later
    }
  }, [formData, reset]);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-gold bg-black p-12 text-center">
        <div className="flex size-20 items-center justify-center rounded-full border-2 border-mint">
          <Check className="size-10 text-mint" />
        </div>
        <h3 className="font-playfair text-3xl font-semibold text-white">Booking Confirmed!</h3>
        <p className="font-poppins text-base text-salon-muted">
          We&apos;ll send a confirmation to your email shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Stepper */}
      <div className="mb-12 flex items-center justify-between">
        {steps.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => {
              if (i < currentIdx) {
                setDirection(-1);
                setStep(s.key);
              }
            }}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div
              className={`flex size-10 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                i <= currentIdx
                  ? 'border-gold bg-gold text-black'
                  : 'border-salon-gray text-salon-gray'
              }`}
            >
              {i < currentIdx ? <Check className="size-4" /> : i + 1}
            </div>
            <span
              className={`hidden font-poppins text-xs sm:block ${
                i <= currentIdx ? 'text-gold' : 'text-salon-muted'
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
        >
          {step === 'service' && (
            <div className="flex flex-col gap-6">
              <h3 className="font-playfair text-2xl font-semibold text-white">
                Choose a Service
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {SERVICES.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => updateFormData({ serviceId: svc.id })}
                    className={`rounded-lg border p-6 text-left transition-all duration-200 ${
                      formData.serviceId === svc.id
                        ? 'border-mint bg-mint/10'
                        : 'border-gold/40 bg-black hover:border-gold'
                    }`}
                  >
                    <h4 className="font-playfair text-lg font-medium text-white">
                      {svc.name}
                    </h4>
                    <p className="mt-1 font-poppins text-sm text-salon-muted">
                      {svc.duration} · ₹{svc.price.toLocaleString('en-IN')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'datetime' && (
            <div className="flex flex-col gap-6">
              <h3 className="font-playfair text-2xl font-semibold text-white">
                Pick Date &amp; Time
              </h3>
              <div className="flex flex-col gap-4">
                <label className="font-poppins text-sm text-salon-muted">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData({ date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="h-[73px] rounded-lg border border-gold bg-black px-6 font-poppins text-white outline-none focus:border-mint"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-poppins text-sm text-salon-muted">Time</label>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.value}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => updateFormData({ time: slot.value })}
                      className={`rounded-lg border px-3 py-3 font-poppins text-sm transition-all ${
                        formData.time === slot.value
                          ? 'border-mint bg-mint/10 text-mint'
                          : slot.available
                            ? 'border-gold/40 text-white hover:border-gold'
                            : 'cursor-not-allowed border-salon-gray/20 text-salon-gray/30'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 'details' && (
            <div className="flex flex-col gap-6">
              <h3 className="font-playfair text-2xl font-semibold text-white">
                Your Details
              </h3>
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => updateFormData({ name: e.target.value })}
                  className="h-[73px] rounded-lg border border-gold bg-transparent px-6 font-poppins text-white placeholder:text-salon-muted outline-none focus:border-mint"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                  className="h-[73px] rounded-lg border border-gold bg-transparent px-6 font-poppins text-white placeholder:text-salon-muted outline-none focus:border-mint"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => updateFormData({ phone: e.target.value })}
                  className="h-[73px] rounded-lg border border-gold bg-transparent px-6 font-poppins text-white placeholder:text-salon-muted outline-none focus:border-mint"
                />
                <textarea
                  placeholder="Special Requests (Optional)"
                  value={formData.notes ?? ''}
                  onChange={(e) => updateFormData({ notes: e.target.value })}
                  rows={3}
                  className="rounded-lg border border-gold bg-transparent px-6 py-4 font-poppins text-white placeholder:text-salon-muted outline-none focus:border-mint resize-none"
                />
              </div>
            </div>
          )}

          {step === 'confirm' && (
            <div className="flex flex-col gap-6">
              <h3 className="font-playfair text-2xl font-semibold text-white">
                Review &amp; Confirm
              </h3>
              <div className="rounded-lg border border-gold bg-black/50 p-6">
                <dl className="divide-y divide-gold/20 font-poppins text-base">
                  <div className="flex justify-between py-3">
                    <dt className="text-salon-muted">Service</dt>
                    <dd className="text-white">
                      {SERVICES.find((s) => s.id === formData.serviceId)?.name ?? '—'}
                    </dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-salon-muted">Date</dt>
                    <dd className="text-white">{formData.date || '—'}</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-salon-muted">Time</dt>
                    <dd className="text-white">{formData.time || '—'}</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-salon-muted">Name</dt>
                    <dd className="text-white">{formData.name || '—'}</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-salon-muted">Email</dt>
                    <dd className="text-white">{formData.email || '—'}</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-salon-muted">Phone</dt>
                    <dd className="text-white">{formData.phone || '—'}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        {currentIdx > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-2 font-poppins text-sm text-salon-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" /> Back
          </button>
        ) : (
          <span />
        )}

        {step === 'confirm' ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="flex h-14 items-center gap-3 rounded-full border border-gold bg-gold px-8 text-black transition-all duration-300 hover:bg-gold-light"
          >
            <span className="font-syne text-lg font-semibold">Confirm Booking</span>
            <ArrowUpRight className="size-5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="flex h-14 items-center gap-3 rounded-full border border-gold bg-black px-8 transition-all duration-300 hover:bg-gold hover:text-black"
          >
            <span className="font-poppins text-lg font-medium text-white">Next</span>
            <ArrowUpRight className="size-5 text-gold" />
          </button>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
