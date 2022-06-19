import styled from "styled-components";

export const BorderLogo = styled.div`
  width: 850px;
  background-image: url(${(props) => props.image});
  background-position: top;
  background-size: cover;
  padding: 50px 0px 50px 80px;
`;

export const BorderTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 700;
  color: white;
`;

export const LeftImage = styled.div`
  width: 100%;
  height: 575px;
`;

export const LeftSubText = styled.div`
  width: 75%;
  text-align: center;
  color: white;
`;

export const BoxKanan = styled.div`
  width: 670px;
  background-color: #fafcff;
`;

export const BoxKananDalam = styled.div`
  margin-left: 30px;
  margin-top: 50px;
`;

export const BorderJudul = styled.div`
  width: 64%;
  color: #3a3d42;
`;
