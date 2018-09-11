import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Button, ButtonProps } from 'components';

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
