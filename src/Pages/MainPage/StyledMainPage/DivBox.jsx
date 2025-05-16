import styled from "styled-components";



const DivBox = styled.div`
    width:${prop => prop.width};
    height:${prop => prop.height};
    background-color:${prop => prop.background};
    display:flex;
    align-items: center;
    justify-content:${prop => prop.justify};
    flex-direction:${prop => prop.flex};
    border-radius:${prop => prop.borderr};
    margin-top:${prop => prop.margint};
    margin-bottom:${prop => prop.marginb};
    margin-right:${prop => prop.marginr};
    margin-left:${prop => prop.marginl};
    border:${prop => prop.border};
`

export default DivBox