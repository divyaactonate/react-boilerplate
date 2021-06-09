import { storiesOf } from '@storybook/react';
import { Tooltip } from './index';

storiesOf('@beautify/core/Overlays/Tooltip', module).add('default', () => (
  <div className='container mx-auto'>
    <div className='text-center'>
      <p className='text-2xl mt-4 text-teall-600'>Lets explore different ways to open Tooltip</p>
      <div className='text-center'>
        <div className='flex mt-20 justify-center mb-5 items-start'>
          <Tooltip placement='top-start' text={' your tooltip content here'}>
            <button className='px-4 py-2 border bg-purple-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              top-start
            </button>
          </Tooltip>
          <br />
          <Tooltip
            placement='top-center'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                top-center
              </div>
            }
          >
            <button className='px-4 py-2 border bg-purple-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              top-center
            </button>
          </Tooltip>
          <br />
          <Tooltip
            placement='top-end'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                top-end
              </div>
            }
          >
            <button className='px-4 py-2 border bg-purple-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              top-end
            </button>
          </Tooltip>
          <br />
        </div>
        <div className='flex justify-center items-start'>
          <div className='text-center space-y-3 mb-5  items-center'>
            <Tooltip
              placement='left-start'
              text={
                <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                  left-start
                </div>
              }
            >
              <button className='px-4 py-2 border bg-red-600 rounded-lg border-black-200 ext-md text-white ml-3'>
                left-start
              </button>
            </Tooltip>
            <br />
            <Tooltip
              placement='left-center'
              text={
                <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                  left-center
                </div>
              }
            >
              <button className='px-4 py-2 border bg-red-600 rounded-lg border-black-200 ext-md text-white ml-3'>
                left-center
              </button>
            </Tooltip>
            <br />
            <Tooltip
              placement='left-end'
              text={
                <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                  left-end
                </div>
              }
            >
              <button className='px-4 py-2 border bg-red-600 rounded-lg border-black-200 ext-md text-white ml-3'>
                left-end
              </button>
            </Tooltip>
            <br />
          </div>
          <div className='text-center space-y-3 mb-5  items-centre'>
            <Tooltip
              placement='right-start'
              text={
                <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                  right-start
                </div>
              }
            >
              <button className='px-4 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'>
                right-start
              </button>
            </Tooltip>
            <br />
            <Tooltip
              placement='right-center'
              text={
                <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                  right-center
                </div>
              }
            >
              <button className='px-4 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'>
                right-center
              </button>
            </Tooltip>
            <br />
            <Tooltip
              placement='right-end'
              text={
                <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                  right-end
                </div>
              }
            >
              <button className='px-4 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'>
                right-end
              </button>
            </Tooltip>
            <br />
          </div>
        </div>
        <div className='flex mb-12 justify-center  items-start'>
          <Tooltip
            placement='bottom-start'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                bottom-start
              </div>
            }
          >
            <button className='px-4 py-2 border bg-blue-500 rounded-lg border-black-200 ext-md text-white ml-3'>
              bottom-start
            </button>
          </Tooltip>
          <br />
          <Tooltip
            placement='bottom-center'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                bottom-center
              </div>
            }
          >
            <button className='px-4 py-2 border bg-blue-500 rounded-lg border-black-200 ext-md text-white ml-3'>
              bottom-center
            </button>
          </Tooltip>
          <br />
          <Tooltip
            placement='bottom-end'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                bottom-end
              </div>
            }
          >
            <button className='px-4 py-2 border bg-blue-500 rounded-lg border-black-200 ext-md text-white ml-3'>
              bottom-end
            </button>
          </Tooltip>
          <br />
        </div>
        <div className='flex mb-12  justify-center items-start'>
          <Tooltip
            placement='left-center'
            bgColor='#718096'
            borderColor='#718096'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                custom-color
              </div>
            }
          >
            <button className='px-4 py-2 border bg-gray-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              custom-color
            </button>
          </Tooltip>
          <br />
          <Tooltip
            placement='bottom-center'
            bgColor='#805AD5'
            triggerOffset={30}
            borderColor='#805AD5'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
                bottom-center far away
              </div>
            }
          >
            <button className='px-4 py-2 border bg-purple-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              bottom-center far away
            </button>
          </Tooltip>
          <br />
          <Tooltip
            placement='right-center'
            bgColor='#FED7E2'
            triggerOffset={30}
            borderColor='#FED7E2'
            text={
              <div className='flex justify-center items-center text-white w-auto rounded-lg p-3 bg-pink-600  text-sm shadow-sm'>
                <span>
                  Custom and <b>bold</b>
                  <button
                    className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                    // onClick={() => toast.dismiss(t.id)}
                  >
                    Dismiss
                  </button>
                </span>
              </div>
            }
          >
            <button className='px-4 py-2 border bg-blue-500 rounded-lg border-black-200 ext-md text-white ml-3'>
              Custom Style
            </button>
          </Tooltip>
          <br />
        </div>
      </div>
    </div>
  </div>
));
