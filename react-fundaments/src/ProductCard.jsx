function ProductCard({rename , oldprice , isAvailable}){


    return(
        <>
        <p>productname:  {rename}</p>
        <p>price:   {oldprice}</p>
        <p>status {isAvailable}</p>
        </>
    )
}
export default ProductCard;