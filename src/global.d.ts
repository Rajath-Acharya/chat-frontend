declare module '*.svg';
declare module '*.png';
declare module '*.jpeg';

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
