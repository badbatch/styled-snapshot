import { Func, ObjectMap } from "@repodog/types";
import { castArray, isFunction, isPlainObject } from "lodash";
import { FunctionComponent, ReactElement, cloneElement } from "react";
import { ForwardRef, isElement, isPortal } from "react-is";
import { isArray } from "util";
import { PORTAL, RENDER_PROP } from "../../constants";
import { SCForwardRefElement, SerializedTree, StyledSnapshotConfig, TreeNode } from "../../types";
import createSnapshotElement from "../create-snapshot-element";
import getComponentName from "../get-component-name";
import isFunctionComponent from "../is-function-component";
import isStyledComponent from "../is-styled-component";

export default function visit(serializedComponent: SerializedTree, config: StyledSnapshotConfig) {
  visitNode(serializedComponent, config);
  return serializedComponent;
}

function visitChildren(children: ReactElement | ReactElement[], config: StyledSnapshotConfig) {
  return castArray(children).map(child => visitElement(child, config));
}

function visitFunctionProp(val: Func | FunctionComponent, config: StyledSnapshotConfig) {
  if (isFunctionComponent(val)) {
    const component = val as FunctionComponent;
    return Symbol(getComponentName(component));
  } else {
    const func = val as Func;

    try {
      const output = func();
      return isElement(output) ? createSnapshotElement(RENDER_PROP, visitElement(output, config)) : val;
    } catch (error) {
      return val;
    }
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
      treeNode.children[index] = visitElement(child.node, config);
    });
  }
}

function visitProps(props: ObjectMap, config: StyledSnapshotConfig) {
  Object.keys(props).forEach(key => {
    const val = props[key];

    switch (true) {
      case isFunction(val):
        props[key] = visitFunctionProp(val, config);
        break;
      case isElement(val):
        props[key] = visitElement(val, config);
        break;
      case isPortal(val):
        props[key] = createSnapshotElement(PORTAL, val.children);
        break;
      case isPlainObject(val) && val.$$typeof === ForwardRef:
        props[key] = Symbol(getComponentName(val));
        break;
      case isArray(val):
        props[key] = visitChildren(props.children, config);
        break;
      // no default
    }
  });
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
