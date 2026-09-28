import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/elmassa-consult-wep/', // اكتب هنا اسم الـ repository بتاعك بين سلاشين
})