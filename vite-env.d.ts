/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GEMINI_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module 'emailjs-com';
