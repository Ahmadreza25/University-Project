import styled from "styled-components";


const Img = styled.img`
    width:${prop => prop.width};
    height:${prop => prop.height};
    margin-top:${prop => prop.margint};
    margin-bottom:${prop => prop.marginb};
    margin-right:${prop => prop.marginr};
    margin-left:${prop => prop.marginl};
`


export default Img