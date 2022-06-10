import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

interface Route {
    to: string;
    path: string;
    name: string;
    Component: () => JSX.Element;
}

export const routes: Route[] = [
    {
        to: '/lazy-1',
        path: 'lazy-1',
        Component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy-2',
        path: 'lazy-2',
        Component: LazyPage2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy-3',
        path: 'lazy-3',
        Component: LazyPage3,
        name: 'Lazy-3'
    },
]