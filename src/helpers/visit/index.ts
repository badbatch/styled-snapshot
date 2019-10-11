import { Func, ObjectMap } from "@repodog/types";
import { Json } from "enzyme-to-json";
import { castArray, isFunction, isObject, isUndefined } from "lodash";
import { FunctionComponent, ReactElement, cloneElement } from "react";
import { isElement, isForwardRef, isPortal } from "react-is";
import { PORTAL, RENDER_PROP } from "../../constants";
import { SCForwardRefElement, SerializedTree, StyledSnapshotConfig, TreeNode } from "../../types";
import createSnapshotElement from "../create-snapshot-element";
import getComponentName from "../get-component-name";
import isClassComponent from "../is-class-component";
import isFunctionComponent from "../is-function-component";
import isStyledComponent from "../is-styled-component";

export default function visit(serializedTree: Json, config: StyledSnapshotConfig) {
  castArray(serializedTree).forEach(serializedBranch => visitNode(serializedBranch as SerializedTree, config));
  return serializedTree;
}

function visitChildren(children: ReactElement | ReactElement[], config: StyledSnapshotConfig) {
  return castArray(children).map(child => visitValue(child, config));
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
  if (isFunctionComponent(val)) {
    const component = val as FunctionComponent;
    return Symbol(getComponentName(component));
  } else {
    const func = val as Func;

    try {
      const output = func();
      return isElement(output) ? createSnapshotElement(visitElement(output, config), RENDER_PROP) : val;
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
      treeNode.children[index] = isObject(child) ? visitValue(visitElement(child.node, config), config) : child;
    });
  }
}

function visitProps(props: ObjectMap, config: StyledSnapshotConfig) {
  Object.keys(props).forEach(key => {
    const val = props[key];

    if (key === "children" && !isUndefined(val)) {
      props[key] = visitChildren(props.children, config);
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
    case (!isForwardRef(val) && isStyledComponent(val)) || (!isElement(val) && isClassComponent(val)):
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
