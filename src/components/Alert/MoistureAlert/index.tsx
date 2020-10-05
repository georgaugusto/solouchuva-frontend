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

const MoistureAlert: React.FC<WeatherStation> = ({ sensor }) => {
  if (sensor !== undefined) {
    return (
      <ContainerBox>
        {sensor.dht22Moisture > 30 && sensor.dht22Moisture <= 40 && (
          <DiseaseAlertBox
            title="Umidade do ar abaixo de 40% - Estado de Observação"
            description="Consumir muita água"
            link=""
            color="warning"
          />
        )}
        {sensor.dht22Moisture > 20 && sensor.dht22Moisture <= 30 && (
          <DiseaseAlertBox
            title="Umidade do ar abaixo de 30% - Estado de Atenção"
            description="Consumir muita água, evitar atividades fisicas
          ao ar livre entre as 11h-15h, Abrigar-se em locais
          protegidos do sol, procure ambientes umidificados."
            link=""
            color="danger"
          />
        )}
        {sensor.dht22Moisture > 12 && sensor.dht22Moisture <= 20 && (
          <DiseaseAlertBox
            title="Umidade do ar abaixo de 20% - Estado de Atenção"
            description="Consumir muita água, evitar atividades fisicas
          ao ar livre entre as 10h-16h, Abrigar-se em locais
          protegidos do sol, procure ambientes umidificados e molhe a
          boca e narinas com água, várias vezes durante o dia."
            link=""
            color="danger"
          />
        )}
        {sensor.dht22Moisture <= 12 && (
          <DiseaseAlertBox
            title="Umidade do ar abaixo de 12% - Estado de Atenção"
            description="Consumir muita água, interromper qualquer atividades fisicas
            ao ar livre, Abrigar-se em locais protegidos do sol, procure ambientes
            umidificados e molhe a boca e narinas com água, várias vezes durante o dia."
            link=""
            color="danger"
          />
        )}
      </ContainerBox>
    );
  }
  return <ContainerBox />;
};

export default MoistureAlert;
