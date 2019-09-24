[Documentation](../README.md) › [ClassComponent](classcomponent.md)

# Class: ClassComponent <**S, SS, S**>

## Type parameters

▪ **S**

▪ **SS**

▪ **S**

## Hierarchy

* Component‹[ComponentProps](../interfaces/componentprops.md)›

  ↳ **ClassComponent**

## Index

### Constructors

* [constructor](classcomponent.md#constructor)

### Properties

* [context](classcomponent.md#context)
* [props](classcomponent.md#props)
* [refs](classcomponent.md#refs)
* [state](classcomponent.md#state)
* [contextType](classcomponent.md#static-optional-contexttype)
* [displayName](classcomponent.md#static-displayname)

### Methods

* [UNSAFE_componentWillMount](classcomponent.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](classcomponent.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](classcomponent.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](classcomponent.md#optional-componentdidcatch)
* [componentDidMount](classcomponent.md#optional-componentdidmount)
* [componentDidUpdate](classcomponent.md#optional-componentdidupdate)
* [componentWillMount](classcomponent.md#optional-componentwillmount)
* [componentWillReceiveProps](classcomponent.md#optional-componentwillreceiveprops)
* [componentWillUnmount](classcomponent.md#optional-componentwillunmount)
* [componentWillUpdate](classcomponent.md#optional-componentwillupdate)
* [forceUpdate](classcomponent.md#forceupdate)
* [getSnapshotBeforeUpdate](classcomponent.md#optional-getsnapshotbeforeupdate)
* [render](classcomponent.md#render)
* [setState](classcomponent.md#setstate)
* [shouldComponentUpdate](classcomponent.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new ClassComponent**(`props`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›): *[ClassComponent](classcomponent.md)*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:425

**Parameters:**

Name | Type |
------ | ------ |
`props` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |

**Returns:** *[ClassComponent](classcomponent.md)*

\+ **new ClassComponent**(`props`: [ComponentProps](../interfaces/componentprops.md), `context?`: any): *[ClassComponent](classcomponent.md)*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:427

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ComponentProps](../interfaces/componentprops.md) |
`context?` | any |

**Returns:** *[ClassComponent](classcomponent.md)*

## Properties

###  context

• **context**: *any*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:425

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.

```ts
static contextType = MyContext
context!: React.ContextType<typeof MyContext>
```

**`deprecated`** if used without a type annotation, or without static contextType

**`see`** https://reactjs.org/docs/legacy-context.html

___

###  props

• **props**: *Readonly‹[ComponentProps](../interfaces/componentprops.md)› & Readonly‹object›*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:450

___

###  refs

• **refs**: *object*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:456

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹S›*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:451

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:410

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

___

### `Static` displayName

▪ **displayName**: *string* = "ClassComponent"

*Defined in [__test__/components.tsx:9](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L9)*

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:638

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:670

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:698

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:567

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:546

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›, `prevState`: Readonly‹S›, `snapshot?`: [SS](undefined)): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:609

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |
`prevState` | Readonly‹S› |
`snapshot?` | [SS](undefined) |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:624

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:653

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:562

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:683

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:442

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›, `prevState`: Readonly‹S›): *SS | null*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:603

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |
`prevState` | Readonly‹S› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *Element*

*Overrides void*

*Defined in [__test__/components.tsx:12](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L12)*

**Returns:** *Element*

___

###  setState

▸ **setState**<**K**>(`state`: function | null | S | object, `callback?`: undefined | function): *void*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:437

**Type parameters:**

▪ **K**: *keyof S*

**Parameters:**

Name | Type |
------ | ------ |
`state` | function &#124; null &#124; S &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[ComponentProps](../interfaces/componentprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

*Inherited from void*

Defined in /Users/dylanaubrey/Documents/workspaces/styled-snapshot/node_modules/@types/react/index.d.ts:557

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹[ComponentProps](../interfaces/componentprops.md)› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*
