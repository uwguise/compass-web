import React, { PropTypes } from 'react'
// import * as I from 'immutable'
import Styles from './styles.scss'
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts'

const PriceGraph = ({
  priceData,
}) => {
  return (
    <div className={Styles.priceGraph}>
      <ResponsiveContainer>
        <LineChart width={600} height={300} data={priceData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date"/>
          <Tooltip/>
          <Line type="monotone" dataKey="adj_close" stroke="#8884d8" activeDot={{ r: 8 }}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

PriceGraph.propTypes = {
  priceData: PropTypes.arrayOf(PropTypes.object),
}

export default PriceGraph
