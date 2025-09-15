"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setStatus({ isLoading: true, isSuccess: false, error: null });

    // Simulate form submission for static site
    // In production, this would integrate with a form service like Netlify Forms, Formspree, etc.
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For now, we'll just show a success message
      // TODO: Integrate with external form service
      console.log('Form submission:', formData);
      
      setStatus({ isLoading: false, isSuccess: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Safari Inquiry',
        message: '',
        travelDates: '',
        groupSize: ''
      });
    } catch (error) {
      setStatus({ 
        isLoading: false, 
        isSuccess: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="subject">Subject</Label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-2 w-full px-3 py-2 border border-input rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="Safari Inquiry">Safari Inquiry</option>
            <option value="MICE Services">MICE Services</option>
            <option value="Custom Itinerary">Custom Itinerary</option>
            <option value="General Question">General Question</option>
            <option value="Booking Support">Booking Support</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="travelDates">Preferred Travel Dates</Label>
          <Input
            type="text"
            id="travelDates"
            name="travelDates"
            value={formData.travelDates}
            onChange={handleChange}
            placeholder="e.g., July 2024 or Flexible"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="groupSize">Group Size</Label>
          <select
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            className="mt-2 w-full px-3 py-2 border border-input rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select group size</option>
            <option value="1-2 people">1-2 people</option>
            <option value="3-4 people">3-4 people</option>
            <option value="5-8 people">5-8 people</option>
            <option value="9-15 people">9-15 people</option>
            <option value="16+ people">16+ people</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your dream African adventure..."
          className="mt-2"
        />
      </div>

      {status.error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-sm">
          <p className="text-destructive">{status.error}</p>
        </div>
      )}

      {status.isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
          <p className="text-green-600">
            Thank you for your message! We&apos;ll get back to you within 24 hours to help plan your African adventure.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status.isLoading}
        className="w-full"
        size="lg"
      >
        {status.isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}