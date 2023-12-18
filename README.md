# Grid Overlay

Show an overlay on top of your website to debug positioning elements in your css-grid.

## Install the package

```bash
npm install grid-debug-overlay --save-dev
```

…or

```bash
yarn add grid-debug-overlay --dev
```

## Import and initialize it:

```js
import GridOverlay from "grid-debug-overlay"
new GridOverlay()
```

To make sure you only see the overlay in development, you can use the `NODE_ENV` variable:

```js
if (process.env.NODE_ENV === "development") {
  new GridOverlay()
}
```

## Options

| Option       | Type     | Default          | Description                                                      |
| ------------ | -------- | ---------------- | ---------------------------------------------------------------- |
| `gridClass`  | `string` | `grid`           | The name of a css class that defines your grid                   |
| `columnProp` | `string` | `--grid-columns` | The name of a css custom prop that defines the number of columns |

## Example

```css
:root {
  --my-grid-columns: 6;
  --my-grid-margin: 10px;
  --my-grid-gap: 6px;
}

@media (min-width: 768px) {
  :root {
    --my-grid-columns: 24;
    --my-grid-gap: 8px;
  }
}

.my-grid {
  display: grid;
  grid-column-gap: var(--my-grid-gap);
  grid-template-columns: repeat(var(--my-grid-columns), minmax(0, 1fr));
  max-width: 100%;
  margin: 0 10px;
}
```

```js
import GridOverlay from "grid-debug-overlay"
new GridOverlay({
  gridClass: "my-grid",
  columnProp: "--my-grid-columns",
})
```

## Todo

[ ] Specify options as object with 'columns', 'gap', 'margin', 'maxWidth' as Numbers
