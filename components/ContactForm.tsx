"use client"

import { useState, FormEvent } from "react"

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  travelDates?: string;
  groupSize?: string;
}

interface FormStatus {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const fieldClass = "w-full font-sofia-pro text-sm text-stone-800 bg-transparent border-b border-stone-200 pb-3 focus:outline-none focus:border-stone-700 transition-colors duration-200 placeholder:text-stone-300"
const labelClass = "block font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-3"

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'Safari Inquiry',
    message: '',
    travelDates: '',
    groupSize: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    isLoading: false,
    isSuccess: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ isLoading: true, isSuccess: false, error: null });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submission:', formData);
      setStatus({ isLoading: false, isSuccess: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: 'Safari Inquiry', message: '', travelDates: '', groupSize: '' });
    } catch {
      setStatus({ isLoading: false, isSuccess: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-9">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-amber-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-amber-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-9">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254 000 000 000"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>Enquiry Type</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="Safari Inquiry">Safari Inquiry</option>
            <option value="MICE Services">MICE Services</option>
            <option value="Custom Itinerary">Custom Itinerary</option>
            <option value="General Question">General Question</option>
            <option value="Booking Support">Booking Support</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-9">
        <div>
          <label htmlFor="travelDates" className={labelClass}>Preferred Travel Dates</label>
          <input
            type="text"
            id="travelDates"
            name="travelDates"
            value={formData.travelDates}
            onChange={handleChange}
            placeholder="e.g. July 2025 or Flexible"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="groupSize" className={labelClass}>Group Size</label>
          <select
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="">Select group size</option>
            <option value="1-2 people">1–2 people</option>
            <option value="3-4 people">3–4 people</option>
            <option value="5-8 people">5–8 people</option>
            <option value="9-15 people">9–15 people</option>
            <option value="16+ people">16+ people</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your Message <span className="text-amber-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your dream African adventure..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status.error && (
        <p className="font-sofia-pro text-sm text-red-600">{status.error}</p>
      )}

      {status.isSuccess && (
        <div className="flex items-start gap-3 pt-2">
          <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400 inline-block mt-1.5" aria-hidden="true" />
          <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed">
            Thank you — we&apos;ll be in touch within 24 hours to begin planning your journey.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status.isLoading}
        className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(140,110,35,0.5)] hover:shadow-[0_2px_8px_rgba(140,110,35,0.65)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.isLoading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
