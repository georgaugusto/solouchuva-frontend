import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { SensorData } from './styles';

interface WeatherBoxrops extends InputHTMLAttributes<HTMLInputElement> {
  data: number | undefined;
  name: string;
  unity: string;
  color: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const WeatherBox: React.FC<WeatherBoxrops> = ({
  data,
  name,
  unity,
  color,
  icon: Icon,
}) => {
  return (
    <SensorData style={{ backgroundColor: color }}>
      <div>
        {Icon && <Icon size={25} />}
        <span>
          {data}
          {unity}
        </span>
      </div>
      <span>{name}</span>
    </SensorData>
  );
};

export default WeatherBox;
