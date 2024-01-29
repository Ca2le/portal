import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { hexColors } from '../../style/global.styles';

function CityDiagram() {
    const data02 = [
        {
            "name": "Stockholm",
            "value": 2400,
            "color": hexColors.theme.royal // Specify color for Group A
        },
        {
            "name": "Göteborg",
            "value": 4567,
            "color": hexColors.theme.smurf // Specify color for Group B
        },
        {
            "name": "Kalmar",
            "value": 1398,
            "color": hexColors.theme.honey // Specify color for Group C
        },
        {
            "name": "Malmö",
            "value": 9800,
            "color": hexColors.theme.raspberry // Specify color for Group D
        },
        {
            "name": "Övriga",
            "value": 3908,
            "color": hexColors.theme.lemon // Specify color for Group E
        },
  
    ];

    return (
        <div>
            <PieChart width={730} height={250}>
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d">
                    {data02.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default CityDiagram 