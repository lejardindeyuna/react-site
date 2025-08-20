import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/react-site/' : '/',
  }
})
// export default defineConfig({
//   base:'/리포지토리이름/',
//   plugins: [react()],
// })
