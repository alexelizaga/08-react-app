import { useState } from 'react';

import { Product } from '../interfaces/interfaces';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: '/assets/coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: '/assets/coffee-mug2.png'
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product}) => {
    console.log({ count });
    setShoppingCart( oldShoppingCart => {
      if ( count === 0 ) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return {
          ...rest
        }
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      };
    });
  };

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            
            {
              products.map( product => (
                <ProductCard
                  key={ product.id }
                  product={ product }
                  className='bg-dark text-white'
                  onChange={ onProductCountChange }
                  value={ shoppingCart[product.id]?.count || 0 }
                >
                  <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                  <ProductTitle className='text-bold' />
                  <ProductButtons className='custom-buttons' />
                </ProductCard>
              ))
            }

        </div>

        <div className='shopping-cart'>
          {
            Object.entries(shoppingCart).map( ([key,  product]) => (
              <ProductCard
                key={ key }
                product={ product }
                className='bg-dark text-white'
                style={{ width: '100px' }}
                onChange={ onProductCountChange }
                value={ product.count }
              >
                <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductButtons className='custom-buttons' />
              </ProductCard>
            ))
          }
        </div>

    </div>
  )
}

export default ShoppingPage;