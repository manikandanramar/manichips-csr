import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Link from '../../components/Link';
import { texts } from '../../config';

class Error extends PureComponent {
    render() {
        return (
            <div className={styles.error}>
                <div className={styles.fourNotFour} >404</div>
                <div className={styles.fnfMessage} >{texts.fnfMessage}</div>
                <Link className={styles.fnfGo} to="/" >{texts.fnfGo}</Link>
            </div>
        );
    }
}

export default Error;