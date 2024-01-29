// Login.styles.ts
import styled from "styled-components";
import { fonts, fontWeight } from "../../style/global.styles";

export const Container = styled.div`
  width: 16rem;
  min-width: 16rem;
  height: 100vh;
  background-color: #fff;
  display: flex;
justify-content: start;
  `;

export const Profile = styled.div`
  margin-top: 20px;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Line = styled.div`
 width: 80%;
 height: 1px;
 background-color: #eeeeee;
 align-self: center;
 margin: 10px 0 10px 0;
`;
export const InnerContainer = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
`;
// export const Img = styled.div`
//   height: 50px;
//   width: 50px;
//   border-radius: 12px;
//   ${colorBook.smurfs}
// `;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 100%;
  margin-left: 10px;
`;

export const HeaderDiv = styled.div`
  position: relative;
  justify-content: start;
  align-items: end;
  display: flex;
  height: auto;
  width: 100%;
`;

export const Name = styled.p`
  font-family: ${fonts.font_1};
  font-weight: ${fontWeight.bold};
  font-size: 22px;
  color: #3B3B3B;
`;
export const ID = styled.div`
  font-family: ${fonts.font_1};
  font-weight: ${fontWeight.light};
  font-size: 12px;
  color: #aaa3d1;
`;

export const Home_Section = styled.div`
 
`;

export const Information_Section = styled.div`

`;
export const Key_Section = styled.div`
 /* background-color: green; */
`;
export const Affiliate_Section = styled.div`

`;
export const Account_Section = styled.div`
  margin: auto 0 30px 0;

`;