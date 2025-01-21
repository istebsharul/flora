import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'text': '2px 2px 4px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        'arial-rounded': ['"Arial Rounded MT Bold"', 'sans-serif'],
        'gabriola': ['Gabriola', 'serif'],
        'palatino': ['Palatino', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust these values as needed
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Install `tailwindcss-textshadow` plugin
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '3px black',
          'color': 'black',
        },
      })
    }
  ],
} satisfies Config;
