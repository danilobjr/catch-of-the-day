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
      'sold-out': showSoldOutLabel,
    })}
  >
    {children}
  </Button>
);

MenuAddToOrderButton.displayName = 'MenuAddToOrderButton';

MenuAddToOrderButton.defaultProps = {
  showSoldOutLabel: false,
};
