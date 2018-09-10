import * as React from 'react';
import { Button, ButtonProps } from './../common';
import { SFC } from 'react';

type MenuAddToOrderButtonProps = {
  showSoldOutLabel?: boolean;
} & ButtonProps;

export const MenuAddToOrderButton: SFC<MenuAddToOrderButtonProps> = (props) => (
  <Button
    {...props}
    className={renderCssClasses(props)}
  >
    {renderText(props)}
  </Button>
);

const renderCssClasses = (props: MenuAddToOrderButtonProps) => {
  const isSoldClass = props.showSoldOutLabel ? 'sold-out' : '';
  const cssCLasses = ['add-to-order', isSoldClass, props.className];
  return cssCLasses.join(' ');
};

const renderText = (props: MenuAddToOrderButtonProps) => {
  // TODO: move this logic to MenuItem
  return props.showSoldOutLabel ? 'Sold Out!' : props.children;
};

