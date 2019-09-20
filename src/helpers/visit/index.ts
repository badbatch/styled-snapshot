import { Func, ObjectMap } from "@repodog/types";
import { Json } from "enzyme-to-json";
import { castArray, isFunction, isPlainObject } from "lodash";
import { FunctionComponent, ReactElement, cloneElement } from "react";
import { ForwardRef, isElement, isPortal } from "react-is";
import { PORTAL, RENDER_PROP } from "../../constants";
import { ReactTreeVisitor, SerializedTree, TreeNode } from "../../types";
import createSnapshotElement from "../create-snapshot-element";
import getComponentName from "../get-component-name";
import isFunctionComponent from "../is-function-component";

export default function visit(serializedComponent: Json, visitor?: ReactTreeVisitor) {
  visitNode(serializedComponent as SerializedTree, visitor);
  return serializedComponent;
}

function visitChildren(children: ReactElement | ReactElement[], visitor?: ReactTreeVisitor) {
  castArray(children).forEach(child => {
    visitElement(child, visitor);
  });
}

function visitFunctionProp(val: Func | FunctionComponent, visitor?: ReactTreeVisitor) {
  if (isFunctionComponent(val)) {
    const component = val as FunctionComponent;
    return Symbol(getComponentName(component));
  } else {
    const func = val as Func;

    try {
      const output = func();
      return isElement(output) ? createSnapshotElement(RENDER_PROP, visitElement(output, visitor)) : val;
    } catch (error) {
      return val;
    }
  }
}

function visitNode(treeNode: TreeNode, visitor?: ReactTreeVisitor) {
  if (isFunction(visitor)) visitor(treeNode);

  if (treeNode.props) {
    visitProps(treeNode.props, visitor);
  }

  if (treeNode.children) {
    const children = treeNode.children as TreeNode[];

    children.forEach((child, index) => {
      treeNode.children[index] = visitElement(child.node, visitor);
    });
  }
}

function visitProps(props: ObjectMap, visitor?: ReactTreeVisitor) {
  Object.keys(props).forEach(key => {
    const val = props[key];

    switch (true) {
      case isFunction(val):
        props[key] = visitFunctionProp(val, visitor);
        break;
      case isElement(val):
        props[key] = visitElement(val, visitor);
        break;
      case isPortal(val):
        props[key] = createSnapshotElement(PORTAL, val.children);
        break;
      case isPlainObject(val) && val.$$typeof === ForwardRef:
        props[key] = Symbol(getComponentName(val));
      // no default
    }
  });

  if (props.children) {
    visitChildren(props.children, visitor);
  }
}

function visitElement(element: ReactElement, visitor?: ReactTreeVisitor) {
  const nodeClone = { props: { ...element.props } };
  if (isFunction(visitor)) visitor(nodeClone);
  visitProps(nodeClone.props, visitor);
  return cloneElement(element, nodeClone.props);
}
