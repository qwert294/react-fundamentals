function ProductCard(p){


    return(
        <>
        <p>productname:  {p.rename}</p>
        <p>price:   {p.oldprice}</p>
        <p>status {p.isAvailable}</p>
        </>
    )
}
export default ProductCard;