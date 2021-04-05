
export const ProductQtyInput = (props) => {
  const {
    qty,
    updateQty,
    product,
  } = props;

  const increaseQty = () => {
    console.log(product)
    if (product) return updateQty(product, qty + 1);
    
    updateQty(qty + 1);
  }

  const decreaseQty = () => {
    if (product) return updateQty(product, qty -1);

    updateQty(qty - 1);
  } 

  const handleChange = (e) => {
    if (product) {
      console.log('Yea Buddy')
      updateQty(product, parseInt(e.target.value))
    } else {
      updateQty(parseInt(e.target.value))
    }
  }

  return (
    <div className="product-qty">
      <div className="qty-btn left" onClick={() => decreaseQty()}>-</div>
      {<input 
        type="number" 
        name="qty" 
        id="productQty" 
        className="qty-input" 
        value={qty} 
        onChange={e => handleChange(e)}
      />}
      <div className="qty-btn right" onClick={() => increaseQty()}>+</div>
    </div>
  )
}
