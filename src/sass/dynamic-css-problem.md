## The problem
I want to scatter Sass variables throughout the form CSS but how do we update individual styles in the themer dynamically? It seems like it might be too slow to re-generate all the Sass and bring the new CSS back down. Sass.js exists, but it is quite large. [1]

## Possible Solution
Continue to write in Sass but use a tool[2] to generate a special CSS document for the themer that uses CSS custom properties. Then the JS in the themer would just need to swap out variable definitions rather than the entire style sheet.

### Caveats
We'd have to generate this special CSS doc in such a way that it was always available, even in development. It would need to be generated whenever the underlying Sass had changed but be cached as much as possible. We'd also need to polyfill it for IE 11.[3]

[1] https://github.com/medialize/sass.js/
[2] https://www.npmjs.com/package/sass-to-css-variables
[3] https://github.com/aaronbarker/css-variables-polyfill