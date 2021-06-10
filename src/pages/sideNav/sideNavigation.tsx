import { useState, useEffect } from 'react';
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

export interface SideNavProps {
  readonly setBreadcrumbData: (value: any) => void;
}

const SideNavigation: any = ({ setBreadcrumbData }: SideNavProps) => {
  const [upperMenuSelectedIndex, setUpperMenuIndex] = useState<number | null>(2);
  const [lowerMenuSelectedIndex, setlowerMenuIndex] = useState<number | null>(null);

  useEffect(() => {
    setBreadcrumbData({ title: upperMenus[2].title, href: upperMenus[2].href });
  }, []);

  const upperMenus = [
    {
      title: 'Search',
      iconName: SearchIcon,
      href: 'https://google.com',
    },
    {
      title: 'Home',
      iconName: HomeIcon,
      href: 'https://google.com',
    },
    {
      title: 'My Folders',
      iconName: MyFolderIcon,
      href: 'https://google.com',
    },
    {
      title: 'Favorites',
      iconName: FavoriteIcon,
      href: 'https://google.com',
    },
    {
      title: 'BI Folders',
      iconName: BIFolderIcon,
      href: 'https://google.com',
    },
    {
      title: 'Hub Folders',
      iconName: HubFolderIcon,
      href: 'https://google.com',
    },
    {
      title: 'History',
      iconName: HistoryIcon,
      href: 'https://google.com',
    },
    {
      title: 'Tags',
      iconName: TagsIcon,
      href: 'https://google.com',
    },
  ];

  const lowerMenus = [
    {
      iconName: QuestionIcon,
      href: 'https://google.com',
    },
    {
      iconName: BellIcon,
      href: 'https://google.com',
    },
    {
      iconName: SettingIcon,
      href: 'https://google.com',
    },
    {
      iconName: userImageIcon,
      href: 'https://google.com',
    },
  ];

  const onLowerMenuClick = (menu: any, index: number) => {
    setUpperMenuIndex(null);
    setlowerMenuIndex(index);
  };

  const onUpperMenuClick = (menu: any, index: number) => {
    setBreadcrumbData({ title: menu.title, href: menu.href });
    setlowerMenuIndex(null);
    setUpperMenuIndex(index);
  };

  return (
    <div style={{ width: '6%' }} className={`flex flex-col justify-between h-screen border py-1`}>
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
            <menu.iconName iconColor={index === upperMenuSelectedIndex ? '#0084FF' : '#999999'} />
            <label
              style={{
                fontSize: 10,
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

      <div style={{ height: '30%' }} className={`flex flex-col w-full justify-end items-center`}>
        {/* lower menus */}
        {lowerMenus.map((menu, index) => (
          <div
            key={index}
            onClick={() => onLowerMenuClick(menu, index)}
            style={{
              height: '18%',
              backgroundColor: index === lowerMenuSelectedIndex ? '#EDF4FD' : 'white',
              borderLeft: index === lowerMenuSelectedIndex ? '3px solid #0084FF' : 'none',
              paddingTop: 9,
              paddingBottom: 9,
            }}
            role='button'
            tabIndex={index}
            aria-hidden='true'
            className={`flex w-full justify-center items-center cursor-pointer mt-1`}
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
  );
};

export default SideNavigation;
