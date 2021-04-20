import React from 'react';

interface IDetails {
  songName: string;
  artist: string;
  src: string;
}

function Details(props: IDetails) {
  return (
    <>
      <img src={props.src} alt={props.songName} className={'w-50'} />
      <h1>{props.songName}</h1>
      <p>{props.artist}</p>
    </>
  );
}

export default Details;
