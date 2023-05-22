export default function Product({ params }) {
  const { productId } = params;
  return (
    <div>
      { productId }
    </div>
  )
}
