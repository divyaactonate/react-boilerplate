import { ArrowCircleDownIcon } from '@heroicons/react/solid';
import { storiesOf } from '@storybook/react';
import { ContextMenu } from './index';
import 'react-contexify/dist/ReactContexify.css';

storiesOf('@beautify/core/Disclosure/ContextMenu', module)
  .add('default', () => {
    const arr = [
      { label: 'item1', key: '1' },
      { label: 'item2', key: '2' },
      { label: 'item3', key: '3' },
      { label: 'item4', key: '4' },
      { label: 'item5', key: '5' },
      { label: 'item6', key: '6' },
      { label: 'item7', key: '7' },
    ];
    const handleClick = (data: any, item: any, index: number) => {
      console.log(data, item, index);
    };

    return (
      <ContextMenu menuItems={arr} handleClick={handleClick}>
        {(displayMenu: any) => (
          <div
            className='absolute top-1/3  left-1/3 p-2 w-44 bg-gray-400'
            onContextMenu={displayMenu}
          >
            Right click inside the box
          </div>
        )}
      </ContextMenu>
    );
  })
  .add('onDoubleClick', () => {
    const arr = [
      { label: 'item1', key: '1' },
      { label: 'item2', key: '2' },
      { label: 'item3', key: '3' },
      { label: 'item4', key: '4' },
      { label: 'item5', key: '5' },
      { label: 'item6', key: '6' },
      { label: 'item7', key: '7' },
    ];
    const handleClick = (data: any, item: any, index: number) => {
      console.log(data, item, index);
    };

    return (
      <ContextMenu menuItems={arr} handleClick={handleClick}>
        {(displayMenu: any) => (
          <div
            className='absolute top-1/3  left-1/3 p-2 w-44 bg-gray-400'
            onDoubleClick={displayMenu}
          >
            Right click inside the box
          </div>
        )}
      </ContextMenu>
    );
  })
  .add('Medium size', () => {
    const arr = [
      { label: 'item1', key: '1' },
      { label: 'item2', key: '2' },
      { label: 'item3', key: '3' },
      { label: 'item4', key: '4' },
      { label: 'item5', key: '5' },
      { label: 'item6', key: '6' },
      { label: 'item7', key: '7' },
    ];
    const handleClick = (data: any, item: any, index: number) => {
      console.log(data, item, index);
    };

    return (
      <ContextMenu size='md' menuItems={arr} handleClick={handleClick}>
        {(displayMenu: any) => (
          <div
            className='absolute top-1/3  left-1/3 p-2 w-44 bg-gray-400'
            onContextMenu={displayMenu}
          >
            Right click inside the box
          </div>
        )}
      </ContextMenu>
    );
  })
  .add('Disabled', () => {
    const arr = [
      { label: 'item1', key: '1' },
      { label: 'item3', key: '3' },
      { label: 'item4', key: '4', disabled: true },
      { label: 'item7', key: '7' },
    ];
    const handleClick = (data: any, item: any, index: number) => {
      console.log(data, item, index);
    };

    return (
      <ContextMenu menuItems={arr} handleClick={handleClick}>
        {(displayMenu: any) => (
          <div
            className='absolute top-1/3  left-1/3 p-2 w-44 bg-gray-400'
            onContextMenu={displayMenu}
          >
            Right click inside the box
          </div>
        )}
      </ContextMenu>
    );
  })
  .add('Childrens', () => {
    const arr = [
      { label: 'item1', key: '1' },
      { label: 'item2', key: '2' },
      {
        label: 'item3',
        key: '3',
        children: [
          { label: 'item3.1', key: '3.1' },
          {
            label: 'item3.2',
            key: '3.2',
            children: [
              { label: 'item3.2.1', key: '3.2.1' },
              { label: 'item3.2.2', key: '3.2.2' },
            ],
          },
        ],
      },
      { label: 'item4', key: '4', disabled: true },
      { label: 'item5', key: '5' },
      { label: 'item6', key: '6' },
      { label: 'item7', key: '7' },
    ];
    const handleClick = (data: any, item: any, index: number) => {
      console.log(data, item, index);
    };

    return (
      <ContextMenu menuItems={arr} handleClick={handleClick}>
        {(displayMenu: any) => (
          <div
            className='absolute top-1/3  left-1/3 p-2 w-44 bg-gray-400'
            onContextMenu={displayMenu}
          >
            Right click inside the box
          </div>
        )}
      </ContextMenu>
    );
  })
  .add('Variants', () => {
    const arr = [
      { label: 'item1', key: '1', icon: <ArrowCircleDownIcon />, iconClass: 'w-7' },
      { label: 'Custom wrapper Class', key: '2', wrapperClass: 'bg-red-200' },
      { label: 'II am a very long text , lets check this out', key: '2.8' },
      { label: 'Custom text class', labelClass: 'font-bold text-xs text-red-500', key: '2.9' },
      {
        label: 'item3',
        key: '3',
        children: [
          { label: 'item3.1', key: '3.1' },
          {
            label: 'item3.2',
            key: '3.2',
            children: [
              { label: 'item3.2.1', key: '3.2.1' },
              { label: 'item3.2.2', key: '3.2.2' },
            ],
          },
        ],
      },
      { label: 'item4', key: '4', disabled: true },
      { label: 'item5', key: '5' },
      { label: 'item6', key: '6' },
      { label: 'item7', key: '7' },
    ];
    const handleClick = (data: any, item: any, index: number) => {
      console.log(data, item, index);
    };

    return (
      <ContextMenu menuItems={arr} handleClick={handleClick}>
        {(displayMenu: any) => (
          <div
            className='absolute top-1/3  left-1/3 p-2 w-44 bg-gray-400'
            onContextMenu={displayMenu}
          >
            Right click inside the box
          </div>
        )}
      </ContextMenu>
    );
  });
