import * as React from 'react';
import { HTMLAttributes, SFC } from 'react';

type SectionProps = HTMLAttributes<HTMLElement>;

export const Section: SFC<SectionProps> = ({ children, ...otherProps }) => (
  <section {...otherProps}>{children}</section>
);
