import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Image from '../../components/Image';
import { assets, channelList } from '../../config';

class Feedback extends PureComponent {
    render() {
        return (
            <div className={styles.feedbackWrapper} >
                <Image className={styles.feedbackCover} source={assets.feedbackCover} />
                <iframe className={styles.feedbackFrame} src="https://docs.google.com/forms/d/e/1FAIpQLSfaW-h5QVYin9VPhXl_BYqegjlJS24sTYX7pIWsc3RnNEP2oA/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                <div className={styles.feedTitle} >If you are in love with our Organic Banana Chips.</div>
                <div className={styles.feedCOM} >
                    {
                        channelList.map((channel, index) => (
                            <a key={index} className={styles.channelLink} href={channel.feedback} target="_blank" >
                                <div>Write a review on</div>
                                <Image className={styles.channelImage} source={channel.logo} />
                            </a>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Feedback;