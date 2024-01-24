import React, { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export interface Route {
    to: string;
    path: string;
    component: React.LazyExoticComponent<React.FC> | React.FC;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        to: '/lazyload/*',
        path: '/lazyload//*',
        component: LazyLayout,
        name: 'Lazy dashbouard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    },
]