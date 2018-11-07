# mium

A set of react components.

### Installing

```sh
$ yarn
```

### Running the examples

```sh
$ yarn start
```

### Material resources

Some material resources for reference.

- [material-components/material-components-web-react](https://github.com/material-components/material-components-web-react)
- [angular/material2](https://github.com/angular/material2)
- [mui-org/material-ui](https://github.com/mui-org/material-ui)

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
interface IMyComponentProps {
  foo?: string;
}

const MyComponent: React.SFC<IMyComponentProps> = props => {
  return props.foo.toUpperCase();
};

MyComponent.defaultProps = {
  foo: "allo"
};
```

But TypeScript will continue conplains that props with default value possibly `undefined`.
And there's an [issue](https://github.com/Microsoft/TypeScript/issues/23812) for the TypeScript.

Fortunatly, TypeScript 3 comes a solution for this (see the _Support for defaultProps in JSX_ section):

```js
interface IMyComponentProps {
  foo?: string;
}

function MyComponent({ foo = "allo" }: IMyComponentProps) {
  return foo.toUpperCase();
}
```

#### Parcel dones't respect the TypeScript error

It just ignore and compile successfully. Related issue: _[🐛 Not displaying or honoring Typescript errors ](https://github.com/parcel-bundler/parcel/issues/465)_

So we need to using a TypeScript plugin for parcel [parcel-plugin-typescript](https://github.com/fathyb/parcel-plugin-typescript#readme). But seems not working with latest parcel, see the issue [here](https://github.com/fathyb/parcel-plugin-typescript/issues/60) and [here](https://github.com/parcel-bundler/parcel/issues/2129)

#### tslint and prettier conflicts
