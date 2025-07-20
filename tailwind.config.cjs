/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'phoenix-primary': '#0ea5e9',
        'phoenix-secondary': '#3b82f6',
        'ocean-phoenix': '#0891b2',
        'dragon-primary': '#ef4444',
        'success-green': '#059669',
        'guidance-orange': '#d97706',
        'canvas': '#f8fafc',
        'text-secondary': '#1e293b'
      }
    },
  },
  plugins: [],
}