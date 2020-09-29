import React, { useEffect, useState } from 'react';
import 'react-day-picker/lib/style.css';

import {
  FiWind,
  FiSun,
  FiThermometer,
  FiDroplet,
  FiFeather,
  FiCloudDrizzle,
  FiArrowDownCircle,
  FiTrendingUp,
  FiCloud,
} from 'react-icons/fi';

import WeatherBox from '../../components/WeatherBox';
import DiseaseAlertBox from '../../components/DiseaseAlertBox';
import HeaderContainer from '../../components/HeaderContainer';
import MenuContainer from '../../components/MenuContainer';
import Alert from '../../components/Alert';

import {
  Container,
  Header,
  Content,
  SectionOne,
  WeatherInformation,
  WeatherAlerts,
  SectionTwo,
  WeatherStationContent,
  GridContent,
  LastWeatherReading,
} from './styles';

import weatherInformationImg from '../../assets/weatherInformationImg.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

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
  timestamp: Date;
}

const WeatherStationDashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const [currentWeatherStation, setWeatherStation] = useState<
    WeatherStationItem
  >();

  useEffect(() => {
    api.get(`/weatherstation`).then((response) => {
      setWeatherStation(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContainer name={user.name} avatar={user.avatar_url} />
      </Header>

      <Content>
        <MenuContainer buttonLogOut={signOut} />

        <SectionOne>
          <WeatherInformation>
            <div>
              <strong>Olá, {user.name.split(' ')[0]}!</strong>
              <span>
                Bem-vindo ao aplicativo! A qualidade do ar é boa e fresca, você
                pode sair hoje sem preocupações, mas não se esqueça do protetor
                solar.
              </span>
              <div>
                <FiCloud />
                <p>Tempo ensolarado com algumas nuvens</p>
              </div>
            </div>
            <img src={weatherInformationImg} alt="Woman watering plant" />
          </WeatherInformation>

          <WeatherAlerts>
            <div>
              <strong>Alertas Gerais</strong>
              {/* <strong>Soja</strong> */}
            </div>
            <div>
              <strong>Alertas pessoais!</strong>
              {<Alert sensor={currentWeatherStation} /> && (
                <Alert sensor={currentWeatherStation} />
              )}
              <strong>Alertas de culturas!</strong>
              <DiseaseAlertBox
                title="Por enquanto você não possui alertas!"
                description=""
                link=""
                color="low"
              />
              {/* <DiseaseAlertBox
                title="Ferrugem asiatica!"
                description="Temperaturas e período mínimo de molhamento foliar estão
                favorecendo o desenvolvimento da ferrugem, sende este período
                de molhamento foliar superior a 6 horas e temperaturas entre
                20° - 25°C."
                link="Saiba mais"
                color="danger"
              />
              <DiseaseAlertBox
                title="Mancha parda!"
                description="A infecção e o desenvolvimento da doença são favorecidos por
                  condições quentes e úmidas iguais as ocorridas recentimente.
                  Sendo essas um período mínimo de molhamento de 6 horas e
                  temperaturas entre 15 ° C e 30 ° C para desenvolver sintomas."
                link="Saiba mais"
                color="warning"
              /> */}
            </div>
          </WeatherAlerts>
        </SectionOne>

        <SectionTwo>
          <strong>Estação Meteorológica</strong>
          <WeatherStationContent>
            <GridContent>
              <WeatherBox
                data={currentWeatherStation?.dht22Temperature}
                unity="°C"
                name="Temperatura"
                icon={FiThermometer}
                color="#bf746d"
              />
              <WeatherBox
                data={currentWeatherStation?.dht22Moisture}
                unity="%"
                name="Umidade do Ar"
                icon={FiDroplet}
                color="#d19f89"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={currentWeatherStation?.thermalSensation}
                unity="°C"
                name="Sensação Térmica"
                icon={FiThermometer}
                color="#7aa3ae"
              />
              <WeatherBox
                data={currentWeatherStation?.csmsv12Soil}
                unity="%"
                name="Umidade do Solo"
                icon={FiDroplet}
                color="#8a8786"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={currentWeatherStation?.pluviometer}
                unity="mm"
                name="Índice Pluviométrico"
                icon={FiCloudDrizzle}
                color="#859aa2"
              />
              <WeatherBox
                data={currentWeatherStation?.mhrdWetting}
                unity="%"
                name="Molhamento Foliar"
                icon={FiFeather}
                color="#718b7d"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={currentWeatherStation?.bh1750Brightness}
                unity="Lux"
                name="Luminosidade"
                icon={FiSun}
                color="#d7c27a"
              />
              <WeatherBox
                data={currentWeatherStation?.uvm30aIndexUv}
                unity="Uv"
                name="Índice Ultravioleta"
                icon={FiSun}
                color="#a19583"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={currentWeatherStation?.bmp280Pressure}
                unity="hpa"
                name="Pressão Atmosférica"
                icon={FiArrowDownCircle}
                color="#7fb2bb"
              />
              <WeatherBox
                data={currentWeatherStation?.anemometer}
                unity="Km/h"
                name="Velocidade do Vento"
                icon={FiWind}
                color="#9f9394"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={currentWeatherStation?.bmp280Altitude}
                unity="m"
                name="Altitude"
                icon={FiTrendingUp}
                color="#947c95"
              />
            </GridContent>
            <LastWeatherReading>
              <div>
                <strong>Última Leitura</strong>
                <p>
                  {Intl.DateTimeFormat('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  }).format(currentWeatherStation?.timestamp)}
                </p>
              </div>
            </LastWeatherReading>
          </WeatherStationContent>
        </SectionTwo>
      </Content>
    </Container>
  );
};

export default WeatherStationDashboard;
