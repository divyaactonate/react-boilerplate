/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-named-as-default */
/**
 *
 * Button
 *
 */
import { Button } from '@library/core';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArchiveIcon, AnnotationIcon } from '@heroicons/react/solid';

const BaseButton: FC = () => {
  const [state, setstate] = useState(false);
  return (
    <div>
      <div className='m-8 items-center flex space-x-5'>
        <Button
          color={state ? 'red' : 'blue'}
          radius={state ? 'md' : 'xl'}
          onClick={() => [setstate((e) => !e)]}
        >
          Button
        </Button>
        <Button color='green' onClick={() => ({})}>
          Button
        </Button>
        <Button color='red' onClick={() => ({})}>
          Button
        </Button>
        <Button color='yellow' onClick={() => ({})}>
          Button
        </Button>
        <Button color='pink' onClick={() => ({})}>
          Button
        </Button>
      </div>
      <div className='m-8 items-center flex space-x-5'>
        <Button radius='xs' onClick={() => ({})}>
          Button
        </Button>
        <Button radius='sm' onClick={() => ({})}>
          Button
        </Button>
        <Button radius='md' onClick={() => ({})}>
          Button
        </Button>
        <Button radius='lg' onClick={() => ({})}>
          Button
        </Button>
        <Button radius='xl' onClick={() => ({})}>
          Button
        </Button>
      </div>
      <div className='m-8 items-center flex space-x-5'>
        <Button size='xs' onClick={() => ({})}>
          Button
        </Button>
        <Button size='sm' onClick={() => ({})}>
          Button
        </Button>
        <Button size='md' onClick={() => ({})}>
          Button
        </Button>
        <Button size='lg' onClick={() => ({})}>
          Button
        </Button>
        <Button size='xl' onClick={() => ({})}>
          Button
        </Button>
        {/* <Button disabled className='bg-purple-600  text-white' onClick={() => ({})}>
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
        </Button> */}
      </div>
      <div className='m-8 flex space-x-5'>
        <Button variant='filled' onClick={() => ({})}>
          Button
        </Button>
        <Button variant='light' onClick={() => ({})}>
          Button
        </Button>
        <Button variant='outline' onClick={() => ({})}>
          Button
        </Button>
        <Button variant='link' onClick={() => ({})}>
          Button
        </Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button disabled variant='filled' onClick={() => ({})}>
          Button
        </Button>
        <Button disabled variant='light' onClick={() => ({})}>
          Button
        </Button>
        <Button disabled variant='outline' onClick={() => ({})}>
          Button
        </Button>
        <Button disabled variant='link' onClick={() => ({})}>
          Button
        </Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button component='button' onClick={() => ({})}>
          Simple Button
        </Button>
        <Button component='a' href='https://actonate.com/' target='_blank'>
          link
        </Button>
        <Button<typeof Link, HTMLAnchorElement> component={Link} to='/'>
          Router
        </Button>
        <Button fullWidth>fullWidth</Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button leftIcon={<ArchiveIcon className='w-6' />} component='button' onClick={() => ({})}>
          Simple Button
        </Button>
        <Button
          rightIcon={<AnnotationIcon className='w-6' />}
          component='button'
          onClick={() => ({})}
        >
          Simple Button
        </Button>
        <Button
          leftIcon={<ArchiveIcon className='w-6' />}
          rightIcon={<AnnotationIcon className='w-6' />}
          component='button'
          onClick={() => ({})}
        >
          Simple Button
        </Button>
        <Button
          className='bg-yellow-200 hover:bg-yellow-300 w-full text-xl py-8 text-red-500'
          variant='filled'
          onClick={() => ({})}
        >
          Customized with Classname
        </Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button transform='normal-case'>normal-case</Button>
        <Button transform='capitalize'>capitalize</Button>
        <Button transform='lowercase'>lowercase</Button>
        <Button transform='uppercase'>uppercase</Button>
      </div>
    </div>
  );
};

export default BaseButton;
