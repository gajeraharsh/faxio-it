'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Web Development',
  'Mobile App Development',
  'Shopify Development',
  'SaaS Development',
  'UI/UX Design',
  'API Development',
  'Firebase Integration',
  'E-commerce Development',
  'Other',
];

const budgets = [
  'Under $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  "I'm not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold font-display text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 max-w-sm">
          Thanks for reaching out. A member of our team will reply within 4 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Smith"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@company.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Company + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="company">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Acme Inc."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all bg-white"
        >
          <option value="" disabled>Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="budget">
          Project Budget
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all bg-white"
        >
          <option value="" disabled>Select a budget range...</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — what you're building, where you are in the process, and what kind of help you're looking for..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900
                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-gray-400">
        By submitting this form you agree to our{' '}
        <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>.
        We'll never share your information with third parties.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60
                   disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
