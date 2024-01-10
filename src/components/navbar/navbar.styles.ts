// Login.styles.ts
import styled from "styled-components";
import global, { colorBook } from "../../style/global.styles";

const paddingLeft = "15";

export const Container = styled.div`
  width: 15rem;
  height: 100vh;
  background-color: #11111D;
`;

export const Profile = styled.div`
  margin-top: 20px;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: ${paddingLeft}px;
`;

export const Img = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  ${colorBook.smurfs}
`;

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
  font-family: ${global.font_name_fat};
  font-weight: ${global.font_weight_fat};
  font-size: 22px;
  color: #fff;
  text-shadow: 2px 2px 4px #26223d;
`;
export const ID = styled.div`
  font-family: ${global.font_name_fat};
  font-weight: ${global.font_weight_reg};
  font-size: 12px;
  color: #aaa3d1;
`;
export const LinkContainer = styled.div`
  margin-top: 10px;
  height: auto;
  width: 100%;
  color: #fff;
  font-family: ${global.font_name_fat};
`;
