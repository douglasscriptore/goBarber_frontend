import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// como não precisa alterar nenuma proprieedade é só criar um type ao invés de interface
type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Buttonprops> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
