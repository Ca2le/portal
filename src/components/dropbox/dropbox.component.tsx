import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Sublink, Text } from "./dropbox.styles";
interface DropBoxProps {
  toggle: boolean,
  sublinks: string[]
}
function DropBox({ sublinks, toggle }: DropBoxProps) {
  const navigate = useNavigate();
  return (
    <Container toggle={toggle}>
      {sublinks.map((sublink) => {
        return (
          <Sublink
            onClick={() => {
              navigate(sublink);
            }}
          >
            <Text> {sublink}</Text>
          </Sublink>
        );
      })}
    </Container>
  );
}

export default DropBox;
