import * as React from 'react';
import { Header } from './Header';

export const SectionHeader = (props: any) => (
    <header {...props} className="section-header">
        <Header>{props.children}</Header>
    </header>
)