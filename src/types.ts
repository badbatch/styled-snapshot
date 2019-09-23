import { Func, ObjectMap } from "@repodog/types";
import { ShallowWrapper } from "enzyme";
import {
  ComponentClass,
  ComponentType,
  Consumer,
  ConsumerProps,
  ExoticComponent,
  ForwardRefExoticComponent,
  FunctionComponent,
  MemoExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  Provider,
  ProviderProps,
  ReactElement,
  ReactNode,
  ReactPortal,
  RefAttributes,
  RefForwardingComponent,
} from "react";
import { AnyStyledComponent } from "styled-components";

export type ComponentTypeElement =
  | ReactElement<PropsWithChildren<{}>, ComponentClass>
  | ReactElement<PropsWithChildren<{}>, FunctionComponent>;

export type ContextConsumerElement = ReactElement<ConsumerProps<any>, Consumer<any>>; // tslint:disable-line no-any

// tslint:disable-next-line no-any
export type ContextProviderElement = ReactElement<ProviderProps<any>, Provider<any> & { _context: PrivateContext }>;

export type DomElement = ReactElement<PropsWithChildren<{}>, string>;

export type ForwardRefComponent = ForwardRefExoticComponent<
  PropsWithoutRef<Element> & RefAttributes<PropsWithChildren<{}>>
> & {
  readonly $$typeof: symbol;
  render: RefForwardingComponent<Element, PropsWithChildren<{}>>;
};

export type ForwardRefElement = ReactElement<PropsWithChildren<{}>, ForwardRefComponent>;

export type FragmentElement = ReactElement<PropsWithChildren<{}>, ExoticComponent<{ children?: ReactNode }>>;

export type MandatoryUnwrapElement =
  | ContextConsumerElement
  | ContextProviderElement
  | ForwardRefElement
  | FragmentElement
  | MemoElement
  | MemoExoticComponent<ComponentType>
  | ReactPortal;

export type MemoElement = ReactElement<PropsWithChildren<{}>, MemoExoticComponent<ComponentType>>;

export interface PrivateContext {
  Consumer: Consumer<any>; // tslint:disable-line no-any
  Provider: Provider<any>; // tslint:disable-line no-any
}

export type ValidElement = ComponentTypeElement | MandatoryUnwrapElement | DomElement;

export type ReactTreeVisitor = (node: ObjectMap) => void;

export interface StyledSnapshotConfig {
  elementsToUnwrap?: string[];
  reactTreeVisitor?: ReactTreeVisitor;
  unwrapCustomizer?: UnwrapCustomizer;
}

export type UnwrapCustomizer = (element: ValidElement) => ValidElement | ReactNode;

export type ComponentTree = ShallowWrapper<
  {
    children?: ReactNode;
  },
  Readonly<{}>,
  React.Component<{}, {}, any> // tslint:disable-line no-any
>;

export interface SerializedTree {
  $$typeof: symbol;
  children: SerializedTree[] | ReactElement[];
  node: ReactElement;
  props: ObjectMap;
  type: string;
}

export type TreeNode = SerializedTree;

export type ExtractedContexts = Map<React.ExoticComponent<React.ConsumerProps<any>>, any>; // tslint:disable-line no-any

export interface UnwrapElementResult {
  contexts: ExtractedContexts;
  element: ComponentTypeElement;
}

export interface SCSerializedTree {
  $$typeof: symbol;
  children: null;
  node: AnyStyledComponent;
  props: SCSerializedTreeProps;
  type: string;
}

export interface SCSerializedTreeProps {
  forwardedComponent: SCForwardRefComponent;
}

export type SCForwardRefComponent = ForwardRefComponent & { componentStyle: SCComponentStyle; displayName: string };

export interface SCComponentStyle {
  rules: Array<string | number | Func>;
}
