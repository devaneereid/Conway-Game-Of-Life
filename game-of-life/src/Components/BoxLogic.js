import React, { Component } from 'react';

const BOX_SIZE = 20;

class BoxLogic extends Component {

    render() {
        const { x, y } = this.props;
        return (
            <div className="Cell" 
                style={{ 
                    left: `${BOX_SIZE * x + 1}px`, 
                    top: `${BOX_SIZE * y + 1}px`,
                    width: `${BOX_SIZE - 1}px`,
                    height: `${BOX_SIZE - 1}px`}}
            />
        );
    }
}

export default BoxLogic;