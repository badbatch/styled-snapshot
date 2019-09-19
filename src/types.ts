import { ObjectMap } from "@repodog/types";
import {
  ComponentClass,
  ComponentType,
  Consumer,
  ConsumerProps,
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

export type ComponentTypeElement =
  | ReactElement<PropsWithChildren<{}>, ComponentClass>
  | ReactElement<PropsWithChildren<{}>, FunctionComponent>;

export type ContextConsumerElement = ReactElement<ConsumerProps<any>, Consumer<any>>; // tslint:disable-line no-any

// tslint:disable-next-line no-any
export type ContextProviderElement = ReactElement<ProviderProps<any>, Provider<any> & { _context: PrivateContext }>;

export type DomElement = ReactElement<PropsWithChildren<{}>, string>;

export type ForwardRefElement = ReactElement<
  PropsWithChildren<{}>,
  ForwardRefExoticComponent<PropsWithoutRef<Element> & RefAttributes<PropsWithChildren<{}>>> & {
    readonly $$typeof: symbol;
    render: RefForwardingComponent<Element, PropsWithChildren<{}>>;
  }
>;

export type MandatoryUnwrapElement =
  | ContextConsumerElement
  | ContextProviderElement
  | ForwardRefElement
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

export interface SerializedTree {
  $$typeof: symbol;
  children: SerializedTree[] | ReactElement[];
  node: ReactElement;
  props: ObjectMap;
  type: string;
}

export type TreeNode = SerializedTree;

export type UnwrapCustomizer = (element: ValidElement) => ValidElement | ReactNode;

export interface UnwrapElementResult {
  contexts: Map<React.ExoticComponent<React.ConsumerProps<any>>, any>; // tslint:disable-line no-any
  element: ComponentTypeElement;
}
