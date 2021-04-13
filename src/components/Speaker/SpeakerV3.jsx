import React, { useContext } from 'react';
import SpeakerContext from './SpeakerContext';

function SpeakerV3() {
  const speakers = useContext(SpeakerContext);
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return <img src={`/images/${imageSrc}.png`} alt={name} key={name} />;
      })}
    </div>
  );
}

export default SpeakerV3;
