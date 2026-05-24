import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-8xl font-bold font-display gradient-text mb-4">404</p>
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
