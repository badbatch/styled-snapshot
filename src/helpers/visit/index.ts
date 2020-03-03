import { Func, PlainObject } from "@repodog/types";
import { Json } from "enzyme-to-json";
import { castArray, isArray, isFunction, isObject, isUndefined } from "lodash";
import { Children, FunctionComponent, ReactElement, cloneElement } from "react";
import { isElement, isForwardRef, isPortal } from "react-is";
import { CHILDREN, CSS, PORTAL, RENDER_PROP, STYLES } from "../../constants";
import { SCForwardRefElement, SerializedTree, StyledSnapshotConfig, TreeNode } from "../../types";
import createSnapshotElement from "../create-snapshot-element";
import getComponentName from "../get-component-name";
import isClassComponent from "../is-class-component";
import isForwardRefComponent from "../is-forward-ref-component";
import isFunctionComponent from "../is-function-component";
import isFunctionRenderProp from "../is-function-render-prop";
import isStyledComponent from "../is-styled-component";

export default function visit(serializedTree: Json, config: StyledSnapshotConfig) {
  castArray(serializedTree).forEach(serializedBranch => visitNode(serializedBranch as SerializedTree, config));
  return serializedTree;
}

function visitChildren(children: ReactElement | ReactElement[], config: StyledSnapshotConfig) {
  if (isFunction(children)) return visitFunction(children, config);

  return Children.map(children, child => visitValue(child, config));
}

function visitElement(element: ReactElement, config: StyledSnapshotConfig) {
  const { reactTreeVisitor } = config;
  const nodeClone = { props: { ...element.props } };
  if (isFunction(reactTreeVisitor)) reactTreeVisitor(nodeClone);
  let _element = element;

  if (isStyledComponent(element)) {
    const styledElement = element as SCForwardRefElement;
    _element = { ...element, type: styledElement.type.displayName };
  }

  visitProps(nodeClone.props, config);
  return cloneElement(_element, nodeClone.props);
}

function visitFunction(val: Func | FunctionComponent, config: StyledSnapshotConfig) {
  if (isFunctionRenderProp(val)) {
    try {
      const func = val as Func;
      const output = func();
      return isElement(output) ? createSnapshotElement(visitElement(output, config), RENDER_PROP) : val;
    } catch (error) {
      return val;
    }
  } else {
    return val;
  }
}

function visitNode(treeNode: TreeNode, config: StyledSnapshotConfig) {
  const { reactTreeVisitor } = config;
  if (isFunction(reactTreeVisitor)) reactTreeVisitor(treeNode);

  if (treeNode.props) {
    visitProps(treeNode.props, config);
  }

  if (treeNode.children) {
    const children = treeNode.children as TreeNode[];

    children.forEach((child, index) => {
      treeNode.children[index] = isObject(child) ? visitValue(visitElement(child.node, config), config) : child;
    });
  }
}

function visitProps(props: PlainObject, config: StyledSnapshotConfig) {
  Object.keys(props).forEach(key => {
    const val = props[key];

    if (key === CHILDREN && !isUndefined(val)) {
      props[key] = visitChildren(props.children, config);
    } else if (key === CSS || key === STYLES) {
      props[key] = isArray(val) ? undefined : val;
    } else {
      props[key] = visitValue(val, config);
    }
  });
}

// tslint:disable-next-line no-any
function visitValue(val: any, config: StyledSnapshotConfig) {
  switch (true) {
    case isForwardRef(val) && !isStyledComponent(val):
      return createSnapshotElement(val);
    case (!isElement(val) && isClassComponent(val)) || isForwardRefComponent(val) || isFunctionComponent(val):
      return Symbol(getComponentName(val));
    case isFunction(val):
      return visitFunction(val, config);
    case isElement(val):
      return visitElement(val, config);
    case isPortal(val):
      return createSnapshotElement(val.children, PORTAL);
    default:
      return val;
  }
}
