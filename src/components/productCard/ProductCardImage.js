
export const ProductCardImage = props => {
  const { product } = props;

  return (
    <div className="card-img">
        <img src={product.image} alt={product.description}/>
    </div>
  )
}
