import React from 'react'
import { Switch } from '@mui/material'
import { colorCatalog } from '../../../colors'

function WeatherCardHeader() {
  const label = ''
  return (
    <div className='cardHeader'>
      <div style={{color: colorCatalog.textSecondary }}>Current Weather</div>
      <Switch {...label} defaultChecked />
      <style>{`
        .cardHeader{
          display:flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default WeatherCardHeader