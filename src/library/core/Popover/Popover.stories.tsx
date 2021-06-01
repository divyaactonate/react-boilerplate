import { storiesOf } from '@storybook/react';
import { Popover } from './index';

storiesOf('@beautify/core/Popover', module).add('default', () => (
  <div className='text-center'>
    <p className='text-2xl mt-4 text-teall-600'>Lets explore different ways to open Popover</p>
    <div className='text-center'>
      <div className='flex mt-10 mb-5 justify-center items-start'>
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='top-start'
        >
          <button className='px-4 py-2 border bg-green-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            top-start
          </button>
        </Popover>
        <br />
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='top-center'
        >
          <button className='px-4 py-2 border bg-green-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            top-center
          </button>
        </Popover>
        <br />
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='top-end'
        >
          <button className='px-4 py-2 border bg-green-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            top-end
          </button>
        </Popover>
        <br />
      </div>
      <div className='flex justify-center items-start'>
        <div className='text-center space-y-0 justify-center items-start'>
          <Popover
            content={
              <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
                Custom and <b>bold</b>
                <button
                  className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                  // onClick={() => toast.dismiss(t.id)}
                >
                  Dismiss
                </button>
              </span>
            }
            placement='left-start'
          >
            <button className='px-4 py-2 border bg-red-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              left-start
            </button>
          </Popover>
          <br />
          <Popover
            content={
              <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
                Custom and <b>bold</b>
                <button
                  className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                  // onClick={() => toast.dismiss(t.id)}
                >
                  Dismiss
                </button>
              </span>
            }
            placement='left-center'
          >
            <button className='px-4 py-2 border bg-red-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              left-center
            </button>
          </Popover>
          <br />
          <Popover
            content={
              <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
                Custom and <b>bold</b>
                <button
                  className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                  // onClick={() => toast.dismiss(t.id)}
                >
                  Dismiss
                </button>
              </span>
            }
            placement='left-end'
          >
            <button className='px-4 py-2 border bg-red-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              left-end
            </button>
          </Popover>
          <br />
        </div>
        <div className='text-center space-y-0  justify-center items-start'>
          <Popover
            content={
              <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
                Custom and <b>bold</b>
                <button
                  className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                  // onClick={() => toast.dismiss(t.id)}
                >
                  Dismiss
                </button>
              </span>
            }
            placement='right-start'
          >
            <button className='px-4 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              right-start
            </button>
          </Popover>
          <br />
          <Popover
            content={
              <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
                Custom and <b>bold</b>
                <button
                  className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                  // onClick={() => toast.dismiss(t.id)}
                >
                  Dismiss
                </button>
              </span>
            }
            placement='right-center'
          >
            <button className='px-4 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              right-center
            </button>
          </Popover>
          <br />
          <Popover
            content={
              <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
                Custom and <b>bold</b>
                <button
                  className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                  // onClick={() => toast.dismiss(t.id)}
                >
                  Dismiss
                </button>
              </span>
            }
            placement='right-end'
          >
            <button className='px-4 py-2 border bg-indigo-600 rounded-lg border-black-200 ext-md text-white ml-3'>
              right-end
            </button>
          </Popover>
          <br />
        </div>
      </div>
      <div className='flex mb-16  justify-center items-start'>
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='bottom-start'
        >
          <button className='px-4 py-2 border bg-blue-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            bottom-start
          </button>
        </Popover>
        <br />
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='bottom-center'
        >
          <button className='px-4 py-2 border bg-blue-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            bottom-center
          </button>
        </Popover>
        <br />
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='bottom-end'
        >
          <button className='px-4 py-2 border bg-blue-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            bottom-end
          </button>
        </Popover>
        <br />
      </div>
      <div className='flex mb-5  justify-center items-start'>
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='left-center'
          bgColor='#cabe18'
          borderColor='#cabe18'
        >
          <button className='px-4 py-2 border bg-gray-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            custom-color
          </button>
        </Popover>
        <br />
        <Popover
          content={
            <span className='flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purple-500  text-sm shadow-sm '>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='bottom-center'
          bgColor='#805AD5'
          triggerOffset={30}
          borderColor='#805AD5'
        >
          <button className='px-4 py-2 border bg-purple-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            bottom-center far away
          </button>
        </Popover>
        <br />
        <Popover
          content={
            <span className='flex justify-center items-center text-white w-auto rounded-lg p-3 bg-pink-600  text-sm shadow-sm'>
              Custom and <b>bold</b>
              <button
                className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
                // onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </span>
          }
          placement='right-center'
          bgColor='#FED7E2'
          triggerOffset={30}
          borderColor='#FED7E2'
        >
          <button className='px-4 py-2 border bg-blue-600 rounded-lg border-black-200 ext-md text-white ml-3'>
            Custom Style
          </button>
        </Popover>
        <br />
      </div>
    </div>
  </div>
));
