import { icons, IconName } from "../../library/icons.library";
import styled, { css, keyframes } from "styled-components";
import { hexColors } from "../../style/global.styles";
interface IconProps {
  name: IconName;
  state?: boolean;
  isHover: boolean;
  isSelected?: boolean;
}
interface IState {
  state: boolean | undefined
}
const rotate = keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 180deg;
  }
`
const SVG = styled.svg<IState>`
animation: ${({ state }) => state ? css`${rotate} 1s ease-in-out ` : ''};
position: absolute;
width: 18px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const selectedColor = (isSelected: boolean | undefined, isHover: boolean) => {
  const selected = {
    first: hexColors.raspberry.medium,
    second: hexColors.raspberry.light
  }
  const hoverd = {
    first: hexColors.coal.dark,
    second: hexColors.coal.darkest
  }
  const normal = {
    first: hexColors.coal.medium,
    second: hexColors.coal.dark
  }

  if (isSelected && isHover) {

    return selected
  } if (isSelected) {
    return selected
  } if (isHover) {
    return hoverd
  } else {
    return normal
  }
}

const Icon = ({ name, state, isHover, isSelected }: IconProps) => {
  const icon = icons[name];
  const color = selectedColor(isSelected, isHover)
  return (

    <SVG viewBox="0 0 20 20" state={state}>
      {icon.paths.map((path, i) => (
        path.mainColor ?
          <path key={i} d={path.d} fill={color.first} /> :
          <path key={i} d={path.d} fill={color.second} />
      ))}
      {icon.rect.map((rect, i) => (
        rect.mainColor ?
          <rect key={i} x={rect.x} y={rect.y} width={rect.width} height={rect.height} fill={color.first} /> :
          <rect key={i} x={rect.x} y={rect.y} width={rect.width} height={rect.height} fill={color.second} />
      ))}
      {/* {icon?.ellipse.map((ellipse, i) => (
        <ellipse key={i} rx={ellipse.rx} ry={ellipse.ry} cx={ellipse.cx} cy={ellipse.cy}  fill={isHover? '#000' : '#494949'} />
      ))} */}
    </SVG>
  );
};

export default Icon;
