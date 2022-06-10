import { createContext, ReactElement } from 'react';

import { ProductContextProps, Product } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {

    const { counter ,increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard} ${className}` }>
                { children }
            </div>
        </Provider>
    );
};
