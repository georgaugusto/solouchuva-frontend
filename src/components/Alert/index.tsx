import React from 'react';

import MoistureAlert from './MoistureAlert';
import TemperatureAlert from './TemperatureAlert';
import UvAlert from './UvAlert';

import { ContainerBox } from './styles';

interface WeatherStationItem {
  anemometer: number;
  bh1750Brightness: number;
  bmp280Altitude: number;
  bmp280Pressure: number;
  csmsv12Soil: number;
  dht22Temperature: number;
  dht22Moisture: number;
  mhrdWetting: number;
  pluviometer: number;
  thermalSensation: number;
  uvm30aIndexUv: number;
  timestamp: Date | number;
}

interface WeatherStation {
  sensor: WeatherStationItem | undefined;
}

const Alert: React.FC<WeatherStation> = ({ sensor }) => {
  return (
    <ContainerBox>
      <MoistureAlert sensor={sensor} />
      <TemperatureAlert sensor={sensor} />
      <UvAlert sensor={sensor} />
    </ContainerBox>
  );
};

export default Alert;
