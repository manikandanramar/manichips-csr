import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Switch, withRouter } from 'react-router-dom';
import styles from './styles.scss';
import Routes from '../routes';
import NavBar from '../components/NavBar';
import { preLoad } from '../utils/cache';
import { amazon, flipkart } from '../config/assets';
import ReactGA from 'react-ga';
import { trackingId, assets } from '../config';

class App extends PureComponent {

    constructor(props) {
        super(props);
        ReactGA.initialize(trackingId);

        this.props.history.listen((location) => {
            window.scrollTo(0, 0);
            ReactGA.set({ page: location.pathname }); // Update the user's current page
            ReactGA.pageview(location.pathname); // Record a pageview for the given page
        });
    }

    componentDidMount() {
        ReactGA.pageview(document.location.pathname);  // Records a pageview for the given page in first load
        preLoad([
            amazon,
            flipkart
        ]);
    }

    render() {
        const festiveFlag = this.props.location.pathname != "/festivesale";

        return (
            <div className={styles.parent} >
                <Helmet>
                    <link rel="shortcut icon" href={assets.logo} />

                    <meta name="robots" content="index, follow" />

                    <title>Online Shopping Site for Snacks, Savouries, Banana Chips & More - Manichips</title>
                    <meta name="description" content="India's biggest online shopping site for Banana Chips, Snacks, Savouries and more. Find the largest selection of premium quality snacks at best price in India."></meta>

                    <meta name="og_title" property="og:title" content="Online Shopping Site for Snacks, Savouries, Banana Chips & More - Manichips"/>
                    <meta property="og:description" content="India's biggest online shopping site for Banana Chips, Snacks, Savouries and more. Find the largest selection of premium quality snacks at best price in India." />
                    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/preview-logo.jpg?alt=media&token=40acf473-f76a-4911-8eb7-302d5c446b4c" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.manichips.com/" />
                    <meta property="og:site_name" content="Manichips" />

                    <meta name="twitter:card" content="summary" /> 
                    <meta name="twitter:site" content="@manichips" /> 
                    <meta name="twitter:title" content="Online Shopping Site for Snacks, Savouries, Banana Chips & More - Manichips" /> 
                    <meta name="twitter:description" content="India's biggest online shopping site for Banana Chips, Snacks, Savouries and more. Find the largest selection of premium quality snacks at best price in India." /> 
                    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/preview-logo.jpg?alt=media&token=40acf473-f76a-4911-8eb7-302d5c446b4c" />
                </Helmet>
                {
                    festiveFlag
                    ? <NavBar />
                    : null
                }
                <div className={festiveFlag ? styles.mainContent : null} >
                    <Switch>{Routes}</Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(App);