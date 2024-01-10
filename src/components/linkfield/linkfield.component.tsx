import { useNavigate } from "react-router-dom";
import { Container, Div, Header } from "./linkfield.styles";
import { useState } from "react";
import DropBox from "../dropbox/dropbox.component";
import Icon from "../icon/icon.component";
import { IconName } from "../../library/icons.library";
interface LinkProps {
  iconName: IconName;
  to: string;
  sublinks?: string[];
}

function Linkfield({ to, iconName, sublinks }: LinkProps) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Div
        onClick={() => {
          navigate(to);
        }}
      >
        <Icon name={iconName} />
        <Header>{iconName}</Header>
        {sublinks ?   <Icon name="arrow"/> : null}
      </Div>
      {/* {sublinks ? <DropBox toggle={toggle} sublinks={sublinks} /> : null} */}
      
    </Container>
  );
}

export default Linkfield;
