import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { FiChevronDown, FiChevronUp, FiMinus } from 'react-icons/fi';
import { SensorData } from './styles';

import {
  Header,
  Content,
  HeaderContent,
  BodyContent,
  FootContent,
} from './styles';

interface WeatherBoxAvgProps extends InputHTMLAttributes<HTMLInputElement> {
  dataAvg?: number | undefined;
  dataMax: number | undefined;
  dateMax: Date | undefined;
  dataMin: number | undefined;
  dateMin: Date | undefined;
  name: string;
  unity: string;
  color: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const WeatherBoxAvg: React.FC<WeatherBoxAvgProps> = ({
  dataAvg,
  dataMax,
  dateMax,
  dataMin,
  dateMin,
  name,
  unity,
  color,
  icon: Icon,
}) => {
  return (
    <SensorData style={{ backgroundColor: color }}>
      <Header>
        <span>{name}</span>
        {Icon && <Icon size={25} />}
      </Header>
      <Content>
        <div>
          <HeaderContent>
            <div>
              <span>Max</span>
              <FiChevronUp />
            </div>
          </HeaderContent>
          <BodyContent>
            <span>
              {dataMax}
              {unity}
            </span>
          </BodyContent>
          <FootContent>
            <p>{dateMax}</p>
          </FootContent>
        </div>
        {dataAvg !== undefined && (
          <div>
            <HeaderContent>
              <div>
                <span>Média</span>
                <FiMinus />
              </div>
            </HeaderContent>
            <BodyContent>
              <span>
                {dataAvg}
                {unity}
              </span>
            </BodyContent>
          </div>
        )}
        <div>
          <HeaderContent>
            <div>
              <span>Min</span>
              <FiChevronDown />
            </div>
          </HeaderContent>
          <BodyContent>
            <span>
              {dataMin}
              {unity}
            </span>
          </BodyContent>
          <FootContent>
            <p>{dateMin}</p>
          </FootContent>
        </div>
      </Content>
    </SensorData>
  );
};

export default WeatherBoxAvg;
