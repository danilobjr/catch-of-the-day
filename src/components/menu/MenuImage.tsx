import * as React from 'react';
import { SFC } from 'react';

const styles = (props: MenuImageProps) => ({
  backgroundImage: `url('${props.url}')`
});

type MenuImageProps = {
  url: string;
};

export const MenuImage: SFC<MenuImageProps> = (props) => (
  <figure {...props} className="menu-image" style={styles(props)} />
);

