# Fantasy

## Repo Layout

Reducers are composed in the `state/reducer.js` file.

```text
src
|- components - all reusable generic "dumb" components
   |- {component}
   ...
   |- {component}
|- containers - higher order components that communicate with the store
   |- {domain container}
   ...
   |- {domain container}
|- pages - components that are mapped to endpoints
|- domain - configuration & initialization of redux
|- theme - all scss to override UiKit component themes
``` 
