import * as React from 'react';
import { SFC } from 'react';

type IconButtonProps = {
  name: string;
  onClick?: (event: Event) => void;
};

export const IconButton: SFC<IconButtonProps> = (props) => (
  <div className="icon-button">
    <span className={`fa fa-${props.name}`} onClick={onClick(props)} />
  </div>
);

IconButton.displayName = 'IconButton';

const onClick = (props: IconButtonProps) => (event: any): void => {
  props.onClick(event);
};
