import React from 'react';

import { NavLink } from 'react-router-dom';

import { padding } from 'polished';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink
          activeStyle={{
            borderBottom: 'solid',
            borderBottomColor: '#FF872C',
            paddingBottom: '5px',
          }}
          exact
          to="/"
        >
          Listagem
        </NavLink>
        <NavLink
          to="/import"
          activeStyle={{
            borderBottom: 'solid',
            borderBottomColor: '#FF872C',
            paddingBottom: '5px',
          }}
        >
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
