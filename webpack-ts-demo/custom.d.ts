//signifies custom definitions for TypeScript : pour importer des assets custom en TS (non code comme des images)
//https://webpack.js.org/guides/typescript/#importing-other-assets

declare module '*.png' {
    const content: any;
    export default content;
  }