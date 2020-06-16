# LitElement Boilerplate

 - LitElement
 - TypeScript
 - Rollup
 - Karma
 - ESlint + Prettier
 - Storybook
 - Pre-commit hook (lint-staged)
 - Follows open-wc recommendations
 - es-dev-server

Known issues (in `src/tests/my-app.test.ts` only). Just a TypeScript thing:

```
/Users/derkjan/Projects/lit-element-boilerplate/src/tests/my-app.test.ts
   6:1   error    'describe' is not defined                                              no-undef
   8:5   error    'beforeEach' is not defined                                            no-undef
  12:5   error    'it' is not defined                                                    no-undef
  13:47  warning  Forbidden non-null assertion                                           @typescript-eslint/no-non-null-assertion
  13:47  warning  Forbidden non-null assertion                                           @typescript-eslint/no-non-null-assertion
  16:9   error    Expected an assignment or function call and instead saw an expression  no-unused-expressions
  20:5   error    'it' is not defined                                                    no-undef
```
