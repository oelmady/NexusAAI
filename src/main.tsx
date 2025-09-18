
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root');
if (root) {
  // Minimal placeholder for immediate feedback
  root.textContent = 'Loading NexusAAI…';
  // Console marker for remote diagnosis
  console.info('[NexusAAI] Placeholder injected at', new Date().toISOString());
}
createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

  // Debug marker for deployment diagnostics
  (window as any).__APP_MOUNTED = true
console.info('[NexusAAI] App mounted at', new Date().toISOString())
