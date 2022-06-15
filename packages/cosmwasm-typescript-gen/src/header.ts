import pkg from '../package.json';
const version = process.env.NODE_ENV === 'test' ? 'latest' : pkg.version;
export const header = `/**
* This file was automatically generated by ${pkg.name}@${version}.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the ${pkg.name} generate command to regenerate this file.
*/
\n`;
