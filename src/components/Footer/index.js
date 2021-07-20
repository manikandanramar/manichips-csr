import React, { PureComponent } from 'react';
import Link from "../Link";
import styles from "./styles.scss";
import { footer, copyright, social, address, phone, mail, fssai, texts, icons } from '../../config'; 
import Image from '../Image';

class Footer extends PureComponent {
    render() {
        return (
            <footer className={styles.footer} >
                <div className={styles.topSection} >
                    <table>
                        <tbody>
                            <tr className={styles.topSectionContainer} >
                                <td className={styles.addressWrapper} >
                                    <div className={styles.brandWrapper} >
                                        <Image source={icons.logo} className={styles.brandLogo} />
                                        <Image source={icons.brandText} className={styles.brandText} />
                                    </div>
                                    <div className={styles.address} >{address}</div>
                                    <a className={styles.phone} href={`tel:${phone}`} >{phone}</a>
                                    <a className={styles.mail} href={`mailto:${mail}`} >{mail}</a>
                                    <div className={styles.fssai} >{fssai}</div>
                                </td>
                                <td className={styles.aboutWrapper} >
                                    <div className={styles.aboutUs} >ABOUT US</div>
                                    <div className={styles.brandDescription} >{texts.brandDescription}</div>
                                </td>
                                <td className={styles.socialWrapper} >
                                    <div className={styles.socialHead} >SOCIAL</div>
                                    {
                                        social.map((links, index) => (
                                            <a className={styles.socialMedia} key={index} href={links.to} target="_blank" >{links.name}</a>
                                        ))
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.bottomSection} >
                    <table className={styles.bottomTable} >
                        <tbody>
                            <tr className={styles.bottomWrapper} >
                                <td className={styles.linkWrapper} >
                                    {
                                        footer.map(({ name, to }, n) => (<Link key={n} className={styles.footerItems} to={to}>{name}</Link>))
                                    }
                                </td>
                                <td className={styles.copyright} >{copyright}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </footer>
        );
    }
}

export default Footer;