import { lazy } from "react";
import { icons, IconName } from "../../library/icons.library";
import styled from "styled-components";
interface IconProps {
  name: IconName;
}
const Icon = ({ name }: IconProps) => {
  const icon = icons[name];
  const SVG = styled.svg`
    width: 15px;
    height: 15px;
  `;
  return (
    <SVG viewBox="0 0 24 24">
      {icon.paths.map((path) => (
        <path d={path.d} fill={path.fill} />
      ))}
      {icon?.ellipse.map((ellipse) => (
        <ellipse rx={ellipse.rx} ry={ellipse.ry} cx={ellipse.cx} cy={ellipse.cy} fill={ellipse.fill}/>
      ))}
    </SVG>
  );
};

export default Icon;
