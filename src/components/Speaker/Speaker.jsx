import React, { Component } from 'react';
import withData from './withData';

function Speakers({ speakers }) {
  return (
    <div>
      {speakers.map((speaker) => {
        const { imageSrc, name } = speaker;
        return <img src={`images/${imageSrc}.png`} alt={name} key={name} />;
      })}
    </div>
  );
}
const maxSpeakersToShow = 2;
export default withData(maxSpeakersToShow)(Speakers);
