import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu o erro</strong>
          <p> Não foi possivel fazer login</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu o erro</strong>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu o erro</strong>
          <p> Não foi possivel fazer login</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;