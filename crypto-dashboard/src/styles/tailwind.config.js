// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          gray: {
            900: '#111827',
            800: '#1f2937',
            700: '#374151',
            600: '#4b5563',
            500: '#6b7280',
            400: '#9ca3af',
            300: '#d1d5db',
            200: '#e5e7eb',
            100: '#f3f4f6',
          },
          blue: {
            600: '#2563eb',
            500: '#3b82f6',
          },
        },
      },
    },
    plugins: [],
  }