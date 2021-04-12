import React from 'react';
import SpeakersRenderProps from './SpeakersRenderProps';
const SpeakerV2 = () => {
  return (
    <SpeakersRenderProps>
      {({ speakers }) => {
        return (
          <div>
            {speakers.map((speaker) => {
              const { imageSrc, name } = speaker;
              return (
                <img src={`images/${imageSrc}.png`} alt={name} key={name} />
              );
            })}
          </div>
        );
      }}
    </SpeakersRenderProps>
  );
};

export default SpeakerV2;
