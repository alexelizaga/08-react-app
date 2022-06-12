import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';
import styles from '../styles/styles.module.css';

const product = products[0];


export const ShoppingPage = () => {


  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        
        <ProductCard
          key={ product.id }
          product={ product }
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          {
            ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
              <>
                <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductTitle className='text-bold' />
                <ProductButtons className='custom-buttons' />

                <div className={ `${styles.buttonsContainer} custom-buttons` }>
                  <button 
                      className={ styles.buttonMinus }
                      onClick={ ()=>increaseBy(-1) }
                    > - </button>
                    <div className={ styles.countLabel }> { count } </div>
                    {
                      ( !isMaxCountReached ) && (
                        <button
                          className={ styles.buttonAdd }
                          onClick={ ()=>increaseBy(+1) }
                        > + </button>
                      )
                    }
                </div>

                <div className={ `${styles.buttonsContainer} custom-buttons` }>
                  <button
                    className={ styles.buttonReset }
                    onClick={reset}
                  >Reset</button>
                </div>

              </>
            )
          }
        </ProductCard>

    </div>
  )
}

export default ShoppingPage;