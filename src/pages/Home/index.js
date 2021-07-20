import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Image from '../../components/Image';
import { assets, texts, channelList } from '../../config';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import BuyPopUp from '../../components/BuyPopUp';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

class Home extends PureComponent {

    state = {
        buy: false
    }

    onBuyClick = () => {
        ReactGA.event({ category: "Buy Click", action: "Clicked on orange buy button" });
        this.setState({ buy: true });
    }

    onBuyClose = () => {
        this.setState({ buy: false });
    }

    render() {
        return (
            <div className={styles.home} >
                <div className={styles.homeShowcase} >

                    {/* Section I */}
                    <div className={styles.mainDetails} >
                        <div className={styles.chipsTitle} >{texts.chipsTitle}</div>
                        <div className={styles.chipsCap} >{texts.chipsCaption}</div>
                        <Image className={styles.mainImage} source={assets.chipsCup} />
                    </div>

                    {/* Festive Section */}
                    {/* <Link className={styles.festiveWrapper} to="/festivesale" >
                        <div className={styles.coverStyle} style={{backgroundImage: `url(${assets.mainCover})`}} ></div>
                    </Link> */}

                    {/* Section II */}
                    <div className={styles.subDetails} >
                        <table >
                            <tbody>
                                <tr className={styles.detailsTable} >
                                    <td className={styles.bananaWrapper} >
                                        <Image source={assets.bananaMan} className={styles.bananaMan} />
                                        <Image source={assets.shapes} className={styles.shapes} />
                                    </td>
                                    <td className={styles.chipsDetails} >
                                        <div className={styles.chipsDetailsHead} >{texts.chipsDetailsHead}</div>
                                        <div className={styles.chipsDetailsDesc} >{texts.chipsDetails}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section III */}
                    <div className={styles.features} >
                        <div className={styles.featureHead} >{texts.featureHead}</div>
                        <div className={styles.featureContainer} >
                            {
                                texts.featureList.map((feature, index) => (
                                    <table className={styles.feature} key={index} >
                                        <tbody>
                                            <tr className={styles.featureWrapper} >
                                                <td className={styles.featureImageWrapper} >
                                                    <Image className={styles.featureImage} source={assets[feature.name]} /> 
                                                </td>
                                                <td className={styles.featureDetails} >
                                                    <div className={styles.featureTitle} >{feature.title}</div>
                                                    <div className={styles.featureDescription} >{feature.description}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ))
                            }
                        </div>
                    </div>

                    {/* Section IV */}
                    <div className={styles.coconutSection} >
                        <table className={styles.coconutTable} >
                            <tbody>
                                <tr className={styles.coconutContainer} >
                                    <td className={styles.coconutDetails} >
                                        <div className={styles.coconutHead} >{texts.coconutHead}</div>
                                        <div className={styles.coconutDescription} >{texts.coconutDescription}</div>
                                    </td>
                                    <td className={styles.coconutWrapper} >
                                        <Image className={styles.coconutImage} source={assets.coconutOil} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section V */}
                    <div className={styles.plantain} >
                         <table className={styles.plantainTable} >
                            <tbody>
                                <tr className={styles.plantainRow} >
                                    <td className={styles.plantainWrapper} >
                                        <Image source={assets.plantain} className={styles.plantainPic} />
                                    </td>
                                    <td className={styles.plantainDetails} >
                                        <div className={styles.plantainHead} >{texts.plantainHead}</div>
                                        <div className={styles.plantainDesc} >{texts.plantainDetails}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section VI */}
                    <div className={styles.mto} >
                        <div className={styles.mtoHead} >{texts.mtoHead}</div>
                        <div className={styles.mtoDescription} >{texts.mtoDescription}</div>
                        <div className={styles.mtoDiagram} >
                            <div className={styles.process} >
                                <Image className={styles.processImage} source={assets.order} />
                                <div className={styles.caption} >{texts.mtoCaptions[0]}</div>
                            </div>
                            <Image className={styles.next} source={assets.next} />
                            <div className={styles.process} >
                                <Image className={styles.processImage} source={assets.fry} />
                                <div className={styles.caption} >{texts.mtoCaptions[1]}</div>
                            </div>
                            <Image className={styles.next} source={assets.next} />
                            <div className={styles.process} >
                                <Image className={styles.processImage} source={assets.package} />
                                <div className={styles.caption} >{texts.mtoCaptions[2]}</div>
                            </div>
                            <Image className={styles.next} source={assets.next} />
                            <div className={styles.process} >
                                <Image className={styles.processImage} source={assets.delivery} />
                                <div className={styles.caption} >{texts.mtoCaptions[3]}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section VII */}
                    <div id="product" className={styles.product} >
                        <table className={styles.productTable} >
                            <tbody>
                                <tr className={styles.productRow} >
                                    <td className={styles.productWrapper} >
                                        <Image source={assets.product} className={styles.productPic} />
                                    </td>
                                    <td className={styles.productDetails} >
                                        <div className={styles.productHead} >{texts.productHead}</div>
                                        <div className={styles.specWrapper} >
                                            {
                                                texts.specifications.map((spec, index) => (
                                                    <span key={index} className={styles.specification} >{spec}</span>
                                                ))
                                            }
                                        </div>
                                        {
                                            texts.productDataList.map((adata, index) => (
                                                <div key={index} >
                                                    <div className={styles.productDataHead} >{adata.name}</div>
                                                        <div className={styles.productDataWrapper} >
                                                            {
                                                                adata.values.map((storageData, index) => (
                                                                    <span key={index} className={styles.productData} >{storageData}</span>
                                                                ))
                                                            }
                                                        </div>
                                                </div>
                                            ))
                                        }
                                        <Button variation="orangeGrad" className={styles.buyButton} onClick={this.onBuyClick} >{texts.buyButtonText}</Button>
                                        <div className={styles.channels} >
                                            {
                                                channelList.map((channel, index) => (
                                                    <a key={index} className={styles.channel} href={channel.link} target="_blank" >{channel.name}</a>
                                                ))
                                            }
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Buy Pop Up */}
                    {
                        this.state.buy
                        ? <BuyPopUp onClose={this.onBuyClose} />
                        : null
                    }

                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;