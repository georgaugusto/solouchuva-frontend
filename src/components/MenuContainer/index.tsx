import React from 'react';

import { Link } from 'react-router-dom';

import { FiHome, FiLogOut, FiGrid } from 'react-icons/fi';

import { SectionZero } from './styles';

interface WeatherBoxrops {
  buttonLogOut: any;
}

const MenuContainer: React.FC<WeatherBoxrops> = ({ buttonLogOut }) => {
  return (
    <SectionZero>
      <div>
        <button type="button">
          <Link to="/">
            <FiHome />
          </Link>
        </button>
        <button type="button">
          <Link to="/weatherstation">
            <FiGrid />
          </Link>
        </button>
      </div>
      <div>
        <button type="button" onClick={buttonLogOut}>
          <FiLogOut />
        </button>
      </div>
    </SectionZero>
  );
};

export default MenuContainer;
