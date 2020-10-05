import React, { useEffect, useState, useMemo } from 'react';
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
  WeatherStationHeader,
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
  timestamp: Date | number;
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

  const isOnline = useMemo(() => {
    if (currentWeatherStation !== undefined) {
      if (currentWeatherStation?.timestamp >= + new Date() - 100000 && currentWeatherStation?.timestamp <= + new Date() + 100000) {
        return true;
      }
      else {
        return false;
      }
    }
  }, [currentWeatherStation]);

  const formatTime = useMemo(() => {
    return Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(currentWeatherStation?.timestamp)
  }, [currentWeatherStation])

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
              {isOnline ?
                <span>
                  Bem-vindo ao aplicativo! A qualidade do ar é boa e fresca, você
                  pode sair hoje sem preocupações, mas não se esqueça do protetor
                  solar.
                </span> : 
                <span>
                  Bem-vindo ao aplicativo! No momento você não possui nenhuma estação meteorológica online.
              </span>
              }
              <div>
              {isOnline ?
              <>
                <FiCloud />
                <p>Tempo ensolarado com algumas nuvens</p>
              </> : 
              <></>}
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
              {isOnline ? 
              <Alert sensor={currentWeatherStation} /> && (
              <Alert sensor={currentWeatherStation} />
              ) : 
              <DiseaseAlertBox
                title="Por enquanto você não possui alertas!"
                description=""
                link=""
                color="low"
              />}
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
          <WeatherStationHeader>
            <strong>Protótipo 0</strong>
            {isOnline ? <p style={{color: "#718b7d"}}>Online</p> : <p style={{color: "#bf746d"}}>Offline</p>}
          </WeatherStationHeader>
          <WeatherStationContent>
            <GridContent>
              <WeatherBox
                data={isOnline ? currentWeatherStation?.dht22Temperature : 0}
                unity="°C"
                name="Temperatura"
                icon={FiThermometer}
                color="#bf746d"
              />
              <WeatherBox
                data={isOnline ? currentWeatherStation?.dht22Moisture : 0}
                unity="%"
                name="Umidade do Ar"
                icon={FiDroplet}
                color="#d19f89"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={isOnline ? currentWeatherStation?.thermalSensation : 0}
                unity="°C"
                name="Sensação Térmica"
                icon={FiThermometer}
                color="#7aa3ae"
              />
              <WeatherBox
                data={isOnline ? currentWeatherStation?.csmsv12Soil : 0}
                unity="%"
                name="Umidade do Solo"
                icon={FiDroplet}
                color="#8a8786"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={isOnline ? currentWeatherStation?.pluviometer : 0}
                unity="mm"
                name="Índice Pluviométrico"
                icon={FiCloudDrizzle}
                color="#859aa2"
              />
              <WeatherBox
                data={isOnline ? currentWeatherStation?.mhrdWetting : 0}
                unity="%"
                name="Molhamento Foliar"
                icon={FiFeather}
                color="#718b7d"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={isOnline ? currentWeatherStation?.bh1750Brightness : 0}
                unity="Lux"
                name="Luminosidade"
                icon={FiSun}
                color="#d7c27a"
              />
              <WeatherBox
                data={isOnline ? currentWeatherStation?.uvm30aIndexUv : 0}
                unity="Uv"
                name="Índice Ultravioleta"
                icon={FiSun}
                color="#a19583"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={isOnline ? currentWeatherStation?.bmp280Pressure : 0}
                unity="hpa"
                name="Pressão Atmosférica"
                icon={FiArrowDownCircle}
                color="#7fb2bb"
              />
              <WeatherBox
                data={isOnline ? currentWeatherStation?.anemometer : 0}
                unity="Km/h"
                name="Velocidade do Vento"
                icon={FiWind}
                color="#9f9394"
              />
            </GridContent>
            <GridContent>
              <WeatherBox
                data={isOnline ? currentWeatherStation?.bmp280Altitude : 0}
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
                  {isOnline ? formatTime : '00:00:00'}
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
