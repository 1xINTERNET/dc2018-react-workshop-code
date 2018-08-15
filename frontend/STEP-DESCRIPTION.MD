# Step 6

- Install `react-router-dom` module

- Add `<BrowserRouter />` parent component and `<Route />` for each path to the `<App />` component.

  - `<ArticleList />` will render on `/` and any path below that. We could have just rendered it outside of a `<Route />` but we may want to add a more specific route later on.

  - `<ArticleDetail />` will render on `/article/:id` routes. The `:id` will be the node ID.
    - In order for it to pick up this parameter properly we need to adjust the parameter destructuring in the component definition. (we now actually want `match.params.id`, not only `id`)
    - We also adjust the `propType` definition to adjust to this new property structure.
