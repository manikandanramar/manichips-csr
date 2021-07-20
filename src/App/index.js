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