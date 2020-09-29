import React from 'react';

import { DiseaseData } from './styles';

interface WeatherBoxProps {
  title: string;
  description: string;
  link: string;
  color: 'low' | 'danger' | 'warning';
}

const DiseaseAlertBox: React.FC<WeatherBoxProps> = ({
  color,
  title,
  description,
  link,
}) => {
  return (
    <DiseaseData type={color}>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
        <span>{link}</span>
      </div>
    </DiseaseData>
  );
};

export default DiseaseAlertBox;
