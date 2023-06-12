import {useEffect, useRef} from 'react';
import * as V from 'victory';
import { VictoryBar,VictoryChart,VictoryAxis } from 'victory';
import './dashboard.scss'
import Card from '../../component/card/Card';
import useRedirectlogout from '../../component/customhook/useRedirectlogout';


// import { VictoryBar,VictoryChart,VictoryAxis,
//   VictoryTheme } from 'victory';
const data = [
  {date: 1, earnings: 13000},
  {date: 2, earnings: 16500},
  {date: 3, earnings: 14250},
  {date: 4, earnings: 19000}
];

const Dashboard = () => {
  useRedirectlogout('/login')

  return (
    <>
      <h1>Dashboard</h1>
      <div className='dashboard-data'>
      <Card >
      <div className='dashboard-chart'>
      <VictoryChart  domainPadding={{x: [10, -10], y: 5}}
      style={{
        parent: {
          border: "1px solid #ccc"
        },
        background: {
          fill: "#1f93ff"
        }
       
      }}
      >
      <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x / 10000}k`)}
        />
      
      </VictoryChart>
      </div>
      </Card>
      <Card>
      <div className='dashbored-pie'>
      <V.VictoryPie
      colorScale={["#0a1930", "#0a1930d6", "#0d2c5cd6", "#1f93ff", "#5da6ea" ]}
  data={[
    { x: "Frontend", y: 25,},
    { x: "Data analysis", y: 6 },
    { x: "Backend", y: 20 },
    { x: "python", y: 10 },
    { x: "Auto card", y: 5 }
  ]}
/>
      </div>
      </Card>
    </div>
    </>
  )
}

export default Dashboard