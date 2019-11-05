import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DafaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DafaultLayout.propTypes = { children: PropTypes.element.isRequired };
