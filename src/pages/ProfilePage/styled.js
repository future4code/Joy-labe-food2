import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ProfileDetails = styled.div`
  margin: 64px 0 80px 0;

`;

export const DatesDiv=styled.div`
display: flex;
justify-content: space-between;
`

export const UserName = styled.span`
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;
export const AddressDiv = styled.div`
 display: grid;
 grid-template-columns: 170px 100px;
 grid-template-rows: 1fr;
 
  background-color: #eee;
p{
	margin: 0.5rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
}
`;
export const AddressTitle = styled.span`
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`;
export const Email = styled.span`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.125rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;
export const CPF = styled.div`
width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
export const HistoryTitle = styled.span`
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const Path = styled.div`
  width: 20.5rem;
  height: 0.063rem;
  margin: 0.5rem 1rem 1rem;
  border: solid 1px black;
`;
export const History = styled.span`
  width: 18.5rem;
  height: 1.125rem;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;
export const HistoryDiv = styled.span`
  width: 22.5rem;
  height: 2.625rem;
  margin: 1rem 0 15.5rem;
  padding: 0.75rem 2rem;
`;
export const Img=styled.img`
width: 1.5rem;
  height: 1.5rem;
  margin: 1rem 1rem 0.125rem 10rem;
  object-fit: contain;
`