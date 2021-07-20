import React, { PureComponent } from 'react';
import styles from './styles.scss';
import { routes } from '../../config';
import { Link } from 'react-router-dom';

class Sitemap extends PureComponent {
    render() {
        return (
            <div className={styles.sitemap} >
                <div>Sitemap</div>
                <div className={styles.linksList} >
                    {
                        routes.map((route, index) => (<Link key={index} className={styles.siteLink} to={route.path}>{route.oName}</Link>))
                    }
                </div>
            </div>
        );
    }
}

export default Sitemap;
