import React, { Component } from 'react';
import styles from './styles.scss';

class Loader extends Component {
    render() {
        return (
            <div className={styles.dualRing}></div>
        );
    }
}

export default Loader;