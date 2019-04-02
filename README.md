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
### UPDATE
This was fixed in v4.12.1 as described [here](https://github.com/webpack/webpack/issues/7094#issuecomment-399740371). However, 
the issue broke again in the next minor release (v4.13.0). I pushed a branch 
([webpack-v4.13.0-bad](https://github.com/brycehill/webpack-css-order/tree/webpack-v4.13.0-bad)) to demonstrate that:

```
git checkout webpack-v4.13.0-bad
yarn && yarn dev && yarn prod
```

And you will see that the css order differs between the dev and prod builds.

--- 

I can mitigate this by: 

1. Setting `sideEffects: true` in package.json. I'd prefer to not do this.
    - To test: `git checkout with-sideeffects` and run the above steps

**or** 

2. Don't transpile ESM imports to CJS (which I think prevents tree shaking? Although I could be wrong).
    - To test: `git checkout no-esm` and run the above.
