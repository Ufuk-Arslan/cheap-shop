import ProductInfo from './ProductInfo'

const Products = ({ items, removeItem, onCostChange }) => {

  return (
    <>
      {items.map(item => (
        <ProductInfo id={item.id} removeItem={removeItem} onCostChange={onCostChange} />
      ))}
    </>
  )
}

export default Products