import styled from "styled-components";

const Button = styled.button`
    width:${prop => prop.width};
    height:${prop => prop.height};
    margin-top:${prop => prop.margint};
    margin-bottom:${prop => prop.marginb};
    margin-right:${prop => prop.marginr};
    margin-left:${prop => prop.marginl};
    background-color:${prop => prop.background};
    display:flex;
    align-items: center;
    justify-content:${prop => prop.justify};
    border-radius:${prop => prop.borderr};
    border:${prop => prop.border};
    color:${prop => prop.color};
    font-weight: 900;
    font-size: 15px;
    z-index: 4;
`


export default Button