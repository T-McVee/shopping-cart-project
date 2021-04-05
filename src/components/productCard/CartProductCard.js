import { ProductQtyInput } from './ProductQtyInput';

export const CartProductCard = (props) => {
  const {
    product,
    removeFromCart,
    updateProductQty,
  } = props;
  
  return (
    <div className="product-card">
      <div className="card-img">
        <img src={product.product.image} alt={product.description}/>
      </div>
      <div className="card-details">
        <div className="product-card-attributes">
          <div className="product-title">{product.product.title}</div>
          <div className="product-price">${product.value.toFixed(2)}</div>
        </div>
        <div className="buttons">
          <ProductQtyInput qty={product.qty} updateQty={updateProductQty} product={product.product} />
          <div 
            className="removeFromCart" 
            onClick={() => removeFromCart(product.product)}
          >
            x
          </div>
        </div>
      </div>
    </div>
  )
}
