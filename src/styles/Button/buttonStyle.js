import styled from "styled-components";

export const Button = styled.button`
color:${(props) => props.color};
background-color:${(props) => props.backgroundColor};
padding: 10px;
width: ${props => props.width};
border-color: ${props => props.borderColor};
border-radius: 10px;
transition: 0.2s;
cursor: pointer;

&:hover{
    background-color:${props => props.bgHover};
    color:${props => props.colorHover};
    border-color: ${props => props.borderColorHover}

}
`
