import React from 'react'
import {Typography} from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

function WeatherSunInfo({location, temperature, weather}) {
  return (
    <div className='column'>
      <Typography gutterBottom variant="h4" component="div" color="primary">
        {location}
      </Typography>
      <div className='sun'>
        <WbSunnyIcon color="sunOrange"/>
        {weather.includes('clouds') && (<FilterDramaIcon />)}
        <Typography gutterBottom variant="h3" component="div" color="secondary">
          {temperature}
        </Typography>
      </div>
      
      <Typography variant="body2" color="text.secondary">
        {weather[0].toUpperCase() + weather.substring(1) /*'Clear sky'*/}
      </Typography>
      <style>{`
        .sun{
          display: flex;
        }

        .column{
          margin-left: 2rem;
        }
      `}</style>
    </div>
  )
}

export default WeatherSunInfo