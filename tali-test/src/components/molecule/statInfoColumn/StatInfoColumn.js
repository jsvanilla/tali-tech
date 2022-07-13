import React from 'react'
import StatInfo from '../../atom/statInfo/StatInfo'
import { Stack } from '@mui/material'
import { colorCatalog } from '../../../colors';

import OpacityIcon from '@mui/icons-material/Opacity'; // humidity
import CloudIcon from '@mui/icons-material/Cloud'; // wind
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'; // preasure

function StatInfoColumn({humidity, wind, preasure}) {
  return (
    <Stack spacing={2}>
      <div style={{color: colorCatalog.textSecondary }}>Monday</div>
      <StatInfo renderIcon={() => (<OpacityIcon color="iconsColor"/>)} stat={'Humidity'} data={humidity} />
      <StatInfo renderIcon={() => (<CloudIcon color="iconsColor"/>)} stat={'Wind'} data={wind} />
      <StatInfo renderIcon={() => (<CompareArrowsIcon color="iconsColor"/>)} stat={'Preassure'} data={preasure} />
    </Stack>
  )
}

export default StatInfoColumn