import styled from "styled-components";


export const BorderDalamProfil = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BorderGambar = styled.div`
  width: 90px;
  height: 90px;
  background-size: cover;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 5%);
`;

export const BorderPilihan = styled.div`
  padding: 0px 10px;
  margin-top: 20px;
  width: 440px;
  height: 64px;
  background: #e5e8ed;
  border-radius: 10px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #4d4b57;
  display: flex;
  align-items: center;
`;

export const BorderDalamPilihan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;
