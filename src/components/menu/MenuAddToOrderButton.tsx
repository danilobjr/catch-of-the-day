import * as React from 'react';
import * as classNames from 'classnames';
import { Button, ButtonProps } from './../common';
import { SFC } from 'react';

type MenuAddToOrderButtonProps = {
  showSoldOutLabel?: boolean;
} & ButtonProps;

export const MenuAddToOrderButton: SFC<MenuAddToOrderButtonProps> = ({
  children,
  className,
  showSoldOutLabel,
  ...otherProps }) => (
  <Button
    {...otherProps}
    className={classNames('add-to-order', className, {
      showSoldOutLabel: 'sold-out',
    })}
  >
    {/* TODO: move this logic to MenuItem */}
    {showSoldOutLabel ? 'Sold Out!' : children}
  </Button>
);
