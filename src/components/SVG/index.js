import React, { PureComponent } from 'react';

class SVG extends PureComponent {
    render() {
        const { name, ...others } = this.props;

        switch(name) {
            case "hamburger":
                return (
                    <svg viewBox="0 0 100 100" {...others} >
                            <g fill="none" stroke="#000000" strokeWidth="7.999" strokeLinecap="round" >
                                <path d="M 55,26.000284 L 24.056276,25.999716" />
                                <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                                <path d="M 45,73.999716 L 75.943724,74.000284" />
                                <path d="M 75.943724,26.000284 L 45,25.999716" stroke="#ff0000" />
                                <path d="M 24.056276,73.999716 L 55,74.000284" stroke="#ff0000" />
                            </g>
                    </svg>
                );
            default:
                return null;
        }
    }
}

export default SVG;
