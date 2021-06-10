import classNames from 'clsx';

export const UserIcon = ({ className }: any) => (
  <svg
    className={classNames('w-3 h-3', className)}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    />
  </svg>
);

export const PhoneIcon = ({ className }: any) => (
  <svg
    className={classNames('w-3 h-3', className)}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    />
  </svg>
);

export const Loading = ({ className }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
);

export const DeleteIcon = ({ className }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
    />
  </svg>
);

export const SearchIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.19999 1.4C2.65359 1.4 1.4 2.6536 1.4 4.2C1.4 5.7464 2.65359 7 4.19999 7C5.74638 7 6.99998 5.7464 6.99998 4.2C6.99998 2.6536 5.74638 1.4 4.19999 1.4ZM0 4.2C0 1.8804 1.8804 0 4.19999 0C6.51958 0 8.39997 1.8804 8.39997 4.2C8.39997 5.10708 8.11242 5.947 7.6235 6.63357L10.9949 10.005C11.2683 10.2784 11.2683 10.7216 10.9949 10.995C10.7216 11.2683 10.2784 11.2683 10.005 10.995L6.63355 7.62352C5.94698 8.11245 5.10707 8.4 4.19999 8.4C1.8804 8.4 0 6.5196 0 4.2Z'
      fill={iconColor ? iconColor : '#999999'}
    />
  </svg>
);

export const HomeIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 13 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1 6.5L2.22222 5.27778M2.22222 5.27778L6.5 1L10.7778 5.27778M2.22222 5.27778V11.3889C2.22222 11.7264 2.49583 12 2.83333 12H4.66667M10.7778 5.27778L12 6.5M10.7778 5.27778V11.3889C10.7778 11.7264 10.5042 12 10.1667 12H8.33333M4.66667 12C5.00417 12 5.27778 11.7264 5.27778 11.3889V8.94444C5.27778 8.60694 5.55138 8.33333 5.88889 8.33333H7.11111C7.44862 8.33333 7.72222 8.60694 7.72222 8.94444V11.3889C7.72222 11.7264 7.99583 12 8.33333 12M4.66667 12H8.33333'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const MyFolderIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 12 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.36127 1L4.72246 0.654249L4.5748 0.5H4.36127V1ZM5.48169 2.17044L5.1205 2.51619L5.26816 2.67044H5.48169V2.17044ZM8.34296 3.9261C8.34296 4.20225 8.56682 4.4261 8.84296 4.4261C9.1191 4.4261 9.34296 4.20225 9.34296 3.9261H8.34296ZM1.5 8.02265V2.17044H0.5V8.02265H1.5ZM2.12042 1.5H4.36127V0.5H2.12042V1.5ZM4.00008 1.34575L5.1205 2.51619L5.84288 1.82469L4.72246 0.654249L4.00008 1.34575ZM5.48169 2.67044H7.72254V1.67044H5.48169V2.67044ZM7.72254 2.67044C8.04483 2.67044 8.34296 2.9498 8.34296 3.34088H9.34296C9.34296 2.43913 8.63783 1.67044 7.72254 1.67044V2.67044ZM1.5 2.17044C1.5 1.77936 1.79813 1.5 2.12042 1.5V0.5C1.20513 0.5 0.5 1.26869 0.5 2.17044H1.5ZM0.5 8.02265C0.5 8.9244 1.20513 9.69309 2.12042 9.69309V8.69309C1.79813 8.69309 1.5 8.41373 1.5 8.02265H0.5ZM8.34296 3.34088V3.9261H9.34296V3.34088H8.34296ZM3.74085 5.09655C3.74085 4.70547 4.03897 4.4261 4.36127 4.4261V3.4261C3.44598 3.4261 2.74085 4.19479 2.74085 5.09655H3.74085ZM4.36127 4.4261H9.96338V3.4261H4.36127V4.4261ZM9.96338 4.4261C10.2857 4.4261 10.5838 4.70547 10.5838 5.09655H11.5838C11.5838 4.19479 10.8787 3.4261 9.96338 3.4261V4.4261ZM10.5838 5.09655V8.02265H11.5838V5.09655H10.5838ZM10.5838 8.02265C10.5838 8.41373 10.2857 8.69309 9.96338 8.69309V9.69309C10.8787 9.69309 11.5838 8.9244 11.5838 8.02265H10.5838ZM9.96338 8.69309H2.12042V9.69309H9.96338V8.69309ZM2.12042 9.69309C3.03571 9.69309 3.74085 8.9244 3.74085 8.02265H2.74085C2.74085 8.41373 2.44272 8.69309 2.12042 8.69309V9.69309ZM3.74085 8.02265V5.09655H2.74085V8.02265H3.74085Z'
      fill={iconColor ? iconColor : '#999999'}
    />
  </svg>
);

export const BIFolderIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 12 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.36127 1L4.72246 0.654249L4.5748 0.5H4.36127V1ZM5.48169 2.17044L5.1205 2.51619L5.26816 2.67044H5.48169V2.17044ZM8.34296 3.9261C8.34296 4.20225 8.56682 4.4261 8.84296 4.4261C9.1191 4.4261 9.34296 4.20225 9.34296 3.9261H8.34296ZM1.5 8.02265V2.17044H0.5V8.02265H1.5ZM2.12042 1.5H4.36127V0.5H2.12042V1.5ZM4.00008 1.34575L5.1205 2.51619L5.84288 1.82469L4.72246 0.654249L4.00008 1.34575ZM5.48169 2.67044H7.72254V1.67044H5.48169V2.67044ZM7.72254 2.67044C8.04483 2.67044 8.34296 2.9498 8.34296 3.34088H9.34296C9.34296 2.43913 8.63783 1.67044 7.72254 1.67044V2.67044ZM1.5 2.17044C1.5 1.77936 1.79813 1.5 2.12042 1.5V0.5C1.20513 0.5 0.5 1.26869 0.5 2.17044H1.5ZM0.5 8.02265C0.5 8.9244 1.20513 9.69309 2.12042 9.69309V8.69309C1.79813 8.69309 1.5 8.41373 1.5 8.02265H0.5ZM8.34296 3.34088V3.9261H9.34296V3.34088H8.34296ZM3.74085 5.09655C3.74085 4.70547 4.03897 4.4261 4.36127 4.4261V3.4261C3.44598 3.4261 2.74085 4.19479 2.74085 5.09655H3.74085ZM4.36127 4.4261H9.96338V3.4261H4.36127V4.4261ZM9.96338 4.4261C10.2857 4.4261 10.5838 4.70547 10.5838 5.09655H11.5838C11.5838 4.19479 10.8787 3.4261 9.96338 3.4261V4.4261ZM10.5838 5.09655V8.02265H11.5838V5.09655H10.5838ZM10.5838 8.02265C10.5838 8.41373 10.2857 8.69309 9.96338 8.69309V9.69309C10.8787 9.69309 11.5838 8.9244 11.5838 8.02265H10.5838ZM9.96338 8.69309H2.12042V9.69309H9.96338V8.69309ZM2.12042 9.69309C3.03571 9.69309 3.74085 8.9244 3.74085 8.02265H2.74085C2.74085 8.41373 2.44272 8.69309 2.12042 8.69309V9.69309ZM3.74085 8.02265V5.09655H2.74085V8.02265H3.74085Z'
      fill={iconColor ? iconColor : '#999999'}
    />
    <circle cx='7.5' cy='6.5' r='1.5' fill={iconColor ? iconColor : '#999999'} />
  </svg>
);

export const FavoriteIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 12 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.73837 1.75692C0.753877 2.76615 0.753877 4.40242 1.73837 5.41165L6.04193 9.82333L10.3454 5.41165C11.3299 4.40242 11.3299 2.76614 10.3454 1.75692C9.36094 0.747694 7.76476 0.747694 6.78027 1.75692L6.04193 2.51387L5.30353 1.75692C4.31904 0.747694 2.72286 0.747694 1.73837 1.75692Z'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const HubFolderIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5.66667 13H8.33333M11.6667 13V2.33333C11.6667 1.97971 11.5262 1.64057 11.2761 1.39052C11.0261 1.14048 10.687 1 10.3333 1H3.66667C3.31304 1 2.97391 1.14048 2.72386 1.39052C2.47381 1.64057 2.33333 1.97971 2.33333 2.33333V13H11.6667ZM11.6667 13H13H11.6667ZM11.6667 13H8.33333H11.6667ZM2.33333 13H1H2.33333ZM2.33333 13H5.66667H2.33333ZM5 3.66667H5.66667H5ZM5 6.33333H5.66667H5ZM8.33333 3.66667H9H8.33333ZM8.33333 6.33333H9H8.33333ZM5.66667 13V9.66667C5.66667 9.48986 5.7369 9.32029 5.86193 9.19526C5.98695 9.07024 6.15652 9 6.33333 9H7.66667C7.84348 9 8.01305 9.07024 8.13807 9.19526C8.2631 9.32029 8.33333 9.48986 8.33333 9.66667V13H5.66667Z'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const HistoryIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.0419 3.80106V6.0419L7.72254 7.72254M11.0838 6.0419C11.0838 8.82647 8.82647 11.0838 6.0419 11.0838C3.25734 11.0838 1 8.82647 1 6.0419C1 3.25734 3.25734 1 6.0419 1C8.82647 1 11.0838 3.25734 11.0838 6.0419Z'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const TagsIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-4 h-4', className)}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.79167 1L13.1667 7.375C13.3409 7.5698 13.4372 7.82198 13.4372 8.08333C13.4372 8.34468 13.3409 8.59687 13.1667 8.79167L8.91667 13.0417C8.72187 13.2159 8.46968 13.3122 8.20833 13.3122C7.94698 13.3122 7.6948 13.2159 7.5 13.0417L1.125 6.66667V3.83333C1.125 3.08189 1.42351 2.36122 1.95486 1.82986C2.48622 1.29851 3.20689 1 3.95833 1H6.79167Z'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.37492 6.66668C6.15732 6.66668 6.79159 6.03241 6.79159 5.25001C6.79159 4.46761 6.15732 3.83334 5.37492 3.83334C4.59252 3.83334 3.95825 4.46761 3.95825 5.25001C3.95825 6.03241 4.59252 6.66668 5.37492 6.66668Z'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const userImageIcon = ({ className, iconPath }: any) => (
  <svg
    className={classNames('w-7 h-7', className)}
    viewBox='0 0 25 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <circle
      cx='12.5'
      cy='12.7681'
      r='12.0537'
      fill='url(#pattern0)'
      stroke='#1978D2'
      strokeWidth='0.892612'
    />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0' transform='scale(0.005)' />
      </pattern>
      {/* <image id='image0' width={200} height={200} xlinkHref={iconPath} /> */}
      <image id='image0' width={260} height={200} xlinkHref={iconPath} />
    </defs>
  </svg>
);

export const BellIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-5 h-5', className)}
    viewBox='0 0 16 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.3892 13.5971H14.8522L13.5982 12.3431C13.2581 12.003 13.067 11.5417 13.067 11.0607V8.24147C13.067 5.90958 11.5767 3.92577 9.49656 3.19055V2.8858C9.49656 1.89984 8.69729 1.10057 7.71133 1.10057C6.72538 1.10057 5.92611 1.89984 5.92611 2.8858V3.19055C3.84598 3.92577 2.35566 5.90958 2.35566 8.24147V11.0607C2.35566 11.5417 2.16459 12.003 1.82449 12.3431L0.570435 13.5971H5.0335M10.3892 13.5971V14.4898C10.3892 15.9687 9.19026 17.1676 7.71133 17.1676C6.23241 17.1676 5.0335 15.9687 5.0335 14.4898V13.5971M10.3892 13.5971H5.0335'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const SettingIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-5 h-5', className)}
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.21591 1.69909C7.59652 0.13129 9.82622 0.131291 10.2068 1.69909C10.4527 2.71186 11.613 3.19249 12.503 2.6502C13.8808 1.81073 15.4574 3.38737 14.6179 4.7651C14.0756 5.6551 14.5563 6.81542 15.569 7.06129C17.1368 7.4419 17.1368 9.6716 15.569 10.0522C14.5563 10.2981 14.0756 11.4584 14.6179 12.3484C15.4574 13.7261 13.8808 15.3028 12.503 14.4633C11.613 13.921 10.4527 14.4016 10.2068 15.4144C9.82622 16.9822 7.59652 16.9822 7.21591 15.4144C6.97004 14.4016 5.80971 13.921 4.91972 14.4633C3.54199 15.3028 1.96535 13.7261 2.80482 12.3484C3.3471 11.4584 2.86648 10.2981 1.8537 10.0522C0.285908 9.6716 0.285907 7.4419 1.8537 7.06129C2.86648 6.81542 3.3471 5.6551 2.80482 4.7651C1.96535 3.38737 3.54198 1.81073 4.91972 2.6502C5.80971 3.19248 6.97004 2.71186 7.21591 1.69909Z'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.3892 8.55675C11.3892 10.0357 10.1903 11.2346 8.71137 11.2346C7.23244 11.2346 6.03353 10.0357 6.03353 8.55675C6.03353 7.07782 7.23244 5.87891 8.71137 5.87891C10.1903 5.87891 11.3892 7.07782 11.3892 8.55675Z'
      stroke='#999999'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const QuestionIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames('w-5 h-5', className)}
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5.34413 6.0335C5.83428 4.99344 7.15682 4.24828 8.71142 4.24828C10.6833 4.24828 12.2819 5.44718 12.2819 6.92611C12.2819 8.17527 11.1414 9.22466 9.59887 9.52058C9.11472 9.61346 8.71142 10.0036 8.71142 10.4966M8.71137 13.1744H8.72029M16.7449 8.71134C16.7449 13.1481 13.1482 16.7449 8.71137 16.7449C4.27458 16.7449 0.677856 13.1481 0.677856 8.71134C0.677856 4.27455 4.27458 0.677826 8.71137 0.677826C13.1482 0.677826 16.7449 4.27455 16.7449 8.71134Z'
      stroke={iconColor ? iconColor : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const TreeDownIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames(className)}
    height={12}
    width={9}
    viewBox='0 0 6 3'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M0 -2.62268e-07L6 0L3 3L0 -2.62268e-07Z' fill={iconColor ? iconColor : '#999999'} />
  </svg>
);

export const TreeRightIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames(className)}
    height={12}
    width={6}
    viewBox='0 0 4 6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M0.5 6L0.5 0L3.5 3L0.5 6Z' fill={iconColor ? iconColor : '#999999'} />
  </svg>
);

export const TreeFolderIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames(className)}
    style={{ height: 12, width: 14 }}
    viewBox='0 0 14 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5.10256 1L5.54341 0.577996L5.36319 0.38973H5.10256V1ZM6.47009 2.42857L6.02924 2.85058L6.20946 3.03884H6.47009V2.42857ZM9.96238 4.57143C9.96238 4.90847 10.2356 5.1817 10.5727 5.1817C10.9097 5.1817 11.1829 4.90847 11.1829 4.57143H9.96238ZM1.61027 9.57143V2.42857H0.38973V9.57143H1.61027ZM2.36752 1.61027H5.10256V0.38973H2.36752V1.61027ZM4.66172 1.422L6.02924 2.85058L6.91093 2.00657L5.54341 0.577996L4.66172 1.422ZM6.47009 3.03884H9.20513V1.8183H6.47009V3.03884ZM9.20513 3.03884C9.5985 3.03884 9.96238 3.37981 9.96238 3.85714H11.1829C11.1829 2.75652 10.3223 1.8183 9.20513 1.8183V3.03884ZM1.61027 2.42857C1.61027 1.95124 1.97415 1.61027 2.36752 1.61027V0.38973C1.25037 0.38973 0.38973 1.32794 0.38973 2.42857H1.61027ZM0.38973 9.57143C0.38973 10.6721 1.25037 11.6103 2.36752 11.6103V10.3897C1.97415 10.3897 1.61027 10.0488 1.61027 9.57143H0.38973ZM9.96238 3.85714V4.57143H11.1829V3.85714H9.96238ZM4.34531 6C4.34531 5.52267 4.70919 5.1817 5.10256 5.1817V3.96116C3.98542 3.96116 3.12477 4.89937 3.12477 6H4.34531ZM5.10256 5.1817H11.9402V3.96116H5.10256V5.1817ZM11.9402 5.1817C12.3335 5.1817 12.6974 5.52267 12.6974 6H13.918C13.918 4.89937 13.0573 3.96116 11.9402 3.96116V5.1817ZM12.6974 6V9.57143H13.918V6H12.6974ZM12.6974 9.57143C12.6974 10.0488 12.3335 10.3897 11.9402 10.3897V11.6103C13.0573 11.6103 13.918 10.6721 13.918 9.57143H12.6974ZM11.9402 10.3897H2.36752V11.6103H11.9402V10.3897ZM2.36752 11.6103C3.48467 11.6103 4.34531 10.6721 4.34531 9.57143H3.12477C3.12477 10.0488 2.76089 10.3897 2.36752 10.3897V11.6103ZM4.34531 9.57143V6H3.12477V9.57143H4.34531Z'
      fill={iconColor ? iconColor : '#999999'}
    />
  </svg>
);

export const TreeFilledFolderIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames(className)}
    style={{ height: 12, width: 14 }}
    viewBox='0 0 13 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 1.76009C0 1.29328 0.171205 0.845598 0.475951 0.515517C0.780698 0.185437 1.19402 0 1.625 0H4.875L6.5 1.76009H9.75C10.181 1.76009 10.5943 1.94552 10.899 2.2756C11.2038 2.60568 11.375 3.05337 11.375 3.52017V4.40022H4.875C4.22853 4.40022 3.60855 4.67837 3.15143 5.17349C2.69431 5.66861 2.4375 6.34014 2.4375 7.04035V8.36041C2.4375 8.71051 2.3091 9.04628 2.08054 9.29384C1.85198 9.5414 1.54198 9.68048 1.21875 9.68048C0.895517 9.68048 0.585524 9.5414 0.356964 9.29384C0.128404 9.04628 4.81654e-09 8.71051 0 8.36041V1.76009Z'
      fill={iconColor ? iconColor : '#999999'}
    />
    <path
      d='M3.25 7.04036C3.25 6.57356 3.4212 6.12587 3.72595 5.79579C4.0307 5.46571 4.44402 5.28027 4.875 5.28027H11.375C11.806 5.28027 12.2193 5.46571 12.524 5.79579C12.8288 6.12587 13 6.57356 13 7.04036V8.80045C13 9.26725 12.8288 9.71493 12.524 10.045C12.2193 10.3751 11.806 10.5605 11.375 10.5605H0H1.625C2.05598 10.5605 2.4693 10.3751 2.77405 10.045C3.0788 9.71493 3.25 9.26725 3.25 8.80045V7.04036Z'
      fill={iconColor ? iconColor : '#999999'}
    />
  </svg>
);

export const PopUpIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames(className)}
    width='3'
    height='9'
    viewBox='0 0 3 9'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.49986 2.6689C1.25708 2.6689 1.02425 2.57246 0.852583 2.40079C0.680915 2.22913 0.584473 1.99629 0.584473 1.75352C0.584473 1.51074 0.680915 1.27791 0.852583 1.10624C1.02425 0.934577 1.25708 0.838135 1.49986 0.838135C1.74263 0.838135 1.97546 0.934577 2.14713 1.10624C2.3188 1.27791 2.41524 1.51074 2.41524 1.75352C2.41524 1.99629 2.3188 2.22913 2.14713 2.40079C1.97546 2.57246 1.74263 2.6689 1.49986 2.6689ZM1.49986 5.41506C1.25708 5.41506 1.02425 5.31862 0.852583 5.14695C0.680915 4.97528 0.584473 4.74245 0.584473 4.49967C0.584473 4.2569 0.680915 4.02407 0.852583 3.8524C1.02425 3.68073 1.25708 3.58429 1.49986 3.58429C1.74263 3.58429 1.97546 3.68073 2.14713 3.8524C2.3188 4.02407 2.41524 4.2569 2.41524 4.49967C2.41524 4.74245 2.3188 4.97528 2.14713 5.14695C1.97546 5.31862 1.74263 5.41506 1.49986 5.41506ZM1.49986 8.16121C1.25708 8.16121 1.02425 8.06477 0.852583 7.8931C0.680915 7.72143 0.584473 7.4886 0.584473 7.24583C0.584473 7.00305 0.680915 6.77022 0.852583 6.59855C1.02425 6.42688 1.25708 6.33044 1.49986 6.33044C1.74263 6.33044 1.97546 6.42688 2.14713 6.59855C2.3188 6.77022 2.41524 7.00305 2.41524 7.24583C2.41524 7.4886 2.3188 7.72143 2.14713 7.8931C1.97546 8.06477 1.74263 8.16121 1.49986 8.16121Z'
      fill={iconColor ? iconColor : '#000000'}
    />
  </svg>
);

export const AddFolder = ({ className, iconColor }: any) => (
  <svg
    className={classNames(`ml-2`, className)}
    width='14'
    height='11'
    viewBox='0 0 14 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5 6.38776H9M7 4.36735V8.40816M1 9.08163V2.34694C1 1.98971 1.14048 1.64711 1.39052 1.39451C1.64057 1.14191 1.97971 1 2.33333 1H6.33333L7.66667 2.34694H11.6667C12.0203 2.34694 12.3594 2.48885 12.6095 2.74145C12.8595 2.99405 13 3.33665 13 3.69388V9.08163C13 9.43886 12.8595 9.78146 12.6095 10.0341C12.3594 10.2867 12.0203 10.4286 11.6667 10.4286H2.33333C1.97971 10.4286 1.64057 10.2867 1.39052 10.0341C1.14048 9.78146 1 9.43886 1 9.08163Z'
      stroke={iconColor ? iconColor : '#666666'}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const ChevronDownIcon = ({ className, iconColor }: any) => (
  <svg
    className={classNames(className)}
    width='20'
    height='20'
    viewBox='0 0 15 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z'
      fill={iconColor ? iconColor : '#999999'}
      fillRule='evenodd'
      clipRule='evenodd'
    />
  </svg>
);
