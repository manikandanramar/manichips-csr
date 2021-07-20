import React, { PureComponent } from 'react';
import ReactHelmet from 'react-helmet';
import Image from '../../components/Image';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import BuyPopUp from '../../components/BuyPopUp';
import styles from './styles.scss';
import { listingImages, channelList, texts } from '../../config';
import classnames from 'classnames';
import ReactGA from 'react-ga';

class Product extends PureComponent {
    state = {
        slotNo: 0,
        buy: false
    };

    onBuyClick = () => {
        ReactGA.event({ category: "Buy Click", action: "Clicked on green buy button" });
        this.setState({ buy: true });
    }

    onBuyClose = () => {
        this.setState({ buy: false });
    }

    onSlotClick = (num) => {
        this.setState({ slotNo: num });
    }

    render() {

        return (
            <div className={styles.productContainer} >
                <ReactHelmet>
                    <title>Buy Kerala's Organic Banana Chips Online - Manichips</title>
                    <meta name="description" content="Buy premium quality Banana chips made with organically grown Nendran Bananas and Pure Coconut Oil, at best price from India's biggest online shopping site for Banana Chips."></meta>

                    <meta name="og_title" property="og:title" content="Buy Kerala's Organic Banana Chips Online - Manichips"/>
                    <meta property="og:description" content="Buy premium quality Banana chips made with organically grown Nendran Bananas and Pure Coconut Oil, at best price from India's biggest online shopping site for Banana Chips." />
                    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/product.webp?alt=media&token=020ca708-9ccc-4520-bedb-ce9c78bef669" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.manichips.com/product" />
                    <meta property="og:site_name" content="Manichips" />

                    <meta name="twitter:card" content="summary" /> 
                    <meta name="twitter:site" content="@manichips" /> 
                    <meta name="twitter:title" content="Buy Kerala's Organic Banana Chips Online - Manichips" /> 
                    <meta name="twitter:description" content="Buy premium quality Banana chips made with organically grown Nendran Bananas and Pure Coconut Oil, at best price from India's biggest online shopping site for Banana Chips." /> 
                    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/product.webp?alt=media&token=020ca708-9ccc-4520-bedb-ce9c78bef669" />
                </ReactHelmet>
                <div className={styles.product}>
                    <div className={styles.theMain} >
                        <table className={styles.productTable} >
                            <tbody>
                                <tr className={styles.productDataRow} >
                                    <td className={styles.productImageColumn} >
                                        <div className={styles.activeWrapper} >
                                            <Image source={listingImages[this.state.slotNo]} className={styles.productImage} />
                                        </div>
                                        <div className={styles.slotHolder} >
                                            {
                                                listingImages.map((image, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={classnames(styles.imageSlot, { [styles.active]: this.state.slotNo === index })}
                                                            onMouseOver={() => this.onSlotClick(index)}
                                                            onClick={() => this.onSlotClick(index)}
                                                        >
                                                            <Image source={image} className={styles.productImage} />
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td className={styles.productDataColumn}  >
                                        <div className={styles.productDatas} >
                                            <div className={styles.productTitle} >{texts.productHead}</div>
                                            <div className={styles.specifications} >
                                                {
                                                    texts.specifications.map((spec, index) => (<span key={index} className={styles.spec} >{spec}</span>))
                                                }
                                            </div>
                                            <div className={styles.ingreWrapper} >
                                                <span className={styles.ingredientsHead} >{texts.ingredientsText}</span>
                                                {
                                                    texts.ingredients.map((ingre, index) => (<span key={index} className={styles.ingredients} >{ingre}</span>))
                                                }
                                            </div>
                                            <ul className={styles.highlightList} >
                                                {
                                                    texts.productHighlights.map((highlight, index) => (<li key={index} className={styles.highlight} >{highlight}</li>))
                                                }
                                            </ul>
                                            <Button variation="greenGrad" className={styles.buyNowButton} onClick={this.onBuyClick} >{texts.buyButtonText}</Button>
                                            <div className={styles.channels} >
                                                {
                                                    channelList.map((channel, index) => (
                                                        <a key={index} className={styles.aChannel} href={channel.link} target="_blank" >{channel.name}</a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.platforms} >
                            <div className={styles.availableAt} >{texts.availableAt}</div>
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

                        {/* Buy Pop Up */}
                        {
                            this.state.buy
                            ? <BuyPopUp onClose={this.onBuyClose} />
                            : null
                        }
                    </div>
                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Product;
