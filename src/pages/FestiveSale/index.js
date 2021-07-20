import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Image from '../../components/Image';
import Link from '../../components/Link';
import { assets, channelList } from '../../config';
import { Helmet } from 'react-helmet';

class FestiveSale extends PureComponent {
    render() {
        return (
            <div className={styles.festiveWrapper} >
                <Helmet>
                    <title>Deals & discounts on Banana Chips - Manichips Festive Sale</title>
                    <meta name="description" content="India's biggest online shopping Festival Sale for Banana Chips is live now. Find the largest selection of premium quality banana chips at best price in India."></meta>

                    <meta name="og_title" property="og:title" content="Deals & discounts on Banana Chips - Manichips Festive Sale"/>
                    <meta property="og:description" content="India's biggest online shopping Festival Sale for Banana Chips is live now. Find the largest selection of premium quality banana chips at best price in India." />
                    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/Festive%2Ffestive-preview.jpg?alt=media&token=c7c1f5be-822b-4f16-9289-643e07f565ea" />

                    <meta name="twitter:title" content="Deals & discounts on Banana Chips - Manichips Festive Sale" /> 
                    <meta name="twitter:description" content="India's biggest online shopping Festival Sale for Banana Chips is live now. Find the largest selection of premium quality banana chips at best price in India." />
                    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/Festive%2Ffestive-preview.jpg?alt=media&token=c7c1f5be-822b-4f16-9289-643e07f565ea" />
                </Helmet>
                <div className={styles.serialBulbs} style={{backgroundImage: `url(${assets.serial})`}} ></div>
                <Image className={styles.jamanthiLeft} source={assets.jamanthiPoo} />
                <Image className={styles.jamanthiLeft2} source={assets.jamanthiPoo} />
                <Image className={styles.jamanthiLeft3} source={assets.jamanthiPoo} />
                <Image className={styles.jamanthiRight} source={assets.jamanthiPoo} />
                <Image className={styles.jamanthiRight2} source={assets.jamanthiPoo} />
                <Image className={styles.jamanthiRight3} source={assets.jamanthiPoo} />
                <div className={styles.lamps} style={{backgroundImage: `url(${assets.lamp})`}} ></div>

                <div className={styles.mainContainer} >
                    <table className={styles.itemWrapper} >
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/" >
                                        <Image className={styles.manichips} source={assets.maniWhite} />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.backLit} style={{backgroundImage: `url(${assets.backLit})`}} ></div>
                                    <Image className={styles.chipsProduct} source={assets.chipsProduct} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.chooseMess} >Choose your favorite purchase channel</div>
                    <div className={styles.ecomLinks} >
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

export default FestiveSale;