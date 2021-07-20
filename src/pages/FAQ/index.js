import React, { PureComponent } from 'react';
import styles from './styles.scss';
import { texts } from '../../config';

class FAQ extends PureComponent {
    render() {

        return (
            <div className={styles.faq} >
                <div className={styles.faqHeading} >{texts.faqHeading}</div>
                {
                    texts.faq.map((aq, index) => (
                        <div key={index} className={styles.faqWrapper} >
                            <div className={styles.faqQuestion} >{aq.q}</div>
                            <div className={styles.faqAnswer} >{aq.a}</div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default FAQ;
