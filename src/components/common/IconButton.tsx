import * as React from 'react';
import { SFC } from 'react';
import { FlexBox } from './FlexBox';

type IconButtonProps = {
  name: string;
  onClick?: (event: Event) => void;
};

export const IconButton: SFC<IconButtonProps> = (props) => (
  <FlexBox className="icon-button">
    <span className={`fa fa-${props.name}`} onClick={onClick(props)}></span>
  </FlexBox>
);

const onClick = (props: IconButtonProps) => (event: any): void => {
  props.onClick(event);
};
