import React from 'react';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';

const CurrentlySlicing = ({ slicemaster }) => (
  <div>
    <h2 className="center">
      <span className="mark tilt">Slicemasters On</span>
    </h2>
    <p>Standing by, ready to slice you up!</p>
    {!slicemaster && <LoadingGrid count={4} />}
    {slicemaster && !slicemaster?.length && <p>No one is working right now!</p>}
    {slicemaster?.length && <ItemGrid items={slicemaster} />}
  </div>
);
const HotSlices = ({ hotSlices }) => (
  <div>
    <h2 className="center">
      <span className="mark tilt">Hot Slices</span>
    </h2>
    <p>Come on by, buy the slice!</p>
    {!hotSlices && <LoadingGrid count={4} />}
    {hotSlices && !hotSlices?.length && <p>Nothin' in the case</p>}
    {hotSlices?.length && <ItemGrid items={hotSlices} />}
  </div>
);

const HomePage = () => {
  const { slicemaster, hotSlices } = useLatestData();
  return (
    <>
      <div className="center">
        <h2>The Best Pizza Downtown!</h2>
        <p>Open 11am to 11pm Every Single Day</p>
        <HomePageGrid>
          <CurrentlySlicing slicemaster={slicemaster} />
          <HotSlices hotSlices={hotSlices} />
        </HomePageGrid>
      </div>
    </>
  );
};

export default HomePage;
