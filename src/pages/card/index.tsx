import {
  ChatIcon,
  DotsVerticalIcon,
  EyeIcon,
  InformationCircleIcon,
  TagIcon,
} from '@heroicons/react/outline';
import { FolderIcon, HeartIcon, OfficeBuildingIcon } from '@heroicons/react/solid';
import Layout from '@layouts/index';
// import { ReportCard as Card } from '@library/core/ReportCard';
import { FC } from 'react';
import { useHover } from 'react-laag';
import { FolderCard, Badge, Checkbox } from '@library/core';

const Cards: FC = () => {
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });

  return (
    <Layout>
      {/* <div className='container mx-auto'>
        <div className='p-10'>
          <div className=' w-full lg:max-w-full lg:flex'>
            <div
              className='h-48 lg:h-auto lg:w-48 flex-none bg-gray-700 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
              style={{ backgroundImage: `url('/public/assets/img/tdms/loginScreen.png')` }}
              title='Mountain'
            ></div>
            <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
              <div className='mb-8'>
                <p className='text-sm text-gray-600 flex items-center'>
                  <svg
                    className='fill-current text-gray-500 w-3 h-3 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
                  </svg>
                  Members only
                </p>
                <div className='text-gray-900 font-bold text-xl mb-2'>
                  Best Mountain Trails 2020
                </div>
                <p className='text-gray-700 text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                  nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className='flex items-center'>
                <img
                  className='w-10 h-10 rounded-full mr-4'
                  src='/public/assets/img/lgo.png'
                  alt='Avatar of Writer'
                />
                <div className='text-sm'>
                  <p className='text-gray-900 leading-none'>John Smith</p>
                  <p className='text-gray-600'>Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className='flex my-8 ml-10 items-center space-x-8'>
        <div className='flex items-center justify-center max-w-lg'>
          <div className='w-full h-full'>
            <div className='flex flex-col h-44 lg:flex-row rounded-lg overflow-hidden border-2 border-gray-200 shadow'>
              <div className='w-40 block h-auto flex-none bg-cover border-r border-gray-200'>
                <img alt='' src='/public/assets/img/tdms/loginScreen.png' />
              </div>
              <div className='bg-white truncate rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                <div>
                  <h1 className='text-black truncate capitalize font-semibold text-xl mb-2 leading-tight'>
                    Brand analytics web and transactional
                  </h1>
                  <div className='text-gray-500 font-normal text-base mb-2 leading-tight'>
                    Last Updated : 1 month ago
                  </div>
                  <div className='flex items-center justify-between flex-row'>
                    <div className='flex items-center flex-row space-x-4'>
                      <OfficeBuildingIcon className='w-6 text-orange-600' />
                      <TagIcon className='w-6 text-gray-500' />
                      <Badge color='yellow' variant='filled' className='p-2'>
                        GOLD
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between flex-row'>
                  <div className='flex items-center flex-row space-x-4'>
                    <HeartIcon className='w-5 text-gray-500' /> 22
                    <EyeIcon className='w-5 text-gray-500' />
                    16
                    <ChatIcon className='w-5 text-gray-500' />
                    16
                  </div>
                  <div className='flex flex-row space-x-1 text-gray-500'>
                    <InformationCircleIcon className='w-5 text-gray-500' />
                    <DotsVerticalIcon className='w-5 text-gray-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center max-w-lg '>
          <div className='w-full h-full'>
            <div className='flex flex-col h-44 lg:flex-row rounded-lg overflow-hidden border-2 border-gray-200 shadow'>
              <div className='w-40 flex px-5 items-center justify-center bg-blue-900 border-r border-gray-200'>
                <span className='text-white break-words text-xl text-center capitalize'>
                  Brand analytics web and transactional
                </span>
              </div>
              <div className='bg-white p-4 truncate rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
                <div>
                  <h1 className='text-black truncate capitalize font-semibold text-xl mb-2 leading-tight'>
                    Brand analytics web and transactional
                  </h1>
                  <div className='text-gray-500 font-normal text-base mb-2 leading-tight'>
                    Last Updated : 1 month ago
                  </div>
                  <div className='flex items-center justify-between flex-row'>
                    <div className='flex items-center flex-row space-x-4'>
                      <OfficeBuildingIcon className='w-6 text-orange-600' />
                      <TagIcon className='w-6 text-gray-500' />
                      <Badge color='yellow' variant='filled' className='p-2'>
                        GOLD
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between flex-row'>
                  <div className='flex items-center flex-row space-x-4'>
                    <HeartIcon className='w-5 text-gray-500' /> 22
                    <EyeIcon className='w-5 text-gray-500' />
                    16
                    <ChatIcon className='w-5 text-gray-500' />
                    16
                  </div>
                  <div className='flex flex-row space-x-1 text-gray-500'>
                    <InformationCircleIcon className='w-5 text-gray-500' />
                    <DotsVerticalIcon className='w-5 text-gray-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=''>
        {/* <div className='ml-10 flex items-center justify-center max-w-sm'>
          <div className='w-full h-full'>
            <div
              style={{ minHeight: '9rem' }}
              className='flex flex-col h-full lg:flex-row rounded-lg overflow-hidden border-2 hover:border-blue-300 border-gray-200 shadow'
            >
              <div className='w-36 flex px-5 items-center justify-center bg-blue-900 border-r border-gray-200'>
                <span className='text-white break-words text-base text-center capitalize'>
                  Brand analytics web and transactional
                </span>
              </div>
              <div className='bg-white w-full p-4 truncate rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
                <div>
                  <h1 className='text-black truncate capitalize font-semibold text-base mb-2 leading-tight'>
                    Brand analytics web and transactional
                  </h1>
                  <div className='text-gray-500 font-normal text-xs mb-2 leading-tight'>
                    Last Updated : 1 month ago
                  </div>
                  <div className='flex items-center justify-between flex-row'>
                    <div className='flex items-center flex-row space-x-2'>
                      <OfficeBuildingIcon className='w-5 text-orange-600' />
                      <TagIcon className='w-5 text-gray-500' />
                      <Badge color='yellow' variant='filled' size='xs' className='p-2'>
                        GOLD
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between flex-row'>
                  <div className='flex items-center text-xs flex-row space-x-4'>
                    <HeartIcon className='w-4 text-gray-500' /> 22
                    <EyeIcon className='w-4 text-gray-500' />
                    16
                    <ChatIcon className='w-4 text-gray-500' />
                    16
                  </div>
                  <div className='flex flex-row space-x-1 text-gray-500'>
                    <InformationCircleIcon className='w-4 text-gray-500' />
                    <DotsVerticalIcon className='w-4 text-gray-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='ml-10 mt-10 flex items-center justify-center max-w-sm'>
          <div className='w-full h-full'>
            <div
              style={{ minHeight: '9rem' }}
              className='flex flex-col h-full lg:flex-row rounded-lg overflow-hidden border-2 hover:border-blue-300 border-gray-200 shadow'
            >
              <div className='w-28 flex px-4 items-center justify-center bg-blue-900 border-r border-gray-200'>
                <span className='text-white break-words text-sm text-center capitalize'>
                  Brand analytics web and transactional
                </span>
              </div>
              <div className='w-full bg-white p-4 truncate rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
                <div>
                  <h1 className='text-black truncate capitalize font-semibold text-base mb-2 leading-tight'>
                    Brand analytics web and transactional
                  </h1>
                  <div className='text-gray-500 font-normal text-xs mb-2 leading-tight'>
                    Last Updated : 1 month ago
                  </div>
                  <div className='flex items-center justify-between flex-row'>
                    <div className='flex items-center flex-row space-x-2'>
                      <OfficeBuildingIcon className='w-5 text-orange-600' />
                      <TagIcon className='w-5 text-gray-500' />
                      <Badge color='yellow' variant='filled' size='xs' className='p-2'>
                        GOLD
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between flex-row'>
                  <div className='flex items-center text-xs flex-row space-x-4'>
                    <HeartIcon className='w-4 text-gray-500' /> 22
                    <EyeIcon className='w-4 text-gray-500' />
                    16
                    <ChatIcon className='w-4 text-gray-500' />
                    16
                  </div>
                  <div className='flex flex-row space-x-1 text-gray-500'>
                    <InformationCircleIcon className='w-4 text-gray-500' />
                    <DotsVerticalIcon className='w-4 text-gray-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-10 mt-10 w-44'>
          <div {...hoverProps} className='w-full h-full'>
            <div className='flex flex-col space-y-1.5 justify-between px-3 py-2 rounded-md overflow-hidden border-2 hover:border-blue-300 border-gray-100'>
              <div className='flex space-x-3 items-center justify-between'>
                <div className='flex items-center truncate space-x-2'>
                  <FolderIcon className='w-24 text-blue-500' />
                  <h1 className='text-gray-700 truncate capitalize font-normal text-base leading-tight'>
                    Brand analytics web and transactional
                  </h1>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='text-gray-500 font-normal text-sm leading-tight'>(116)</div>
                  {isOver ? (
                    <Checkbox checked size='xs' />
                  ) : (
                    <div className='text-gray-500 w-5 font-normal text-sm leading-tight'></div>
                  )}
                </div>
              </div>

              <div className='flex items-center justify-between flex-row'>
                <div className='flex items-center text-xs flex-row space-x-4'>
                  <HeartIcon className='w-4 text-gray-500' />
                </div>
                <div className='flex flex-row space-x-1 text-gray-500'>
                  <TagIcon className='w-3.5 text-gray-500' />
                  <DotsVerticalIcon className='w-3.5 text-gray-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-10 mt-10 w-44'>
          <FolderCard />
        </div>
      </div>
    </Layout>
  );
};

export default Cards;
