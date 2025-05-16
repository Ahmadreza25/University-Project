import styled from "styled-components";



const DivDisPlay = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:${prop => prop.margint};
    margin-bottom:${prop => prop.marginb};
    margin-right:${prop => prop.marginr};
    margin-left:${prop => prop.marginl};
`


export default DivDisPlay