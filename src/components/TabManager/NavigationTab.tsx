import React from 'react';
import { ReportCard as Card } from '@library/core/ReportCard';
import { FolderCard } from '@library/core';

class NavigationTab extends React.Component {
  render() {
    return (
      <div className='flex h-screen w-full flex-row'>
        <div className='w-3/4 h-ful'>
          <div className='p-4'>{'My Folders > Jan 2021'}</div>
          <div className='p-4 text-lg font-semibold'>{'Folders(3)'}</div>
          <div className='px-4 2xl:grid-cols-6 grid grid-flow-row lg:grid-cols-4 xl:grid-cols-4 gap-4'>
            <FolderCard checked />
            <FolderCard />
            <FolderCard />
            <FolderCard checked />
            <FolderCard />
            <FolderCard checked />
            <FolderCard />
            <FolderCard />
          </div>
          <div className='p-4 text-lg font-semibold'>{'Reports(5)'}</div>
          <div className='px-4 2xl:grid-cols-3 grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2 gap-4'>
            <Card image='k' />
            <Card checked image='k' />
            <Card image='k' />
            <Card checked image='' />
            <Card image='k' />
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationTab;
