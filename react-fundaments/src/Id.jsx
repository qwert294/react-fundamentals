
function Id(g){


    return(
    <div className="container">
        <img className="img" src={g.photo} alt="blank"/>
        <p className="name">{g.name}</p>
        <p>{g.course}</p>
        <p>{g.roll}</p>
        <p>{g.blood}</p>
        <p>{g.dob}</p>
    </div>
    )
}
export default Id