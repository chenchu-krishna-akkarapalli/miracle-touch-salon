'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URL(window.location.href).searchParams;
      const serviceParam = urlParams.get('service');
      if (serviceParam && ['haircut', 'coloring', 'spa', 'scalp', 'bridal', 'fixing'].includes(serviceParam)) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="flex flex-col gap-8 lg:gap-12 lg:flex-row lg:items-start lg:justify-between"
      >
        {/* Left heading */}
        <div className="flex flex-col gap-6 lg:max-w-[500px]">
          <h2 className="font-playfair text-[40px] font-semibold tracking-[-1.92px] leading-tight lg:text-[64px]">
            <span className="text-[#c9a84c]">Book your</span>{' '}
            <span className="text-white italic">saloon &amp; spa Appointment</span>
          </h2>
          <p className="font-futura font-[300] text-[20px] leading-relaxed text-[#c9a84c]">
            Reserve your chair with a master craftsman. Each booking begins with a
            personalised consultation to understand your needs, preferences, and hair
            history.
          </p>

          {/* Badge Cards Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col gap-2 p-5 rounded-[9px] border border-[#c9a84c]/20 bg-[#111]/80 backdrop-blur-sm transition-all hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/50 group cursor-default">
              <MapPin className="text-[#c9a84c] w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <div>
                <span className="block font-futura font-[600] text-[12px] text-white uppercase tracking-widest mb-1">Location</span>
                <span className="block font-futura font-[300] text-[14px] text-gray-300">123 Salon Street,<br />Mahadevapura, Bangalore</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-[9px] border border-[#c9a84c]/20 bg-[#111]/80 backdrop-blur-sm transition-all hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/50 group cursor-default">
              <Clock className="text-[#c9a84c] w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <div>
                <span className="block font-futura font-[600] text-[12px] text-white uppercase tracking-widest mb-1">Opening Hours</span>
                <span className="block font-futura font-[300] text-[14px] text-gray-300">Mon - Sun<br />09:00 AM - 08:00 PM</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-[9px] border border-[#c9a84c]/20 bg-[#111]/80 backdrop-blur-sm transition-all hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/50 group cursor-default">
              <Phone className="text-[#c9a84c] w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <div>
                <span className="block font-futura font-[600] text-[12px] text-white uppercase tracking-widest mb-1">Phone</span>
                <span className="block font-futura font-[300] text-[14px] text-gray-300">+91 98765 43210</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-[9px] border border-[#c9a84c]/20 bg-[#111]/80 backdrop-blur-sm transition-all hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/50 group cursor-default">
              <Mail className="text-[#c9a84c] w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <div>
                <span className="block font-futura font-[600] text-[12px] text-white uppercase tracking-widest mb-1">Email</span>
                <span className="block font-futura font-[300] text-[14px] text-gray-300">hello@SHOW OFFtouch.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="w-full overflow-hidden rounded-[9px] border border-[#c9a84c]/20 bg-[#111] lg:w-[765px] lg:min-h-[531px]">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full min-h-[531px] flex-col items-center justify-center p-8 lg:p-10 text-center gap-4"
            >
              <div className="w-[80px] h-[80px] rounded-full border-2 border-[#c9a84c] flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-playfair text-[32px] text-white font-semibold">Request Received</h3>
              <p className="font-futura text-[16px] text-gray-300 max-w-[400px]">
                Thank you for reserving a consultation with us, {formData.name || 'guest'}. Our team will contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={() => {
                  setFormData({ name: '', gender: '', service: '', date: '', time: '', notes: '' });
                  setIsSuccess(false);
                }}
                className="mt-6 font-futura text-[14px] text-[#c9a84c] uppercase tracking-widest hover:text-[#d4b45d] underline"
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <form
              className="flex flex-col gap-6 p-8 lg:p-10"
              onSubmit={handleSubmit}
            >
              {/* Row 1: Name + Gender */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-futura text-[#c9a84c] text-[14px] uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="bg-transparent border-b border-[#c9a84c]/30 text-white font-futura text-[16px] py-[8px] px-1 placeholder:text-[#a4a3a3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] rounded-[2px] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-futura text-[#c9a84c] text-[14px] uppercase tracking-widest">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#c9a84c]/30 text-white font-futura text-[16px] py-[8px] px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] rounded-[2px] transition-all [&>option]:bg-black"
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Services + Date */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-futura text-[#c9a84c] text-[14px] uppercase tracking-widest">Services</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#c9a84c]/30 text-white font-futura text-[16px] py-[8px] px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] rounded-[2px] transition-all [&>option]:bg-black"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="haircut">Haircuts &amp; Blowouts</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="spa">Hair Spa</option>
                    <option value="scalp">Scalp Therapy</option>
                    <option value="bridal">Bridal Styling</option>
                    <option value="fixing">Hair Fixing</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-futura text-[#c9a84c] text-[14px] uppercase tracking-widest">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#c9a84c]/30 text-white font-futura text-[16px] py-[8px] px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] rounded-[2px] transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Row 3: Time */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-futura text-[#c9a84c] text-[14px] uppercase tracking-widest">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#c9a84c]/30 text-white font-futura text-[16px] py-[8px] px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] rounded-[2px] transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Row 4: Notes (textarea) */}
              <div className="flex flex-col gap-2">
                <label className="font-futura text-[#c9a84c] text-[14px] uppercase tracking-widest">Message</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="bg-transparent border-b border-[#c9a84c]/30 text-white font-futura text-[16px] py-[8px] px-1 h-[100px] resize-none placeholder:text-[#a4a3a3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] rounded-[2px] transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-[10px] inline-flex h-14 w-full items-center justify-center gap-3 rounded-[9px] border border-[#c9a84c] bg-[#c9a84c] px-8 text-black transition-all duration-300 hover:bg-[#d4b45d] font-futura font-[600] text-[16px] uppercase tracking-widest ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span>{isSubmitting ? 'Processing...' : 'Reserve a Consultation'}</span>
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default BookingSection;
