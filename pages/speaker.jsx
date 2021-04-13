import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Menu from '../src/components/Menu/Menu';
import SpeakerV3 from '../src/components/Speaker/SpeakerV3';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';
import SpeakerContext from '../src/components/Speaker/SpeakerContext';

function Page() {
  const speakers = [
    {
      imageSrc: 'speaker-component-1124',
      name: 'Mr A',
    },
    {
      imageSrc: 'speaker-component-1530',
      name: 'Mr B',
    },
    {
      imageSrc: 'speaker-component-10803',
      name: 'Mr C',
    },
  ];
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContext.Provider value={speakers}>
        <SpeakerSearchBar />
        <SpeakerV3 />
      </SpeakerContext.Provider>
      <Footer />
    </div>
  );
}
export default Page;
