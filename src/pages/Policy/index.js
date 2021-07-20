import React, { PureComponent } from 'react';
import styles from './styles.scss';
import { texts } from '../../config';

class Policy extends PureComponent {
    render() {

        return (
            <div className={styles.policy} >
                {
                    texts.privacyPolicy.map((policy, index) => (
                        <div key={index} className={styles.policyWrapper} >
                            <div className={styles.policyHead} >{policy.head}</div>
                            <div className={styles.policyPara} >{policy.para}</div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Policy;
