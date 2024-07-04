// Use tsc to generate an index.d.ts with the correct syntax

export function regex(flags: string): (templateStrings: TemplateStringsArray, ...substitutions: Array<string | RegExp | PartialPattern>) => RegExp;
export function regex(templateStrings: TemplateStringsArray, ...substitutions: Array<string | RegExp | PartialPattern>): RegExp;
export function regex(flagsOrTemplateStrings: any, ...substitutions: Array<any>): any {
}

export function partial(templateStrings: TemplateStringsArray, ...substitutions: Array<string | RegExp | PartialPattern>): PartialPattern;
export function partial(pattern: string): PartialPattern;
export function partial(patternOrTemplateStrings: any, ...substitutions: Array<any>): any {
}

export class PartialPattern {
  #value;
  constructor(pattern: string) {
    this.#value = pattern;
  }
  toString() {
    return String(this.#value);
  }
}