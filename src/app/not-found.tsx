'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center space-y-6 p-8 glass-effect rounded-lg max-w-lg mx-auto">
        <h1 className="text-4xl font-bold gradient-text">404 - Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/" 
          className="button-gradient inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 