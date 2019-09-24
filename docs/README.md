[Documentation](README.md)

# Documentation

## Index

### Classes

* [ClassComponent](classes/classcomponent.md)

### Interfaces

* [ComponentProps](interfaces/componentprops.md)
* [PrivateContext](interfaces/privatecontext.md)
* [SCComponentStyle](interfaces/sccomponentstyle.md)
* [SCSerializedTree](interfaces/scserializedtree.md)
* [SCSerializedTreeProps](interfaces/scserializedtreeprops.md)
* [SerializedTree](interfaces/serializedtree.md)
* [StyledSnapshotConfig](interfaces/styledsnapshotconfig.md)
* [UnwrapElementResult](interfaces/unwrapelementresult.md)

### Type aliases

* [ComponentTree](README.md#componenttree)
* [ComponentTypeElement](README.md#componenttypeelement)
* [ContextConsumerElement](README.md#contextconsumerelement)
* [ContextProviderElement](README.md#contextproviderelement)
* [DomElement](README.md#domelement)
* [ExtractedContexts](README.md#extractedcontexts)
* [ForwardRefComponent](README.md#forwardrefcomponent)
* [ForwardRefElement](README.md#forwardrefelement)
* [FragmentElement](README.md#fragmentelement)
* [MandatoryUnwrapElement](README.md#mandatoryunwrapelement)
* [MemoElement](README.md#memoelement)
* [ReactTreeVisitor](README.md#reacttreevisitor)
* [SCForwardRefComponent](README.md#scforwardrefcomponent)
* [TreeNode](README.md#treenode)
* [UnwrapCustomizer](README.md#unwrapcustomizer)
* [ValidElement](README.md#validelement)

### Variables

* [CONFIG_FILENAME](README.md#const-config_filename)
* [ForwardRefComponent](README.md#const-forwardrefcomponent)
* [IGNORE_DATA_ATTR](README.md#const-ignore_data_attr)
* [MemoComponent](README.md#const-memocomponent)
* [PORTAL](README.md#const-portal)
* [RENDER_PROP](README.md#const-render_prop)
* [StyledDiv](README.md#const-styleddiv)
* [StyledItem](README.md#const-styleditem)
* [StyledList](README.md#const-styledlist)
* [UNWRAP_DATA_ATTR](README.md#const-unwrap_data_attr)
* [WithThemeClassComponent](README.md#const-withthemeclasscomponent)
* [contexts](README.md#let-contexts)
* [itemStyles](README.md#const-itemstyles)
* [portal](README.md#const-portal)

### Functions

* [ContextComponent](README.md#const-contextcomponent)
* [ContextConsumerComponent](README.md#const-contextconsumercomponent)
* [ContextProviderComponent](README.md#const-contextprovidercomponent)
* [FunctionComponent](README.md#const-functioncomponent)
* [PortalComponent](README.md#const-portalcomponent)
* [SCComponent](README.md#const-sccomponent)
* [SCContextComponent](README.md#const-sccontextcomponent)
* [SerializeComponent](README.md#const-serializecomponent)
* [collateCSS](README.md#collatecss)
* [collateRule](README.md#collaterule)
* [collateRules](README.md#collaterules)
* [createCSSHash](README.md#createcsshash)
* [createSnapshotElement](README.md#createsnapshotelement)
* [filterOutIgnoredElements](README.md#filteroutignoredelements)
* [generateStyledSnapshot](README.md#generatestyledsnapshot)
* [getChildComponentTypeElement](README.md#getchildcomponenttypeelement)
* [getChildren](README.md#getchildren)
* [getComponentName](README.md#getcomponentname)
* [getElementName](README.md#getelementname)
* [getStyledComponents](README.md#getstyledcomponents)
* [getStyledDisplayName](README.md#getstyleddisplayname)
* [hasUnwrapDataAttribute](README.md#hasunwrapdataattribute)
* [isClassComponent](README.md#isclasscomponent)
* [isComponentType](README.md#iscomponenttype)
* [isFunctionComponent](README.md#isfunctioncomponent)
* [isMemoType](README.md#ismemotype)
* [isStyledComponent](README.md#isstyledcomponent)
* [loadConfig](README.md#loadconfig)
* [toCollateCSS](README.md#tocollatecss)
* [toMandatoryUnwrap](README.md#tomandatoryunwrap)
* [toMatchStyledSnapshot](README.md#tomatchstyledsnapshot)
* [unwrap](README.md#unwrap)
* [unwrapElement](README.md#unwrapelement)
* [visit](README.md#visit)
* [visitChildren](README.md#visitchildren)
* [visitElement](README.md#visitelement)
* [visitFunctionProp](README.md#visitfunctionprop)
* [visitNode](README.md#visitnode)
* [visitProps](README.md#visitprops)

## Type aliases

###  ComponentTree

Ƭ **ComponentTree**: *ShallowWrapper‹object, Readonly‹__type›, Component‹__type, __type, any››*

*Defined in [types.ts:74](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L74)*

___

###  ComponentTypeElement

Ƭ **ComponentTypeElement**: *ReactElement‹PropsWithChildren‹__type›, ComponentClass› | ReactElement‹PropsWithChildren‹__type›, FunctionComponent›*

*Defined in [types.ts:24](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L24)*

___

###  ContextConsumerElement

Ƭ **ContextConsumerElement**: *ReactElement‹ConsumerProps‹any›, [Consumer](interfaces/privatecontext.md#consumer)‹any››*

*Defined in [types.ts:28](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L28)*

___

###  ContextProviderElement

Ƭ **ContextProviderElement**: *ReactElement‹ProviderProps‹any›, [Provider](interfaces/privatecontext.md#provider)‹any› & object›*

*Defined in [types.ts:31](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L31)*

___

###  DomElement

Ƭ **DomElement**: *ReactElement‹PropsWithChildren‹__type›, string›*

*Defined in [types.ts:33](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L33)*

___

###  ExtractedContexts

Ƭ **ExtractedContexts**: *Map‹ExoticComponent‹ConsumerProps‹any››, any›*

*Defined in [types.ts:92](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L92)*

___

###  ForwardRefComponent

Ƭ **ForwardRefComponent**: *ForwardRefExoticComponent‹PropsWithoutRef‹Element› & RefAttributes‹PropsWithChildren‹__type››› & object*

*Defined in [types.ts:35](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L35)*

___

###  ForwardRefElement

Ƭ **ForwardRefElement**: *ReactElement‹PropsWithChildren‹__type›, [ForwardRefComponent](README.md#forwardrefcomponent)›*

*Defined in [types.ts:42](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L42)*

___

###  FragmentElement

Ƭ **FragmentElement**: *ReactElement‹PropsWithChildren‹__type›, ExoticComponent‹object››*

*Defined in [types.ts:44](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L44)*

___

###  MandatoryUnwrapElement

Ƭ **MandatoryUnwrapElement**: *[ContextConsumerElement](README.md#contextconsumerelement) | [ContextProviderElement](README.md#contextproviderelement) | [ForwardRefElement](README.md#forwardrefelement) | [FragmentElement](README.md#fragmentelement) | [MemoElement](README.md#memoelement) | MemoExoticComponent‹ComponentType› | ReactPortal*

*Defined in [types.ts:46](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L46)*

___

###  MemoElement

Ƭ **MemoElement**: *ReactElement‹PropsWithChildren‹__type›, MemoExoticComponent‹ComponentType››*

*Defined in [types.ts:55](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L55)*

___

###  ReactTreeVisitor

Ƭ **ReactTreeVisitor**: *function*

*Defined in [types.ts:64](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L64)*

#### Type declaration:

▸ (`node`: ObjectMap): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ObjectMap |

___

###  SCForwardRefComponent

Ƭ **SCForwardRefComponent**: *[ForwardRefComponent](README.md#forwardrefcomponent) & object*

*Defined in [types.ts:111](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L111)*

___

###  TreeNode

Ƭ **TreeNode**: *[SerializedTree](interfaces/serializedtree.md)*

*Defined in [types.ts:90](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L90)*

___

###  UnwrapCustomizer

Ƭ **UnwrapCustomizer**: *function*

*Defined in [types.ts:72](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L72)*

#### Type declaration:

▸ (`element`: [ValidElement](README.md#validelement)): *[ValidElement](README.md#validelement) | ReactNode*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [ValidElement](README.md#validelement) |

___

###  ValidElement

Ƭ **ValidElement**: *[ComponentTypeElement](README.md#componenttypeelement) | [MandatoryUnwrapElement](README.md#mandatoryunwrapelement) | [DomElement](README.md#domelement)*

*Defined in [types.ts:62](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/types.ts#L62)*

## Variables

### `Const` CONFIG_FILENAME

• **CONFIG_FILENAME**: *"styled-snapshot.config.js"* =  "styled-snapshot.config.js" as const

*Defined in [constants.ts:1](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/constants.ts#L1)*

___

### `Const` ForwardRefComponent

• **ForwardRefComponent**: *ForwardRefExoticComponent‹[ComponentProps](interfaces/componentprops.md) & RefAttributes‹HTMLDivElement››* =  forwardRef<HTMLDivElement, ComponentProps>((props, ref) => (
  <ClassComponent {...props} innerRef={ref} />
))

*Defined in [__test__/components.tsx:39](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L39)*

___

### `Const` IGNORE_DATA_ATTR

• **IGNORE_DATA_ATTR**: *"data-styled-ignore"* = "data-styled-ignore"

*Defined in [constants.ts:7](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/constants.ts#L7)*

___

### `Const` MemoComponent

• **MemoComponent**: *NamedExoticComponent‹unknown› & object* =  memo(FunctionComponent)

*Defined in [__test__/components.tsx:48](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L48)*

___

### `Const` PORTAL

• **PORTAL**: *"Portal"* = "Portal"

*Defined in [constants.ts:3](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/constants.ts#L3)*

___

### `Const` RENDER_PROP

• **RENDER_PROP**: *"RenderProp"* = "RenderProp"

*Defined in [constants.ts:4](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/constants.ts#L4)*

___

### `Const` StyledDiv

• **StyledDiv**: *string & StyledComponentBase‹"div", any, __type, never›* =  styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  position: relative;
`

*Defined in [__test__/styled.ts:3](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/styled.ts#L3)*

___

### `Const` StyledItem

• **StyledItem**: *string & StyledComponentBase‹"li", any, __type, never›* =  styled.li`
  margin-left: 12px;
  ${() => itemStyles};

  &:last-child {
    margin-left: 0;
  }
`

*Defined in [__test__/styled.ts:20](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/styled.ts#L20)*

___

### `Const` StyledList

• **StyledList**: *string & StyledComponentBase‹"ul", any, __type, never›* =  styled.ul`
  margin: 0;
  padding: 0;
`

*Defined in [__test__/styled.ts:10](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/styled.ts#L10)*

___

### `Const` UNWRAP_DATA_ATTR

• **UNWRAP_DATA_ATTR**: *"data-styled-unwrap"* = "data-styled-unwrap"

*Defined in [constants.ts:6](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/constants.ts#L6)*

___

### `Const` WithThemeClassComponent

• **WithThemeClassComponent**: *ForwardRefExoticComponent‹object & object›* =  withTheme<ComponentType<any>>(ClassComponent)

*Defined in [__test__/components.tsx:79](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L79)*

___

### `Let` contexts

• **contexts**: *Map‹[Consumer](interfaces/privatecontext.md#consumer)‹any›, any›*

*Defined in [helpers/unwrap-element/index.tsx:32](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/unwrap-element/index.tsx#L32)*

___

### `Const` itemStyles

• **itemStyles**: *FlattenInterpolation‹ThemeProps‹any››* =  css`
  ${props => (props.theme ? "position: relative" : "position: absolute")};
  padding: ${props => props.theme && "12px"};
`

*Defined in [__test__/styled.ts:15](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/styled.ts#L15)*

___

### `Const` portal

• **portal**: *ReactPortal* =  createPortal(<ClassComponent />, document.createElement("div"))

*Defined in [__test__/components.tsx:51](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L51)*

## Functions

### `Const` ContextComponent

▸ **ContextComponent**(): *Element*

*Defined in [__test__/components.tsx:17](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L17)*

**Returns:** *Element*

___

### `Const` ContextConsumerComponent

▸ **ContextConsumerComponent**(): *Element*

*Defined in [__test__/components.tsx:25](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L25)*

**Returns:** *Element*

___

### `Const` ContextProviderComponent

▸ **ContextProviderComponent**(): *Element*

*Defined in [__test__/components.tsx:31](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L31)*

**Returns:** *Element*

___

### `Const` FunctionComponent

▸ **FunctionComponent**(): *Element*

*Defined in [__test__/components.tsx:45](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L45)*

**Returns:** *Element*

___

### `Const` PortalComponent

▸ **PortalComponent**(): *ReactPortal*

*Defined in [__test__/components.tsx:53](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L53)*

**Returns:** *ReactPortal*

___

### `Const` SCComponent

▸ **SCComponent**(): *Element*

*Defined in [__test__/components.tsx:56](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L56)*

**Returns:** *Element*

___

### `Const` SCContextComponent

▸ **SCContextComponent**(): *Element*

*Defined in [__test__/components.tsx:71](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L71)*

**Returns:** *Element*

___

### `Const` SerializeComponent

▸ **SerializeComponent**(`props`: ObjectMap): *Element*

*Defined in [__test__/components.tsx:82](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/__test__/components.tsx#L82)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`props` | ObjectMap |  {} |

**Returns:** *Element*

___

###  collateCSS

▸ **collateCSS**(`serializedTree`: [SCSerializedTree](interfaces/scserializedtree.md), `contexts?`: [ExtractedContexts](README.md#extractedcontexts)): *object*

*Defined in [helpers/collate-css/index.ts:35](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/collate-css/index.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`serializedTree` | [SCSerializedTree](interfaces/scserializedtree.md) |
`contexts?` | [ExtractedContexts](README.md#extractedcontexts) |

**Returns:** *object*

* **formatted**: *string* =  `\n${format(unformatted, { parser: "css" }).trim()}\n`

* **unformatted**: *string*

___

###  collateRule

▸ **collateRule**(`css`: string, `rule`: string | number | Func, `props`: ObjectMap): *string*

*Defined in [helpers/collate-css/index.ts:6](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/collate-css/index.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`css` | string |
`rule` | string &#124; number &#124; Func |
`props` | ObjectMap |

**Returns:** *string*

___

###  collateRules

▸ **collateRules**(`rules`: Array, `props`: ObjectMap): *string*

*Defined in [helpers/collate-css/index.ts:27](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/collate-css/index.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`rules` | Array |
`props` | ObjectMap |

**Returns:** *string*

___

###  createCSSHash

▸ **createCSSHash**(`displayName`: string, `css`: string): *string*

*Defined in [helpers/create-css-hash/index.ts:3](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/create-css-hash/index.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`displayName` | string |
`css` | string |

**Returns:** *string*

___

###  createSnapshotElement

▸ **createSnapshotElement**(`namePrefix`: string, `element`: ReactElement): *symbol | FunctionComponentElement‹ObjectMap›*

*Defined in [helpers/create-snapshot-element/index.ts:9](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/create-snapshot-element/index.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`namePrefix` | string |
`element` | ReactElement |

**Returns:** *symbol | FunctionComponentElement‹ObjectMap›*

___

###  filterOutIgnoredElements

▸ **filterOutIgnoredElements**(`nodes`: ReactNode[]): *undefined | null | string | number | false | true | __type | ReactElement‹any, string | function | object› | ReactNodeArray | ReactPortal[]*

*Defined in [helpers/filter-out-ignored-elements/index.ts:5](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/filter-out-ignored-elements/index.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`nodes` | ReactNode[] |

**Returns:** *undefined | null | string | number | false | true | __type | ReactElement‹any, string | function | object› | ReactNodeArray | ReactPortal[]*

___

###  generateStyledSnapshot

▸ **generateStyledSnapshot**(`element`: ReactNode, `options`: [StyledSnapshotConfig](interfaces/styledsnapshotconfig.md)): *object*

*Defined in [generate-styled-snapshot/index.ts:15](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/generate-styled-snapshot/index.ts#L15)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | ReactNode | - |
`options` | [StyledSnapshotConfig](interfaces/styledsnapshotconfig.md) |  {} |

**Returns:** *object*

* **component**: *[SerializedTree](interfaces/serializedtree.md) | Json* =  serializedTree

* **styles**: *Map‹string, [string, string]›* =  uniqueStyledComponents

___

###  getChildComponentTypeElement

▸ **getChildComponentTypeElement**(`element`: ComponentType, `props`: PropsWithChildren‹__type›): *undefined | null | string | number | false | true | __type | ReactElement‹any, string | function | object› | ReactNodeArray | ReactPortal | ReactElement‹object, ComponentClass‹__type, any›› | ReactElement‹object, FunctionComponent‹__type›› | ReactElement‹ConsumerProps‹any›, ExoticComponent‹ConsumerProps‹any››› | ReactElement‹ProviderProps‹any›, ProviderExoticComponent‹ProviderProps‹any›› & object› | ReactElement‹object, string› | ReactElement‹object, ForwardRefExoticComponent‹Element & RefAttributes‹object›› & object› | ReactElement‹object, ExoticComponent‹object›› | NamedExoticComponent‹object | RefAttributes‹Component‹__type, any, any››› & object | ReactElement‹object, NamedExoticComponent‹object | RefAttributes‹Component‹__type, any, any››› & object›*

*Defined in [helpers/unwrap-element/index.tsx:79](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/unwrap-element/index.tsx#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ComponentType |
`props` | PropsWithChildren‹__type› |

**Returns:** *undefined | null | string | number | false | true | __type | ReactElement‹any, string | function | object› | ReactNodeArray | ReactPortal | ReactElement‹object, ComponentClass‹__type, any›› | ReactElement‹object, FunctionComponent‹__type›› | ReactElement‹ConsumerProps‹any›, ExoticComponent‹ConsumerProps‹any››› | ReactElement‹ProviderProps‹any›, ProviderExoticComponent‹ProviderProps‹any›› & object› | ReactElement‹object, string› | ReactElement‹object, ForwardRefExoticComponent‹Element & RefAttributes‹object›› & object› | ReactElement‹object, ExoticComponent‹object›› | NamedExoticComponent‹object | RefAttributes‹Component‹__type, any, any››› & object | ReactElement‹object, NamedExoticComponent‹object | RefAttributes‹Component‹__type, any, any››› & object›*

___

###  getChildren

▸ **getChildren**(`element`: [ValidElement](README.md#validelement)): *[ValidElement](README.md#validelement) | ReactNode*

*Defined in [helpers/unwrap-element/index.tsx:34](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/unwrap-element/index.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [ValidElement](README.md#validelement) |

**Returns:** *[ValidElement](README.md#validelement) | ReactNode*

___

###  getComponentName

▸ **getComponentName**(`component`: ComponentType): *string*

*Defined in [helpers/get-component-name/index.ts:3](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/get-component-name/index.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | ComponentType |

**Returns:** *string*

___

###  getElementName

▸ **getElementName**(`element`: [ComponentTypeElement](README.md#componenttypeelement) | [ForwardRefElement](README.md#forwardrefelement)): *string*

*Defined in [helpers/get-element-name/index.ts:3](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/get-element-name/index.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [ComponentTypeElement](README.md#componenttypeelement) &#124; [ForwardRefElement](README.md#forwardrefelement) |

**Returns:** *string*

___

###  getStyledComponents

▸ **getStyledComponents**(`componentTree`: [ComponentTree](README.md#componenttree)): *ShallowWrapper‹any, any, Component‹__type, __type, any››*

*Defined in [helpers/get-styled-components/index.ts:4](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/get-styled-components/index.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`componentTree` | [ComponentTree](README.md#componenttree) |

**Returns:** *ShallowWrapper‹any, any, Component‹__type, __type, any››*

___

###  getStyledDisplayName

▸ **getStyledDisplayName**(`serializedTree`: Json): *string*

*Defined in [helpers/get-styled-display-name/index.ts:4](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/get-styled-display-name/index.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`serializedTree` | Json |

**Returns:** *string*

___

###  hasUnwrapDataAttribute

▸ **hasUnwrapDataAttribute**(`node`: ReactNode): *boolean*

*Defined in [helpers/has-unwrap-data-attribute/index.ts:5](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/has-unwrap-data-attribute/index.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactNode |

**Returns:** *boolean*

___

###  isClassComponent

▸ **isClassComponent**(`node`: ReactNode): *boolean*

*Defined in [helpers/is-class-component/index.ts:4](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/is-class-component/index.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactNode |

**Returns:** *boolean*

___

###  isComponentType

▸ **isComponentType**(`node`: ReactNode): *boolean*

*Defined in [helpers/is-component-type/index.ts:7](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/is-component-type/index.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactNode |

**Returns:** *boolean*

___

###  isFunctionComponent

▸ **isFunctionComponent**(`node`: ReactNode): *boolean*

*Defined in [helpers/is-function-component/index.ts:4](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/is-function-component/index.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactNode |

**Returns:** *boolean*

___

###  isMemoType

▸ **isMemoType**(`element`: ReactNode): *boolean*

*Defined in [helpers/is-memo-type/index.ts:5](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/is-memo-type/index.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactNode |

**Returns:** *boolean*

___

###  isStyledComponent

▸ **isStyledComponent**(`component`: string | ComponentType): *boolean*

*Defined in [helpers/is-styled-component/index.ts:4](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/is-styled-component/index.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | string &#124; ComponentType |

**Returns:** *boolean*

___

###  loadConfig

▸ **loadConfig**(`options`: [StyledSnapshotConfig](interfaces/styledsnapshotconfig.md)): *[StyledSnapshotConfig](interfaces/styledsnapshotconfig.md)*

*Defined in [helpers/load-config/index.ts:5](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/load-config/index.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [StyledSnapshotConfig](interfaces/styledsnapshotconfig.md) |

**Returns:** *[StyledSnapshotConfig](interfaces/styledsnapshotconfig.md)*

___

###  toCollateCSS

▸ **toCollateCSS**(`serializedTree`: Json): *boolean*

*Defined in [helpers/to-collate-css/index.ts:4](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/to-collate-css/index.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`serializedTree` | Json |

**Returns:** *boolean*

___

###  toMandatoryUnwrap

▸ **toMandatoryUnwrap**(`element`: ReactNode): *boolean*

*Defined in [helpers/to-mandatory-unwrap/index.ts:6](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/to-mandatory-unwrap/index.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactNode |

**Returns:** *boolean*

___

###  toMatchStyledSnapshot

▸ **toMatchStyledSnapshot**(`element`: ReactNode, `options`: [StyledSnapshotConfig](interfaces/styledsnapshotconfig.md)): *void*

*Defined in [to-match-styled-snapshot/index.ts:5](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/to-match-styled-snapshot/index.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | ReactNode | - |
`options` | [StyledSnapshotConfig](interfaces/styledsnapshotconfig.md) |  {} |

**Returns:** *void*

___

###  unwrap

▸ **unwrap**(`node`: ReactNode, `elementsToUnwrap`: string[], `unwrapCustomizer?`: [UnwrapCustomizer](README.md#unwrapcustomizer)): *[ComponentTypeElement](README.md#componenttypeelement)*

*Defined in [helpers/unwrap-element/index.tsx:93](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/unwrap-element/index.tsx#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactNode |
`elementsToUnwrap` | string[] |
`unwrapCustomizer?` | [UnwrapCustomizer](README.md#unwrapcustomizer) |

**Returns:** *[ComponentTypeElement](README.md#componenttypeelement)*

___

###  unwrapElement

▸ **unwrapElement**(`node`: ReactNode, `elementsToUnwrap`: string[], `unwrapCustomizer?`: [UnwrapCustomizer](README.md#unwrapcustomizer)): *object*

*Defined in [helpers/unwrap-element/index.tsx:126](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/unwrap-element/index.tsx#L126)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | ReactNode | - |
`elementsToUnwrap` | string[] |  [] |
`unwrapCustomizer?` | [UnwrapCustomizer](README.md#unwrapcustomizer) | - |

**Returns:** *object*

* **contexts**: *Map‹ExoticComponent‹ConsumerProps‹any››, any›*

* **element**: *ReactElement‹object, ComponentClass‹__type, any›› | ReactElement‹object, FunctionComponent‹__type››* =  unwrap(node, elementsToUnwrap, unwrapCustomizer)

___

###  visit

▸ **visit**(`serializedComponent`: [SerializedTree](interfaces/serializedtree.md), `visitor?`: [ReactTreeVisitor](README.md#reacttreevisitor)): *[SerializedTree](interfaces/serializedtree.md)*

*Defined in [helpers/visit/index.ts:11](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/visit/index.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`serializedComponent` | [SerializedTree](interfaces/serializedtree.md) |
`visitor?` | [ReactTreeVisitor](README.md#reacttreevisitor) |

**Returns:** *[SerializedTree](interfaces/serializedtree.md)*

___

###  visitChildren

▸ **visitChildren**(`children`: ReactElement | ReactElement[], `visitor?`: [ReactTreeVisitor](README.md#reacttreevisitor)): *void*

*Defined in [helpers/visit/index.ts:16](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/visit/index.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`children` | ReactElement &#124; ReactElement[] |
`visitor?` | [ReactTreeVisitor](README.md#reacttreevisitor) |

**Returns:** *void*

___

###  visitElement

▸ **visitElement**(`element`: ReactElement, `visitor?`: [ReactTreeVisitor](README.md#reacttreevisitor)): *ReactElement‹any, string | function | object›*

*Defined in [helpers/visit/index.ts:79](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/visit/index.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactElement |
`visitor?` | [ReactTreeVisitor](README.md#reacttreevisitor) |

**Returns:** *ReactElement‹any, string | function | object›*

___

###  visitFunctionProp

▸ **visitFunctionProp**(`val`: Func | FunctionComponent, `visitor?`: [ReactTreeVisitor](README.md#reacttreevisitor)): *symbol | function | FunctionComponentElement‹ObjectMap›*

*Defined in [helpers/visit/index.ts:22](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/visit/index.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | Func &#124; FunctionComponent |
`visitor?` | [ReactTreeVisitor](README.md#reacttreevisitor) |

**Returns:** *symbol | function | FunctionComponentElement‹ObjectMap›*

___

###  visitNode

▸ **visitNode**(`treeNode`: [TreeNode](README.md#treenode), `visitor?`: [ReactTreeVisitor](README.md#reacttreevisitor)): *void*

*Defined in [helpers/visit/index.ts:38](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/visit/index.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`treeNode` | [TreeNode](README.md#treenode) |
`visitor?` | [ReactTreeVisitor](README.md#reacttreevisitor) |

**Returns:** *void*

___

###  visitProps

▸ **visitProps**(`props`: ObjectMap, `visitor?`: [ReactTreeVisitor](README.md#reacttreevisitor)): *void*

*Defined in [helpers/visit/index.ts:54](https://github.com/dylanaubrey/styled-snapshot/blob/5796141/src/helpers/visit/index.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | ObjectMap |
`visitor?` | [ReactTreeVisitor](README.md#reacttreevisitor) |

**Returns:** *void*
