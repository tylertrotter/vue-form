# Notes on CSS

## Scoping
Vue's `scoped` attribute shouldn't be used. Instead each component should have a name and that name should be applied to the root element as a class. E.g. c-rating-scale. CSS should be scoped using this class. If you need to scope things based on the form's root, use the .cg class. You shouldn't have to mix `.cg` with the component class name, one or the other should do.

### Why cg?
The `cg` class name is chosen over `cognito` to minize payload. The cognito class is used 1345 times in required.css alone. If nothing else changed this would result in about 5kb in savings in that file. However, hopefully this scoping class will not be used as much after the refactor and we can use the full `.cognito`.

## Common Styles
The styles in the common folder are usable by more than one component. However, these styles should not be included globally because they will output actual CSS that may not always be used. However, Webpack is smart enough to only output the css once if it is imported into multiple components. Just make sure you don't import it in a `scoped` style block, otherwise it will get ouptut twice.

## Globally Included Sass
Variables, mixins, and anything else that doesn't output CSS unless used can and should be included globally in the webpack.config.js file with the sass-resources-loader.