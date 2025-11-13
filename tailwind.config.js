/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // مسیرهای فایل‌های جاوا اسکریپت، تایپ‌اسکریپت و ... که کلاس‌های Tailwind در آن‌ها استفاده شده است.
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'shabnam': ['ShabnamFD', 'sans-serif'],
      },
    },
  },
  plugins: [],
};