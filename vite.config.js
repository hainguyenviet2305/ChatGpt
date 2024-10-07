import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Hoặc '0.0.0.0'
    port: 3000,  // Bạn có thể thay đổi port thành bất kỳ cổng nào bạn muốn
  },
});
