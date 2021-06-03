import { DefaultProps } from '@library/theme';
import { Fragment, ReactNode } from 'react';
import { Item, Separator, Submenu } from 'react-contexify';
import { ItemParams } from 'react-contexify/dist/types';

export interface IContextMenu {
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  seperatorClass?: string;
  iconClass?: string;
  wrapperClass?: string;
  labelClass?: string;
  children?: IContextMenu[];
}
export interface ContextMenuProps extends DefaultProps {
  menuItems: IContextMenu[];
  handleClick?: (data: ItemParams<any, any>, item: IContextMenu, index: number) => void;
  size?: 'sm' | 'md';
  children: (displayMenu: any) => JSX.Element;
  workBeforeOpen?: () => void;
}
export const MenuBuilder = ({ menuItems, size, handleClick }: Partial<ContextMenuProps>) => {
  if (menuItems && Array.isArray(menuItems) && menuItems.length > 0) {
    return (
      <>
        {menuItems.map((item, index: number) => {
          if (item.children) {
            return (
              <Fragment key={index}>
                <Submenu label={item.label}>
                  <MenuBuilder menuItems={item.children} />
                </Submenu>
                {index !== menuItems.length - 1 && (
                  <Seperate className={item.seperatorClass} size={size} />
                )}
              </Fragment>
            );
          }
          return (
            <Fragment key={index}>
              <Item
                data-beautify-context-menu-item
                className={item.wrapperClass}
                disabled={item.disabled}
                onClick={(event) => (handleClick ? handleClick(event, item, index) : {})}
              >
                {item.icon ? (
                  <div className='flex space-x-2'>
                    <span className={item.iconClass}>{item.icon}</span>
                    <span className={item.labelClass}>{item.label}</span>
                  </div>
                ) : (
                  <span className={item.labelClass}>{item.label}</span>
                )}
              </Item>
              {index !== menuItems.length - 1 && <Seperate size={size} />}
            </Fragment>
          );
        })}
      </>
    );
  }
  return null;
};

const Seperate = ({ size, className = '' }: { size?: 'sm' | 'md'; className?: string }) => {
  if (size === 'sm') {
    return <hr data-beautify-context-menu-seperator className={className} />;
  } else {
    return <Separator data-beautify-context-menu-seperator />;
  }
};
MenuBuilder.displayName = '@beautify/core/MenuBuilder';

Seperate.displayName = '@beautify/core/Seperate';
