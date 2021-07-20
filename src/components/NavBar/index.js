import React, { PureComponent } from 'react';
import Link from '../Link';
import { icons, texts } from '../../config';
import styles from './styles.scss';
import Image from '../Image';

class NavBar extends PureComponent {

    render() {
        return (
            <nav className={styles.navbar} >
                <div className={styles.content} >
                    <div className={styles.wrapperOne} >
                        <Link className={styles.namelink} to="/">
                            <Image className={styles.title} source={icons.logo} />
                        </Link>
                    </div>
                    <div className={styles.wrapperTwo} >
                        <Link className={styles.feedback} to="/feedback" >F</Link>
                        <Link className={styles.productButton} to="/product" >{texts.productText}</Link>
                    </div>

                </div>
            </nav>
        );
    }
}

export default NavBar;
