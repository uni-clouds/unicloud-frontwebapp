import { memo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps'
import Tooltip from '@mui/material/Tooltip'
import * as geoUrl from './Map.json'

import { MapProps } from './types'

const PodsLocation: React.FC<MapProps> = ({ coordinates }) => {
  const [tooltipContent, setTooltipContent] = useState('')
  const locations = coordinates?.map((coordinate) => Object.entries(coordinate))

  return (
    <ComposableMap
      width={600}
      height={480}
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        scale: 400,
        rotate: [60, 20, 0]
      }}
    >
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((info) => info.properties.REGION_UN === 'Americas')
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill='#2c3789'
                  fillOpacity={0.6}
                  stroke='#fafafa'
                  strokeWidth={1}
                  style={{
                    hover: {
                      fill: '#8094ae',
                      fillOpacity: 0.5
                    }
                  }}
                />
              ))
          }
        </Geographies>
        {locations?.map((location) => (
          <>
            <Marker
              coordinates={location[0][1]}
              key={uuidv4()}
              onMouseEnter={() => {
                setTooltipContent(location[0][0])
              }}
              onMouseLeave={() => {
                setTooltipContent('')
              }}
            >
              <Tooltip
                title={tooltipContent}
                arrow
                placement='top'
                sx={{ backgroundColor: '#fff' }}
              >
                <g
                  fill='#52525b'
                  stroke='#b695ff'
                  fillOpacity={1}
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='bevel'
                  pointerEvents='auto'
                  cursor='pointer'
                  transform='translate(-17, -22)'
                >
                  <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
                </g>
              </Tooltip>
            </Marker>
          </>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  )
}

export default memo(PodsLocation)
