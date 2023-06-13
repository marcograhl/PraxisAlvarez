/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
  },
  // Disables Tailwind's reset etc
  corePlugins: {
    preflight: false
  },
  plugins: [],
}

