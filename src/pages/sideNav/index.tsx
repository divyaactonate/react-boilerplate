import { FC, useState } from 'react';
import {
  SearchIcon,
  HomeIcon,
  MyFolderIcon,
  BIFolderIcon,
  FavoriteIcon,
  HubFolderIcon,
  HistoryIcon,
  TagsIcon,
  userImageIcon,
  SettingIcon,
  BellIcon,
  QuestionIcon,
} from '@library/icons';

const SideNav: FC = () => {
  const [upperMenuSelectedIndex, setUpperMenuIndex] = useState(2);
  const [lowerMenuSelectedIndex, setlowerMenuIndex] = useState(null);

  const upperMenus = [
    {
      title: 'Search',
      iconName: SearchIcon,
    },
    {
      title: 'Home',
      iconName: HomeIcon,
    },
    {
      title: 'My Folders',
      iconName: MyFolderIcon,
    },
    {
      title: 'Favorites',
      iconName: FavoriteIcon,
    },
    {
      title: 'BI Folders',
      iconName: BIFolderIcon,
    },
    {
      title: 'Hub Folders',
      iconName: HubFolderIcon,
    },
    {
      title: 'History',
      iconName: HistoryIcon,
    },
    {
      title: 'Tags',
      iconName: TagsIcon,
    },
  ];

  const lowerMenus = [
    {
      iconName: QuestionIcon,
    },
    {
      iconName: BellIcon,
    },
    {
      iconName: SettingIcon,
    },
    {
      iconName: userImageIcon,
    },
  ];

  const onLowerMenuClick = (menu: any, index: number) => {
    setUpperMenuIndex(null);
    setlowerMenuIndex(index);
    console.log('--------');
  };

  const onUpperMenuClick = (menu: any, index: number) => {
    setlowerMenuIndex(null);
    setUpperMenuIndex(index);
    console.log('--------');
  };

  return (
    <div className='flex h-screen w-full'>
      <div className={`flex flex-row w-full`}>
        <div
          style={{ width: '6%' }}
          className={`flex flex-col justify-between h-screen border py-1`}
        >
          <div className={`flex flex-col w-full border-transparent cursor-pointer border`}>
            {/* upper menus */}
            {upperMenus.map((menu, index) => (
              <div
                onClick={() => onUpperMenuClick(menu, index)}
                key={index}
                style={{
                  backgroundColor: index === upperMenuSelectedIndex ? '#EDF4FD' : 'white',
                  borderLeft: index === upperMenuSelectedIndex ? '3px solid #0084FF' : 'none',
                  paddingTop: 9,
                  paddingBottom: 9,
                }}
                role='button'
                aria-hidden='true'
                tabIndex={index}
                className={`flex flex-col w-full justify-center items-center px-1`}
              >
                <menu.iconName
                  iconColor={index === upperMenuSelectedIndex ? '#0084FF' : '#999999'}
                />
                <label
                  style={{
                    fontSize: 9,
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 1.7,
                    color: index === upperMenuSelectedIndex ? '#0084FF' : '#666666',
                  }}
                  className={`text-gray-600`}
                >
                  {menu.title}
                </label>
              </div>
            ))}
          </div>

          <div
            style={{ height: '30%' }}
            className={`flex flex-col w-full justify-end items-center`}
          >
            {/* lower menus */}
            {lowerMenus.map((menu, index) => (
              <div
                key={index}
                onClick={() => onLowerMenuClick(menu, index)}
                style={{
                  height: '18%',
                  backgroundColor: index === lowerMenuSelectedIndex ? '#EDF4FD' : 'white',
                  borderLeft: index === lowerMenuSelectedIndex ? '3px solid #0084FF' : 'none',
                }}
                role='button'
                tabIndex={index}
                aria-hidden='true'
                className={`flex w-full justify-center items-center cursor-pointer mb-1`}
              >
                <menu.iconName
                  iconPath={
                    index === 3
                      ? 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
                      : null
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: '15%' }} className={`flex h-screen border `}></div>
        <div style={{ width: '80%' }} className={`flex h-screen border `}></div>
      </div>
    </div>
  );
};

export default SideNav;
