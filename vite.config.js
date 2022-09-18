import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      WORKER_API_URL: env.WORKER_API_URL
    },
    plugins: [react()],
  }
})