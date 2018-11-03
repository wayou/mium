mium
===

A set of react components.

### Material resources

Some material resources for reference.

[material-components/material-components-web-react](https://github.com/material-components/material-components-web-react)
[angular/material2](https://github.com/angular/material2)
[mui-org/material-ui](https://github.com/mui-org/material-ui)


### Notes

Some notes about the problems when setup the project.

#### The new react hooks in TypeScript

React hooks are in proposal and there's no official definition types. So we need to use a custom one from community.
Fortunatly there's a pending PR of [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30057).
See the declartion file under `definition` folder.

#### `props.children`

TypeScript complains there's no such `children` property on props.

Give the Function Component the `React.SFT` type will solve the problem.

```js
interface IMyComponentProps{
    //...
}

const MyComponent: React.SFC<IMyComponentProps> = props => {
    return {props.children}
}
```

_See more: [React Stateless Functional Component with TypeScript](https://medium.com/@ethan_ikt/react-stateless-functional-component-with-typescript-ce5043466011)_


#### default value for optional props

```js
interface IMyComponentProps{
    //...
}

const MyComponent: React.SFC<IMyComponentProps> = props => {
    return {props.children}
}

MyComponent.defaultProps = {
    // ...
}
```

But TypeScript will continue conplains that props with default value possibly `undefined`.

#### tslint and prettier conflicts

