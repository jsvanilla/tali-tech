import React from 'react'
import { colorCatalog } from '../../../colors'

function StatInfo({renderIcon,stat,data}) {
  return (
    <div className='infoRow'>
      {renderIcon()}
      <div className='elements'>{stat}</div>
      <div className='data'>{data}</div>
      <style>{`
        .infoRow {
          display: flex;
        }
        .elements {
          padding-left:1rem;
          padding-right:1rem;
          color: ${colorCatalog.iconsColor};
        }
        .data {
          color: ${colorCatalog.primary};
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default StatInfo