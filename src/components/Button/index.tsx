/**
 *
 * Button
 *
 */
import { Button } from '@library/core';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArchiveIcon, AnnotationIcon } from '@heroicons/react/solid';
import { Logger } from '@utils/logger';

const BaseButton: FC = () => {
  const [state, setstate] = useState(false);
  return (
    <div>
      <div className='m-8 items-center flex space-x-5'>
        <Button
          color={state ? 'red' : 'blue'}
          radius={state ? 'md' : 'xl'}
          onClick={() => [
            setstate((e) => !e),
            Logger.info('info'),
            Logger.error('error'),
            Logger.debug('debug'),
            Logger.trace('trace'),
            Logger.warn('warn'),
          ]}
        >
          Button
        </Button>
        <Button color='green'>Button</Button>
        <Button color='red'>Button</Button>
        <Button color='yellow'>Button</Button>
        <Button color='pink'>Button</Button>
      </div>
      <div className='m-8 items-center flex space-x-5'>
        <Button radius='xs'>Button</Button>
        <Button radius='sm'>Button</Button>
        <Button radius='md'>Button</Button>
        <Button radius='lg'>Button</Button>
        <Button radius='xl'>Button</Button>
      </div>
      <div className='m-8 items-center flex space-x-5'>
        <Button size='xs'>Button</Button>
        <Button size='sm'>Button</Button>
        <Button size='md'>Button</Button>
        <Button size='lg'>Button</Button>
        <Button size='xl'>Button</Button>
        {/* <Button disabled className='bg-purple-600  text-white' >
          Button
        </Button>
        <Button
          leftIcon={<ExclamationIcon className='w-7' />}
          className='bg-purple-600  text-white'
          
        >
          Button
        </Button>
        <Button
          rightIcon={<ExclamationIcon className='w-7' />}
          className='bg-purple-600  text-white'
          
        >
          Button
        </Button>
        <Button
          leftIcon={<ExclamationIcon className='w-7' />}
          rightIcon={<ExclamationIcon className='w-7' />}
          className='bg-purple-600  text-white'
          
        >
          Button
        </Button> */}
      </div>
      <div className='m-8 flex space-x-5'>
        <Button variant='filled'>Button</Button>
        <Button variant='light'>Button</Button>
        <Button variant='outline'>Button</Button>
        <Button variant='link'>Button</Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button disabled variant='filled'>
          Button
        </Button>
        <Button disabled variant='light'>
          Button
        </Button>
        <Button disabled variant='outline'>
          Button
        </Button>
        <Button disabled variant='link'>
          Button
        </Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button component='button'>Simple Button</Button>
        <Button component='a' href='https://actonate.com/' target='_blank'>
          link
        </Button>
        <Button component={Link} to='/'>
          Router
        </Button>
        <Button fullWidth>fullWidth</Button>
      </div>
      <div className='m-8 flex space-x-5'>
        <Button leftIcon={<ArchiveIcon className='w-6' />} component='button'>
          Simple Button
        </Button>
        <Button rightIcon={<AnnotationIcon className='w-6' />} component='button'>
          Simple Button
        </Button>
        <Button
          leftIcon={<ArchiveIcon className='w-6' />}
          rightIcon={<AnnotationIcon className='w-6' />}
          component='button'
        >
          Simple Button
        </Button>
        <Button
          className='bg-yellow-200 hover:bg-yellow-300 w-full text-xl py-8 text-red-500'
          variant='filled'
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
