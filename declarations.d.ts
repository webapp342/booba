// src/declarations.d.ts (or src/global.d.ts)

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

  const src: string;
  export default src;
}

// Yeni Eklenen Modül Tanımları
declare module '@floating-ui/react-dom';

// Custom JSX Element Declaration
declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': any; // You can specify a more detailed type if needed
  }
}