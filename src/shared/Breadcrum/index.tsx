/**
 *
 * Breadcrum
 *
 */

import { FC } from 'react';

export interface BreadcrumProps {
  /** Adds parent screen route in breadcrum  */
  parent?: any;

  /** Title of breadcrum  */
  title?: string;

  /** link for the given title of breadcrum to navigate  */
  titleLink?: string;

  /** Add home icon at the starting of breadcrum  */
  showHome?: boolean;

  /** Add style provided by component  */
  className?: string;
}

const Breadcrum: FC<BreadcrumProps> = ({
  parent = [],
  title = '',
  titleLink = '',
  showHome = false,
  className = '',
}: BreadcrumProps) => {
  return (
    <div data-testid='Breadcrum' className={`${className ? className : ''}`}>
      <ul className='flex text-gray-500 text-sm lg:text-base'>
        {showHome && (
          <li className='inline-flex items-center'>
            <a href='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='rgba(156, 163, 175, 1)'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </a>

            {(title || parent.length > 0) && (
              <svg className='h-5 w-auto text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            )}
          </li>
        )}

        {parent &&
          parent.length > 0 &&
          parent.map((list?: any, index?: number) => {
            return (
              <li className='inline-flex items-center' key={index}>
                <a href={list.link}>{list.title}</a>
                {(!(parent.length - 1 === index) || title) && (
                  <svg className='h-5 w-auto text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                )}
              </li>
            );
          })}

        {title && (
          <li className='inline-flex items-center'>
            <a href={titleLink}>{title}</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrum;
