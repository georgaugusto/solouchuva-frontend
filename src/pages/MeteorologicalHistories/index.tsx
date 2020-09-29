import React, { useState, useCallback, useEffect, useMemo } from 'react';
import 'react-day-picker/lib/style.css';
import { isToday, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DayPicker, { DayModifiers } from 'react-day-picker';

import {
  FiWind,
  FiSun,
  FiThermometer,
  FiDroplet,
  FiFeather,
  FiCloudDrizzle,
  FiArrowDownCircle,
} from 'react-icons/fi';

import WeatherBoxAvg from '../../components/WeatherBoxAvg';
import HeaderContainer from '../../components/HeaderContainer';
import MenuContainer from '../../components/MenuContainer';

import {
  Container,
  Header,
  Content,
  SectionOne,
  WeatherStationContentHeader,
  WeatherStationContent,
  GridContent,
  Calendar,
} from './styles';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface WeatherStationItemAvg {
  anemometerAvg: number;
  bh1750BrightnessAvg: number;
  bmp280AltitudeAvg: number;
  bmp280PressureAvg: number;
  csmsv12SoilAvg: number;
  dht22TemperatureAvg: number;
  dht22MoistureAvg: number;
  mhrdWettingAvg: number;
  thermalSensationAvg: number;
  uvm30aIndexUvAvg: number;
}

interface WeatherStationItemMax {
  anemometerMax: number;
  anemometerMaxTimestamp: Date;
  bh1750BrightnessMax: number;
  bh1750BrightnessMaxTimestamp: Date;
  bmp280PressureMax: number;
  bmp280PressureMaxTimestamp: Date;
  csmsv12SoilMax: number;
  csmsv12SoilMaxTimestamp: Date;
  dht22TemperatureMax: number;
  dht22TemperatureMaxTimestamp: Date;
  dht22MoistureMax: number;
  dht22MoistureMaxTimestamp: Date;
  mhrdWettingMax: number;
  mhrdWettingMaxTimestamp: Date;
  pluviometerMax: number;
  pluviometerMaxTimestamp: Date;
  thermalSensationMax: number;
  thermalSensationMaxTimestamp: Date;
  uvm30aIndexUvMax: number;
  uvm30aIndexUvMaxTimestamp: Date;
}

interface WeatherStationItemMin {
  anemometerMin: number;
  anemometerMinTimestamp: Date;
  bh1750BrightnessMin: number;
  bh1750BrightnessMinTimestamp: Date;
  bmp280PressureMin: number;
  bmp280PressureMinTimestamp: Date;
  csmsv12SoilMin: number;
  csmsv12SoilMinTimestamp: Date;
  dht22TemperatureMin: number;
  dht22TemperatureMinTimestamp: Date;
  dht22MoistureMin: number;
  dht22MoistureMinTimestamp: Date;
  mhrdWettingMin: number;
  mhrdWettingMinTimestamp: Date;
  pluviometerMin: number;
  pluviometerMinTimestamp: Date;
  thermalSensationMin: number;
  thermalSensationMinTimestamp: Date;
  uvm30aIndexUvMin: number;
  uvm30aIndexUvMinTimestamp: Date;
}

const MeteorologicalHistories: React.FC = () => {
  const { user, signOut } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [currentWeatherStationMax, setWeatherStationMax] = useState<
    WeatherStationItemMax
  >();

  const [currentWeatherStationMin, setWeatherStationMin] = useState<
    WeatherStationItemMin
  >();

  const [currentWeatherStationAvg, setWeatherStationAvg] = useState<
    WeatherStationItemAvg
  >();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const selectedDateFromAvg = useMemo(() => {
    return format(selectedDate, 'yyyy-MM-dd', { locale: ptBR });
  }, [selectedDate]);

  useEffect(() => {
    api
      .get(`/weatherstation/avg`, {
        params: {
          date: selectedDateFromAvg,
        },
      })
      .then((response) => {
        setWeatherStationAvg(response.data);
      });
  }, [selectedDateFromAvg]);

  useEffect(() => {
    api
      .get(`/weatherstation/max`, {
        params: {
          date: selectedDateFromAvg,
        },
      })
      .then((response) => {
        setWeatherStationMax(response.data);
      });
  }, [selectedDateFromAvg]);

  useEffect(() => {
    api
      .get(`/weatherstation/min`, {
        params: {
          date: selectedDateFromAvg,
        },
      })
      .then((response) => {
        setWeatherStationMin(response.data);
      });
  }, [selectedDateFromAvg]);

  const beforeAfterModifier = {
    after: new Date(),
    before: new Date(2020, 8, 12),
  };

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", { locale: ptBR });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

  return (
    <Container>
      <Header>
        <HeaderContainer name={user.name} avatar={user.avatar_url} />
      </Header>

      <Content>
        <MenuContainer buttonLogOut={signOut} />

        <SectionOne>
          <WeatherStationContentHeader>
            <div>
              <h1>Históricos Meteorológicos</h1>
              <h1>Protótipo 0</h1>
            </div>
            <p>
              {isToday(selectedDate) && <span>Hoje</span>}
              <span>{selectedDateAsText}</span>
              <span>{`${selectedWeekDay}`}</span>
            </p>
          </WeatherStationContentHeader>
          <WeatherStationContent>
            <GridContent>
              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.dht22TemperatureMax}
                dataMin={currentWeatherStationMin?.dht22TemperatureMin}
                unity="°C"
                name="Temperatura"
                dateMax={currentWeatherStationMax?.dht22TemperatureMaxTimestamp}
                dateMin={currentWeatherStationMin?.dht22TemperatureMinTimestamp}
                dataAvg={currentWeatherStationAvg?.dht22TemperatureAvg}
                icon={FiThermometer}
                color="#bf746d"
              />
              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.dht22MoistureMax}
                dataMin={currentWeatherStationMin?.dht22MoistureMin}
                unity="%"
                name="Umidade do Ar"
                dateMax={currentWeatherStationMax?.dht22MoistureMaxTimestamp}
                dateMin={currentWeatherStationMin?.dht22MoistureMinTimestamp}
                dataAvg={currentWeatherStationAvg?.dht22MoistureAvg}
                icon={FiDroplet}
                color="#d19f89"
              />
              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.thermalSensationMax}
                dataMin={currentWeatherStationMin?.thermalSensationMin}
                unity="°C"
                name="Sensação Térmica"
                dateMax={currentWeatherStationMax?.thermalSensationMaxTimestamp}
                dateMin={currentWeatherStationMin?.thermalSensationMinTimestamp}
                dataAvg={currentWeatherStationAvg?.thermalSensationAvg}
                icon={FiThermometer}
                color="#7aa3ae"
              />

              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.csmsv12SoilMax}
                dataMin={currentWeatherStationMin?.csmsv12SoilMin}
                unity="%"
                name="Umidade do Solo"
                dateMax={currentWeatherStationMax?.csmsv12SoilMaxTimestamp}
                dateMin={currentWeatherStationMin?.csmsv12SoilMinTimestamp}
                dataAvg={currentWeatherStationAvg?.csmsv12SoilAvg}
                icon={FiDroplet}
                color="#8a8786"
              />
            </GridContent>
            <GridContent>
              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.pluviometerMax}
                dataMin={currentWeatherStationMin?.pluviometerMin}
                unity="mm"
                name="Índice Pluviométrico"
                dateMax={currentWeatherStationMax?.pluviometerMaxTimestamp}
                dateMin={currentWeatherStationMin?.pluviometerMinTimestamp}
                dataAvg={undefined}
                icon={FiCloudDrizzle}
                color="#859aa2"
              />
              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.mhrdWettingMax}
                dataMin={currentWeatherStationMin?.mhrdWettingMin}
                unity="%"
                name="Molhamento Foliar"
                dateMax={currentWeatherStationMax?.mhrdWettingMaxTimestamp}
                dateMin={currentWeatherStationMin?.mhrdWettingMinTimestamp}
                dataAvg={currentWeatherStationAvg?.mhrdWettingAvg}
                icon={FiFeather}
                color="#718b7d"
              />

              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.bh1750BrightnessMax}
                dataMin={currentWeatherStationMin?.bh1750BrightnessMin}
                unity="Lux"
                name="Luminosidade"
                dateMax={currentWeatherStationMax?.bh1750BrightnessMaxTimestamp}
                dateMin={currentWeatherStationMin?.bh1750BrightnessMinTimestamp}
                dataAvg={currentWeatherStationAvg?.bh1750BrightnessAvg}
                icon={FiSun}
                color="#d7c27a"
              />

              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.uvm30aIndexUvMax}
                dataMin={currentWeatherStationMin?.uvm30aIndexUvMin}
                unity="Uv"
                name="Índice Ultravioleta"
                dateMax={currentWeatherStationMax?.uvm30aIndexUvMaxTimestamp}
                dateMin={currentWeatherStationMin?.uvm30aIndexUvMinTimestamp}
                dataAvg={currentWeatherStationAvg?.uvm30aIndexUvAvg}
                icon={FiSun}
                color="#a19583"
              />
            </GridContent>
            <GridContent>
              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.bmp280PressureMax}
                dataMin={currentWeatherStationMin?.bmp280PressureMin}
                unity="hpa"
                name="Pressão Atmosférica"
                dateMax={currentWeatherStationMax?.bmp280PressureMaxTimestamp}
                dateMin={currentWeatherStationMin?.bmp280PressureMinTimestamp}
                dataAvg={currentWeatherStationAvg?.bmp280PressureAvg}
                icon={FiArrowDownCircle}
                color="#7fb2bb"
              />

              <WeatherBoxAvg
                dataMax={currentWeatherStationMax?.anemometerMax}
                dataMin={currentWeatherStationMin?.anemometerMin}
                unity="Km/h"
                name="Velocidade do Vento"
                dateMax={currentWeatherStationMax?.anemometerMaxTimestamp}
                dateMin={currentWeatherStationMin?.anemometerMinTimestamp}
                dataAvg={currentWeatherStationAvg?.anemometerAvg}
                icon={FiWind}
                color="#9f9394"
              />
            </GridContent>
          </WeatherStationContent>
        </SectionOne>

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            toMonth={new Date()}
            disabledDays={beforeAfterModifier}
            modifiers={{
              available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default MeteorologicalHistories;
