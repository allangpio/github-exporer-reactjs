import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          name=""
          id=""
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/63213995?s=460&u=06c696b4fb4c2795ba97e524c580308cb7d591be&v=4"
            alt="Profile Pic"
          />
          <div>
            <strong>allangpio/pontesdaterra-API</strong>
            <p>
              Backend of the Ponte da Terra app to list and store local farmers
              information.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/63213995?s=460&u=06c696b4fb4c2795ba97e524c580308cb7d591be&v=4"
            alt="Profile Pic"
          />
          <div>
            <strong>allangpio/pontesdaterra-API</strong>
            <p>
              Backend of the Ponte da Terra app to list and store local farmers
              information.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/63213995?s=460&u=06c696b4fb4c2795ba97e524c580308cb7d591be&v=4"
            alt="Profile Pic"
          />
          <div>
            <strong>allangpio/pontesdaterra-API</strong>
            <p>
              Backend of the Ponte da Terra app to list and store local farmers
              information.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
