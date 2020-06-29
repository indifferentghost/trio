import util from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

export const __init__ = dir => {
  const __dirname = Symbol.for('__dirname');
  globalThis[__dirname] = path.dirname(path.resolve(fileURLToPath(dir)));
  return __dirname;
};

export const getRootDirectory = () => {
  const dirSymbol = Symbol.for('__dirname');
  if (!globalThis[dirSymbol]) {
    throw new Error(`
      no symbol was found for directory name,
      this probably means you haven't run the 
      __init__function returned from this file
    `.trim());
    return;
  }
  return globalThis[dirSymbol];
};

export const getPath = filename => {
  const __dirname = getRootDirectory();
  return path.resolve(__dirname, filename);
};

