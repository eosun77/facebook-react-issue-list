import React from 'react';
import { AdWrapper } from './style';

function Ad() {
  return (
    <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
      <AdWrapper>
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="ad"
        />
      </AdWrapper>
    </a>
  );
}

export default Ad;
