import React from 'react';

import DiseaseAlertBox from '../../DiseaseAlertBox';

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

const TemperatureAlert: React.FC<WeatherStation> = ({ sensor }) => {
  if (sensor !== undefined) {
    return (
      <ContainerBox>
        {sensor.thermalSensation > 54 && (
          <DiseaseAlertBox
            title="Sensação térmica superior à 54°C - Perigo Extremo"
            description="Hipertermia e câimbras de calor iminentes"
            link=""
            color="danger"
          />
        )}
        {sensor.thermalSensation > 41 && sensor.thermalSensation <= 54 && (
          <DiseaseAlertBox
            title="Sensação térmica superior à 41°C - Perigo"
            description="Hipertermia e câimbras de calor prováveis"
            link=""
            color="danger"
          />
        )}
        {sensor.thermalSensation > 32 && sensor.thermalSensation <= 41 && (
          <DiseaseAlertBox
            title="Sensação térmica superior à 32°C - Muita Atenção"
            description="Hipertermia e câimbras de calor possíveis"
            link=""
            color="danger"
          />
        )}
        {sensor.thermalSensation > 27 && sensor.thermalSensation <= 32 && (
          <DiseaseAlertBox
            title="Sensação térmica superior à 27°C - Atenção"
            description="Possibilidade de fadiga após exposição e atividade prolongadas"
            link=""
            color="warning"
          />
        )}
      </ContainerBox>
    );
  }
  return <ContainerBox />;
};

export default TemperatureAlert;
