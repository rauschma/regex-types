// TypeScript code can use this file to get static types for a module
// `regex` without types.

declare module 'regex' {
  export function regex(flags: string): (templateStrings: TemplateStringsArray, ...substitutions: Array<string | RegExp | PartialPattern>) => RegExp;
  export function regex(templateStrings: TemplateStringsArray, ...substitutions: Array<string | RegExp | PartialPattern>): RegExp;

  export function partial(templateStrings: TemplateStringsArray, ...substitutions: Array<string | RegExp | PartialPattern>): PartialPattern;
  export function partial(pattern: string): PartialPattern;

  export class PartialPattern {
    #private;
    constructor(pattern: string);
    toString(): string;
  }
}
