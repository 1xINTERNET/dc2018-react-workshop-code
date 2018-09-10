# Step 6

- Install `react-router-dom` module

- Add `BrowserRouter` parent component and a `Route` for each path to the `App` component.

  - `ArticleList` will render on `/` and any path below that.

  - `ArticleDetail` will render on `/article/:id` routes. The `:id` will be the node ID.
    - In order for it to pick up this parameter properly we need to adjust the parameter destructuring in the component definition. (we now actually want `match.params.id`, not only `id`)
    - We also adjust the `propType` definition to adjust to this new property structure.

Further reading: [The react-router documentation](https://reacttraining.com/react-router/web/guides/basic-components)
