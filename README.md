# Typings for the npm packages `regex`

Compile `index.d.ts` via `tsc`:

```
cd regex-types
tsc
```

## `index.d.ts`

```ts
export declare function regex(
  flags: string
): (
  templateStrings: TemplateStringsArray,
  ...substitutions: Array<string | RegExp | PartialPattern>
) => RegExp;
export declare function regex(
  templateStrings: TemplateStringsArray,
  ...substitutions: Array<string | RegExp | PartialPattern>
): RegExp;

export declare function partial(
  templateStrings: TemplateStringsArray,
  ...substitutions: Array<string | RegExp | PartialPattern>
): PartialPattern;
export declare function partial(pattern: string): PartialPattern;

export declare class PartialPattern {
  #private;
  constructor(pattern: string);
  toString(): string;
}
```