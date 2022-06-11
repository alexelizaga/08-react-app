# ProductCard

## Option 1

Example:

```
    <ProductCard
        product={ product }
        className="bg-dark text-white"
    >
        <ProductCard.Image className='custom-image' />
        <ProductCard.Title className='text-bold' />
        <ProductCard.Buttons className='custom-buttons' />
    </ProductCard>
```

## Option 2

```
    <ProductCard
        product={ product2 }
        className='bg-dark text-white'
    >
        <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
        <ProductTitle className='text-bold' />
        <ProductButtons className='custom-buttons' />
    </ProductCard>
```
