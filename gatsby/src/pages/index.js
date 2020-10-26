import React from 'react';
import useLatestData from '../utils/useLatestData';

const CurrentlySlicing = () => (
  <div>
    <p>CurrentlySlicing</p>
  </div>
);

const HotSlices = () => (
  <div>
    <p>HotSlices</p>
  </div>
);

const HomePage = () => {
  const { slicemaster, hotSlices } = useLatestData();
  return (
    <>
      <div className="center">
        <h2>The Best Pizza Downtown!</h2>
        <p>Open 11am to 11pm Every Single Day</p>
        <div>
          <CurrentlySlicing slicemaster={slicemaster} />
          <HotSlices hotSlicesr={hotSlices} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
