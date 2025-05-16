import styled from "styled-components";



const Input = styled.input`
    width:${prop => prop.width};
    height:${prop => prop.height};
    margin-top:${prop => prop.margint};
    margin-bottom:${prop => prop.marginb};
    margin-right:${prop => prop.marginr};
    margin-left:${prop => prop.marginl};
    border:${prop => prop.border};
    border-radius:${prop => prop.borderr};
    outline: none;
`


export default Input