import { Product } from '../interfaces/interfaces';

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
  
  export const products: Product[] = [product1, product2];