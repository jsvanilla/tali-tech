import React, {useEffect, useState} from 'react'
import {Card, CardContent, Grid, Skeleton} from '@mui/material'
import WeatherCardHeader from '../weatherCardHeader/WeatherCardHeader'
import WeatherSunInfo from '../weatherSunInfo/WeatherSunInfo'
import StatInfoColumn from '../../molecule/statInfoColumn/StatInfoColumn'
import useLocation from '../../../hooks/useLocation'
import useWeather from '../../../hooks/useWeather'

function WeatherCard() {
  const {location} = useLocation()
  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(true)
  const getWeather = useWeather()

  useEffect(()=>{
    console.log(location)
    if(location.loaded && location.error === false && !weatherData){
      getWeather(location.coordinates).then(data =>{
        setWeatherData(data)
        setLoading(false)
      }) 
    }
  },[location, weatherData])
  return (
    <div style={{marginLeft: '10vw', marginRight: '10vw'}}>
      {loading ? (
        <Skeleton variant="rectangular" height={250} />
      ) : (<Card variant="outlined">
        <CardContent className='card'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <WeatherCardHeader/>
            </Grid>
            <Grid item xs={6}>
              <WeatherSunInfo {...weatherData}/>
            </Grid>
            <Grid item xs={6}>
              <StatInfoColumn {...weatherData}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>)}
      
      <style>{`
        @keyframes animatename{
          0%{
            transform: translateX(30px);
            opacity: 0;
          }
          100%{
            transform: translateX(0px);
            opacity: 1;
          }
        }
        .card {
          animation: animatename 1s linear;
          margin-left: 2vw;
          margin-right: 2vw;
        }
    `}</style>
    </div>
  )
}

export default WeatherCard