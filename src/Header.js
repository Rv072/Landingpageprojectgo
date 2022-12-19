import Headerimg from "./Assests/headerimg/Headerimg.jpg"

const imgHeader={
img:{
width:"100%",
height:"75px"
}
}

const Header=()=>{
    return(
        <>
        <img src={Headerimg} alt="Header_Image"  style={imgHeader.img}/>
        </>
    )
}
export default Header