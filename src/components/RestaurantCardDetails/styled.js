import styled from "styled-components";
import { primaryColor,secondaryColor } from "../../constants/colors";


export const Container = styled.div`
  width: 100%;
  min-height: 148px;
  max-height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: Roboto;
 p{
	 margin: 0px;
 }
`;

export const Img=styled.img`

    width: 100%;
    height: 120px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  `

export const ContainerDetails = styled.article`
  min-height: 268px;
  max-height: 268px;
  margin-top: 17.008px;
  border-radius: 8px;
  overflow: hidden;
  margin-left: 16px;
  margin-right: 16px;
  box-sizing: border-box;
  
`;
export const Name = styled.p`
  width: 20.5rem;
  height: 1.125rem;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${primaryColor};
`;

export const ContainerNumb = styled.div`
  display: flex;
  flex-direction: row;
  color:${secondaryColor};
  p {
    margin-right: 30px;
  }
`;
export const Address=styled.p`
margin:0px;
color:${secondaryColor}
`;

export const Category=styled.p`
color: ${secondaryColor};
`