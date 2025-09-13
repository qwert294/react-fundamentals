import ProductCard from "./ProductCard.jsx";

function App() {
          const name="surya"
        const price=100
        const isAvailable=true


  return (
    <>
    <ProductCard rename={name} oldprice={price} isAvailable={isAvailable===true?"always available ":"stock our"} />
    </>
  )
     
}

export default App;
