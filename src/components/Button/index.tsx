/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-named-as-default */
/**
 *
 * Button
 *
 */
import { Button } from '@library/core';
import { FC } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';

const BaseButton: FC = (props) => {
  const {} = props;
  return (
    <div>
      <div className='m-8 flex space-x-5'>
        <Button size='sm' className={' bg-purple-600  text-white '} onClick={() => ({})}>
          Button
        </Button>
        <Button size='base' className={' bg-purple-600  text-white '} onClick={() => ({})}>
          Button
        </Button>
        <Button size='lg' className={' bg-purple-600  text-white '} onClick={() => ({})}>
          Button
        </Button>
        <Button disabled className='bg-purple-600  text-white' onClick={() => ({})}>
          Button
        </Button>
        <Button
          leftIcon={<ExclamationIcon className='w-7' />}
          className='bg-purple-600  text-white'
          onClick={() => ({})}
        >
          Button
        </Button>
        <Button
          rightIcon={<ExclamationIcon className='w-7' />}
          className='bg-purple-600  text-white'
          onClick={() => ({})}
        >
          Button
        </Button>
        <Button
          leftIcon={<ExclamationIcon className='w-7' />}
          rightIcon={<ExclamationIcon className='w-7' />}
          className='bg-purple-600  text-white'
          onClick={() => ({})}
        >
          Button
        </Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button className={' bg-red-600  text-white '} onClick={() => ({})}>
          Button
        </Button>
        <Button className={' bg-yellow-600  text-white '} onClick={() => ({})}>
          Button
        </Button>
        <Button className={' bg-blue-600  text-white '} onClick={() => ({})}>
          Button
        </Button>
        <Button className='bg-green-600  text-white' onClick={() => ({})}>
          Button
        </Button>
        <Button className='bg-pink-600  text-white' onClick={() => ({})}>
          Button
        </Button>
      </div>
    </div>
  );
};

export default BaseButton;
