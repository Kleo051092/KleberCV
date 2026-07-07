// Ensure globalThis.fetch and window.fetch have a setter to prevent "Cannot set property fetch of #<Window> which has only a getter" errors in sandboxed iframes.
try {
  if (typeof globalThis !== 'undefined') {
    let currentFetch = globalThis.fetch;
    try {
      Object.defineProperty(globalThis, 'fetch', {
        get() {
          return currentFetch;
        },
        set(newFetch) {
          currentFetch = newFetch;
        },
        configurable: true,
        enumerable: true
      });
    } catch (e) {
      console.warn('Could not define fetch on globalThis:', e);
    }
  }
  if (typeof window !== 'undefined' && window !== (globalThis as any)) {
    let currentFetch = window.fetch;
    try {
      Object.defineProperty(window, 'fetch', {
        get() {
          return currentFetch;
        },
        set(newFetch) {
          currentFetch = newFetch;
        },
        configurable: true,
        enumerable: true
      });
    } catch (e) {
      console.warn('Could not define fetch on window:', e);
    }
  }
} catch (e) {
  console.warn('Fetch interceptor setup failed:', e);
}

import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

