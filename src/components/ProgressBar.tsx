import React from 'react';

interface IProgressBar {
  time: string;
  percentage: string;
}

function ProgressBar(props: IProgressBar) {
  return (
    <div
      className={
        'w-50 d-flex align-items-center justify-content-center text-center'
      }
    >
      <div className="progress" style={{ width: '100%' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: props.percentage }}
        />
      </div>
      <p className={'d-inline m-0'} style={{ width: '70px' }}>
        {props.time || '0:00'}
      </p>
    </div>
  );
}

export default ProgressBar;
