import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Image from '../Image';
import{ icons, texts, channelList } from '../../config';

class BuyPopUp extends PureComponent {
    render() {
        const { onClose } = this.props;

        return (
            <div className={styles.buyPopUp} >
                <div className={styles.popUpWrapper} >
                    <div className={styles.titleBar} >
                        <div className={styles.popUpTitle} >{texts.popUpTitle}</div>
                        <Image className={styles.closeButton} source={icons.close} onClick={onClose} />
                    </div>
                    <div className={styles.channel} >
                        {
                            channelList.map((channel, index) => (
                                <a key={index} className={styles.channelLink} href={channel.link} target="_blank" >
                                    <Image className={styles.channelImage} source={channel.logo} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyPopUp;
