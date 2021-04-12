function SpeakersRenderProps(props) {
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
  return props.childern({
    speakers,
  });
}

export default SpeakersRenderProps;
