import * as React from 'react';

export class MenuHeader extends React.Component<any, any> {
    render() {
        return (
            <header className="menu-header">
                <h1>Catch of the Day</h1>
                <h3><span>Fresh seafood market</span></h3>
            </header>
        );
    }
}