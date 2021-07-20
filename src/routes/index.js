import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Product from '../pages/Product';
import Policy from '../pages/Policy';
import Terms from '../pages/Terms';
import FAQ from '../pages/FAQ';
import Sitemap from '../pages/Sitemap';
import Feedback from '../pages/Feedback';
import FestiveSale from '../pages/FestiveSale';


export const routes = [
 // Home page
    {
        key: "home",
        path: "/",
        exact: true,
        component: Home
    },
    {
        key: "product",
        path: "/product",
        component: Product
    },
    {
        key: "policy",
        path: "/policy",
        component: Policy
    },
    {
        key: "terms",
        path: "/terms",
        component: Terms
    },
    {
        key: "feedback",
        path: "/feedback",
        component: Feedback
    },
    {
        key: "festivesale",
        path: "/festivesale",
        component: FestiveSale
    },
    {
        key: "faq",
        path: "/faq",
        component: FAQ
    },
    {
        key: "sitemap",
        path: "/sitemap",
        component: Sitemap
    }
];

export default [
    ...routes.map(({ key, path, component }) => <Route key={key} exact path={path} component={component} />),
    <Route key="error" component={Error} />
];