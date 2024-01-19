import React, { lazy } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export interface Route {
    to: string;
    path: string;
    component: React.LazyExoticComponent<React.FC> | React.FC;
    name: string;
}

const lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: lazy1,
        name: 'Lazy Page 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: lazy2,
        name: 'Lazy Page 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: lazy3,
        name: 'Lazy Page 3'
    },
]