import { FC, useState } from 'react';
import Layout from '@layouts/index';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { InformationCircleIcon, XIcon } from '@heroicons/react/solid';

// fake data generator
const getItems = (count: any) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// const grid = 8;

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // padding: grid * 2,
  // margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging && 'lightgray',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  // display: 'flex',
  // padding: grid,
  overflow: 'auto',
});

const Tabs: FC = () => {
  return (
    <Layout>
      <div className='bg-gray-700 mx-auto'>
        <Tab />
        <br />
        <div className='flex flex-row space-x-1'>
          <div className='h-12 w-52 pt-3 pl-4 pr-3 flex justify-between items-center rounded-t-full bg-white'>
            <div className='flex flex-row truncate space-x-1'>
              <InformationCircleIcon className='w-14' />
              <span className='truncate text-black'>
                Hello this is a long text and i will enot visible
              </span>
            </div>
            <XIcon className='w-10 p-1 rounded-full hover:bg-gray-100' />
          </div>
          <div className='h-12 w-52 float-left  rounded-t-full bg-gray-300'></div>
        </div>
      </div>
    </Layout>
  );
};

export default Tabs;

export const Tab = () => {
  const [items, setitems]: [any[], any] = useState(getItems(6));

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(items, result.source.index, result.destination.index);

    setitems([...newItems]);
  };
  return (
    <DragDropContext tw='w-44' onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided: any, snapshot: any) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            className='cursor-default flex pt-12 space-x-2'
            {...provided.droppableProps}
          >
            {items.map((item: any, index: any) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided: any, snapshot: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='cursor-default h-12 w-52 pt-3 pl-4 pr-3 border-r border-black flex justify-between items-center rounded-t-lg bg-white'
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    <div className='flex flex-row truncate space-x-1'>
                      <InformationCircleIcon className='w-14' />
                      <span className='truncate text-black'>
                        Hello this is a long text and i will enot visible
                      </span>
                    </div>
                    <XIcon className='w-10 p-1 rounded-full hover:bg-gray-100' />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
            <div className='h-12 w-52 pt-3 pl-4 pr-3 flex justify-between items-center rounded-t-full bg-white'>
              <div className='flex flex-row truncate space-x-1'>
                <span className='truncate text-black'>Will not change</span>
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
