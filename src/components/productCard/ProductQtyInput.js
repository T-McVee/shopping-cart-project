
export const ProductQtyInput = (props) => {
  const {
    qty,
    setQty,
  } = props;

  const increaseQty = () => {
    setQty(qty + 1);
  }

  const decreaseQty = () => {
    setQty(qty - 1);
  } 

  return (
    <div className="product-qty">
      <div className="qty-btn left" onClick={() => decreaseQty()}>-</div>
      <input 
        type="number" 
        name="qty" 
        id="productQty" 
        className="qty-input" 
        value={qty} 
        onChange={e => setQty(parseInt(e.target.value))}
      />
      <div className="qty-btn right" onClick={() => increaseQty()}>+</div>
    </div>
  )
}
