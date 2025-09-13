function ProductCard(p){


    return(
        <div className="container">
            <p>{p.productName}</p>
            <p>{p.price}</p>
            <p>{p.isAvailable===true?"yes":"no"}</p>
    </div>
    )
}
export default ProductCard;