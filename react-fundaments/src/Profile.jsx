function Profile(){
        const name="thohid"
        const age=29
        const isStudent=true

    return(
        <>
        <p>i profile am</p>
        <p>name:{name}</p>
        <p>age: {age}</p>
        <p>{isStudent===true?"yes it is no":"no it is yes"}</p>
        </>
    )
}
export default Profile;