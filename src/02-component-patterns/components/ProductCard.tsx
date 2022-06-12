import { createContext, CSSProperties, ReactElement } from 'react';

import { ProductContextProps, Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter ,increaseBy } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                className={ `${styles.productCard} ${className}` }
                style={ style }
            >
                { children }
            </div>
        </Provider>
    );
};
