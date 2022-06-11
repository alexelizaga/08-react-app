import { lazy, LazyExoticComponent } from 'react';

import { NoLazy } from '../01-lazyload/pages/NoLazy';
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component:  JSXComponent | LazyExoticComponent<JSXComponent>;
}

const noLazyRoutes: Route[] = [
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    {
        path: '/shopping',
        to: 'shopping',
        Component: ShoppingPage,
        name: 'Shopping'
    },
];

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyModule" */ '../01-lazyload/layout/LazyLayout'));
const LazyShopping = lazy(() => import(/* webpackChunkName: "LazyShopping" */ '../02-component-patterns/pages/ShoppingPage'));

const lazyRoutes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        path: '/shopping/*',
        to: '/shopping/',
        Component: LazyShopping,
        name: 'Lazy Shopping'
    },
];

export const routes: Route[] = [ ...noLazyRoutes, ...lazyRoutes ];