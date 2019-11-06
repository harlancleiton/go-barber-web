import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '~/components/Header';

export default function DafaultLayout({ children }) {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
}

DafaultLayout.propTypes = { children: PropTypes.element.isRequired };
