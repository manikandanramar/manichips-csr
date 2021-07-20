import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Link from '../../Link';
import Image from '../../Image';

class Card extends PureComponent {
    render() {
        const { data } = this.props;

        return (
            <div className={styles.card} >
                <Link className={styles.theContent} block to="" >
                    <Image className={styles.cardImage} source={data.image} />
                    <div className={styles.detailsCompartment} >
                        <div className={styles.dataName} >{data.name}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Card;
