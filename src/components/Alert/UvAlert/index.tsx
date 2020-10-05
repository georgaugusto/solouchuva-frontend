import { format } from 'date-fns';
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

const UvAlert: React.FC<WeatherStation> = ({ sensor }) => {
  if (sensor !== undefined) {
    const formatTimestamp = format(sensor.timestamp, 'HH');
    if (formatTimestamp >= '06' && formatTimestamp <= '18') {
      return (
        <ContainerBox>
          {sensor.uvm30aIndexUv >= 0 && sensor.uvm30aIndexUv <= 2 && (
            <DiseaseAlertBox
              title="Índice Ultravioleta - Baixo (até 2)"
              description="Nenhum perigo para a maioria das pessoas, utilize óculos
            de Sol em dias claros, Recomenda-se o uso de proteção solar se você
            tiver a pele muito clara. Tempo para a pele começar a queimar: 60 minutos"
              link=""
              color="low"
            />
          )}
          {sensor.uvm30aIndexUv >= 3 && sensor.uvm30aIndexUv <= 5 && (
            <DiseaseAlertBox
              title="Índice Ultravioleta - Moderado (de 3 a 5)"
              description="Pequeno risco de queimadura se exposto ao Sol sem proteção.
            Atenção com as crianças. Utilize óculos de Sol e camisa UV,
            preferencialmente de manga longa. Tempo para a pele começar a
            queimar: 45 minutos"
              link=""
              color="warning"
            />
          )}
          {sensor.uvm30aIndexUv >= 6 && sensor.uvm30aIndexUv <= 7 && (
            <DiseaseAlertBox
              title="Índice Ultravioleta - Alto (de 6 a 7)"
              description="Alto risco de queimadura se exposto ao Sol sem proteção.
            Utilize óculos de Sol e camisa Extreme UV de manga longa. No rosto é
            recomendado o uso de protetor solar. Tempo para a pele começar a
            queimar: 30 minutos"
              link=""
              color="danger"
            />
          )}
          {sensor.uvm30aIndexUv >= 8 && sensor.uvm30aIndexUv <= 10 && (
            <DiseaseAlertBox
              title="Índice Ultravioleta - Muito Alto (de 8 a 10)"
              description="Altíssimo risco de queimadura se exposto ao Sol sem proteção.
            Utilize óculos de Sol e Extreme UV de manga longa. Não é recomendada
            a exposição ao Sol por muito tempo. Tempo para a pele começar a
            queimar: 15 à 25 minutos"
              link=""
              color="warning"
            />
          )}
          {sensor.uvm30aIndexUv >= 11 && (
            <DiseaseAlertBox
              title="Índice Ultravioleta - Extremo (acima de 11)"
              description="Risco extremo de queimadura. A exposição ao Sol sem
            proteção se torna extremamente perigosa. Tome todas as precauções
            incluindo utilizar óculos de Sol e camisa Extreme UV de manga longa.
            Evite o Sol principalmente perto do meio dia. Tempo para a pele
            começar a queimar: 10 minutos!"
              link=""
              color="warning"
            />
          )}
        </ContainerBox>
      );
    }
  }
  return <ContainerBox />;
};

export default UvAlert;
