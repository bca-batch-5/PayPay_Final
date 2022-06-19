import styled from "styled-components";

export const NotifBox = styled.div`
    width:500px;
    height:650px;
    position:absolute;
    background-color: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius:25px;
    right:120px;
    top: 123px;
    display:${props => props.display}
`

export const InNotifBox = styled.div`
    display:flex;
    flex-direction:column;
    padding:30px;
    height:100%;

`