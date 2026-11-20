import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repo is the GitHub Pages user site, so assets must resolve from /.
export default defineConfig({ plugins: [react()], base: '/' })
