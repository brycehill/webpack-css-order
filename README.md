1. Run the following: 

```sh
yarn && yarn dev && yarn prod
```

2. Examine the two css files in dist/.

3. Note the difference in CSS order. 

```css

/* Dev Build*/

.ComponentC_main {
  color: black;
}

.ComponentB_main {
  color: lightblue;
}

/* Prod Build */

.ComponentB_main {
  color: lightblue;
}

.ComponentC_main {
  color: black;
}

```

I can mitigate this by: 

1. Setting `sideEffects: true` in package.json. I'd prefer to not do this.
  - `git checkout with-sideeffects` and run the above steps

**or** 

2. Don't transpile ESM imports to CJS (which I think prevents tree shaking? Although I could be wrong).
