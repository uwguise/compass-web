import React, { PropTypes } from 'react'
// import * as I from 'immutable'
import Styles from './styles.scss'
import * as Re from 'recharts'

const PriceGraph = ({
  priceData,
}) => {
  return (
    <div className={Styles.priceGraph}>
      <Re.ResponsiveContainer>
        <Re.AreaChart width={600} height={300} data={priceData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Re.XAxis dataKey="date" padding={{ left: 0, right: 0 }} minTickGap={100}/>
          <Re.YAxis/>
          <Re.Tooltip/>
          <Re.Area
            type="monotone"
            dataKey="adj_close"
            stroke="#82ca9d"
            fillOpacity={0.2}
            fill="#82ca9d"/>
        </Re.AreaChart>
      </Re.ResponsiveContainer>
    </div>
  )
}

PriceGraph.propTypes = {
  priceData: PropTypes.arrayOf(PropTypes.object),
}

export default PriceGraph
