import React from 'react'
import { LineChart, Line, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { ChartContainer } from './traffic_diagram.styles';
import { fontWeight, fonts, hexColors } from '../../style/global.styles';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className='wrapper'>
        <p
          className="label"
          style={{ fontSize: '12px', padding: '5px' }}
        >
          {`${payload?.[0].payload.name} : ${payload?.[0].value}`}
        </p>
      </div>
    );
  }

  return null;
};


function TrafficDiagram() {

  const wrapperStyle = {
    backgroundColor: hexColors.coal.light,
    fontFamily: fonts.font_1,
    fontWeight: fontWeight.medium,
    borderRadius: '5px'
  }


  const data = [
    { name: 'Monday', uv: 400 },
    { name: 'Tuesday', uv: 300 },
    { name: 'Wednesday', uv: 200 },
    { name: 'Thursday', uv: 100 },
    { name: 'Friday', uv: 300 },
    { name: 'Saturday', uv: 600 },
    { name: 'Sunday', uv: 500 }
  ];

  return (
    <ChartContainer>
      <LineChart width={500} height={250} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke={hexColors.raspberry.light}
          strokeWidth={4}
          dot={{ r: 3, fill: hexColors.raspberry.light, stroke: hexColors.raspberry.light }}
          activeDot={{ r: 4, fill: hexColors.raspberry.medium, stroke: hexColors.raspberry.medium }}
        />
        <Tooltip
          cursor={{ stroke: 'red', strokeWidth: 0.7, opacity: 0.2 }}
          animationDuration={150}
          content={CustomTooltip}
          wrapperStyle={wrapperStyle} />
      </LineChart>
    </ChartContainer>
  )
}

export default TrafficDiagram
