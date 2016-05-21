import * as React from 'react';

interface IProps {
    url: string;
}

export class MenuImage extends React.Component<IProps, any> {
    render() {
        const style = {
            backgroundImage: `url('${this.props.url}')`
        };
        
        return <figure {...this.props} className="menu-image" style={style}></figure>
    }
}