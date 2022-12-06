import React from 'react';
import styled from 'styled-components';

function Footer() {
  const codeUrl = 'https://github.com/Velthas/shopping-cart';

  return (
    <FooterWrapper>
      <p>
        {'Coded by Velthas (c) 2022'}
      </p>
      <a href={codeUrl}>
        <GithubIcon src={""} alt={'Github Icon'} />
      </a>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const GithubIcon = styled.img`
  height: 18px;
  transition: 0.15s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Footer;