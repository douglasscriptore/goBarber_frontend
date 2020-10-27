import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// como não precisa alterar nenuma proprieedade é só criar um type ao invés de interface
type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<Buttonprops> = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>{loading ? 'Carregando ...' : children}</Container>
  );
};

export default Button;
