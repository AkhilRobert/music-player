import React from 'react';

interface IControls {
  handlePlayPause: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
  playing: boolean;
}

function Controls(props: IControls) {
  return (
    <div className={'p-2 d-flex'}>
      <i
        className={'bi bi-skip-backward btn'}
        style={{ fontSize: '40px' }}
        onClick={props.handlePrevious}
      />

      {props.playing ? (
        <i
          className={'bi bi-pause pointer-event btn '}
          style={{ fontSize: '40px' }}
          onClick={props.handlePlayPause}
        />
      ) : (
        <i
          className={'bi bi-play pointer-event btn '}
          style={{ fontSize: '40px' }}
          onClick={props.handlePlayPause}
        />
      )}
      <i
        className={'bi bi-skip-forward btn'}
        style={{ fontSize: '40px' }}
        onClick={props.handleNext}
      />
    </div>
  );
}

export default Controls;
