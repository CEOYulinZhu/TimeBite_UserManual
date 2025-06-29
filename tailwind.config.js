/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // 主色系统
        avocado: '#8C9E7E', // 牛油果核心绿
        wheat: '#D4A57C',   // 烘焙小麦米
        tomato: '#B3423A',  // 成熟番茄红
        // 辅助系统
        sandwhite: '#FAF6F0',  // 砂岩白 - 基底色
        truffle: '#4A2F2B',    // 黑松露深咖 - 强调色
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

