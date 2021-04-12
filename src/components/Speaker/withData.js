// Creating a high orderr component (high order function) that takes a component and returns a component with data
/* function withData(maxSpeakerToShow) {
  return function (Component) {
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
    return function () {
      const limistSpeakers = speakers.slice(0, maxSpeakerToShow);
      return <Component speakers={limistSpeakers}></Component>;
    };
  };
} */

// Shortned Version of above code, Lambda variation with arrow functions

const withData = (maxSpeakerToShow) => (Component) => {
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
  return () => {
    const limistSpeakers = speakers.slice(0, maxSpeakerToShow);
    return <Component speakers={limistSpeakers}></Component>;
  };
};
export default withData;
