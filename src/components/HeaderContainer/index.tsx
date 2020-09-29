import React from 'react';

import { FiChevronDown, FiSettings, FiBell } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { HeaderContent, Profile } from './styles';

// import logoImg from '../../assets/logo.svg';

interface WeatherBoxrops {
  name: string;
  avatar: string;
}

const HeaderContainer: React.FC<WeatherBoxrops> = ({ name }) => {
  return (
    <HeaderContent>
      {/* <img src={logoImg} alt="SolouChuva" /> */}
      <strong>Sol ou Chuva</strong>

      <Profile>
        <Link to="/profile">
          <button type="button">
            <FiSettings />
          </button>
        </Link>
        <button type="button">
          <FiBell />
        </button>
        <img
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt={name}
        />
        <div>
          <strong>{name}</strong>
        </div>
      </Profile>

      <button type="button">
        <FiChevronDown />
      </button>
    </HeaderContent>
  );
};

export default HeaderContainer;
