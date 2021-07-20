import React, { PureComponent } from 'react';
import styles from './styles.scss';
import { texts } from '../../config';

class Terms extends PureComponent {
    render() {
        return (
            <div className={styles.terms} >
                {
                    texts.termsAndConditions.map((term, index) => (
                        <div key={index} className={styles.termWrapper} >
                            <div className={styles.termHead} >{term.head}</div>
                            <div className={styles.termPara} >{term.para}</div>
                            <ul>
                                {
                                    term.list
                                    ? (
                                        term.list.map((values, vIndex) => (
                                            <li key={vIndex} className={styles.termList} >{values}</li>
                                        ))
                                    )
                                    : null
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Terms;
