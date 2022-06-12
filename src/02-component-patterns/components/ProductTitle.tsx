import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    title?: string;
    style?: CSSProperties;
}

export const ProductTitle = ( { title, className, style }: Props ) => {
    const { product } = useContext(ProductContext);
    console.log( styles.productDescription, className );

    return (
        <span
            className={ `${styles.productDescription} ${className}` }
            style={ style }
        >
            { title ?? product.title }
        </span>
    );
};