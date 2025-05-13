/// <reference types="vite/client" />

interface ViteTypeOptions {
}

interface ImportMetaEnv {
  readonly VITE_OKTA_CLIENT_ID: string;
  readonly VITE_OKTA_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}