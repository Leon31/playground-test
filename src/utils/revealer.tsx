import React, { useRef, FunctionComponent, ReactElement } from 'react';
import { useScrollState } from 'scrollmonitor-hooks';

type RevealerProps = {
  children: ReactElement
  revealIn: string
  revealOut: string
} 

const Revealer: FunctionComponent<RevealerProps> = ({children, revealIn, revealOut}) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollState = useScrollState(ref);

  let animate = revealIn;
  if (scrollState.isInViewport){
    animate = revealIn;
  } else if (scrollState.isBelowViewport) {
    animate = revealOut;
  }
  if (children.props.className) animate = animate += ' ' + children.props.className;

  return React.cloneElement(children, {
    className: animate,
    ref: ref
  });
}

export default Revealer;