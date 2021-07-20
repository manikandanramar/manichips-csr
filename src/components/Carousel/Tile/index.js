import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Image from '../../Image';
import Link from '../../Link';
import styles from './styles.scss';
import { icons } from '../../../config';

class Tile extends PureComponent {
    render() {
        const { info, full } = this.props;
        const imageClass = classnames(styles.tileImage, { [styles.minimalImage]: !full });
        const tileClass = classnames(styles.carouselTile, { [styles.minimalTile]: !full });

        return (
            <Link className={tileClass} to={info.link} >
                <Image className={imageClass} source={info.image} />
                {
                    full
                    ? (<div className={styles.tileContent} >
                            <div className={styles.tagsArea} >
                                <span className={styles.starRating} >
                                    {info.rating}
                                    <Image className={styles.ratingStar} source={icons.star} />
                                </span>
                                {
                                    info.tags.length && info.tags.map((tag, key) => {
                                        return <span key={key} className={styles.tagWrapper} >{tag}</span>
                                    })
                                }
                            </div>
                            <div className={styles.itemTitle} >{info.name}</div>
                            <span className={styles.price} >{`₹${info.price}`}</span>
                        </div>)
                    : <div className={styles.overlayTitle} >{info.name}</div>
                }
                
            </Link>
        );
    }
}

export default Tile;