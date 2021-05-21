/**
 *
 * Spinner
 *
 */

import { FC } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import CircleLoader from 'react-spinners/CircleLoader';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import ClockLoader from 'react-spinners/ClockLoader';
import DotLoader from 'react-spinners/DotLoader';
import FadeLoader from 'react-spinners/FadeLoader';
import GridLoader from 'react-spinners/GridLoader';
import HashLoader from 'react-spinners/HashLoader';
import MoonLoader from 'react-spinners/MoonLoader';
import PacmanLoader from 'react-spinners/PacmanLoader';
import PropagateLoader from 'react-spinners/PropagateLoader';
import PuffLoader from 'react-spinners/PuffLoader';
import PulseLoader from 'react-spinners/PulseLoader';
import RingLoader from 'react-spinners/RingLoader';
import RiseLoader from 'react-spinners/RiseLoader';
import RotateLoader from 'react-spinners/RotateLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SkewLoader from 'react-spinners/SkewLoader';
import SquareLoader from 'react-spinners/SquareLoader';
import SyncLoader from 'react-spinners/SyncLoader';

const Spinner: FC = () => {
  const color = '#9F7AEA';
  return (
    <>
      <div className='text-center'>
        <h1 className='text-4xl text-yellow-600'>React Spinners</h1>
      </div>
      <div className='mt-20'>
        <div className='flex items-center justify-around py-4 border border-gray-300'>
          <BarLoader color={color} />
          <BeatLoader color={color} />
          <BounceLoader color={color} />
          <CircleLoader color={color} />
        </div>
        <div className='flex items-center mt-3 justify-around py-4 border border-gray-300'>
          <ClimbingBoxLoader color={color} />
          <ClipLoader color={color} />
          <ClockLoader color={color} />
          <DotLoader color={color} />
        </div>
        <div className='flex items-center mt-3 justify-around py-4 border border-gray-300'>
          <FadeLoader color={color} />
          <GridLoader color={color} />
          <HashLoader color={color} />
          <MoonLoader color={color} />
        </div>
        <div className='flex items-center mt-3 justify-around py-4 border border-gray-300'>
          <PacmanLoader color={color} />
          <PuffLoader color={color} />
          <PulseLoader color={color} />
          <PropagateLoader color={color} />
        </div>
        <div className='flex items-center mt-3 justify-around py-4 border border-gray-300'>
          <RingLoader color={color} />
          <RiseLoader color={color} />
          <RotateLoader color={color} />
          <ScaleLoader color={color} />
        </div>
        <div className='flex items-center mt-3 justify-around py-4 border border-gray-300'>
          <SkewLoader color={color} />
          <SquareLoader color={color} />
          <SyncLoader color={color} />
        </div>
      </div>
    </>
  );
};

export default Spinner;
