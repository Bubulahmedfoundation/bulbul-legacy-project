
/// <reference types="vite/client" />

// Netlify Identity Widget type declarations
declare global {
  interface Window {
    netlifyIdentity?: {
      init: (config?: any) => void;
      open: (tab?: string) => void;
      close: () => void;
      on: (event: string, callback: (user?: any) => void) => void;
      off: (event: string, callback?: (user?: any) => void) => void;
      currentUser: () => any;
      logout: () => void;
      gotrue: any;
    };
  }
}

export {};
