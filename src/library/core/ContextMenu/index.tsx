import { Fragment } from 'react';
import { Menu, useContextMenu } from 'react-contexify';
import { ContextMenuProps, MenuBuilder } from './ContextMenu.helper';

export const ContextMenu = ({
  // themeOverride,
  size = 'sm',
  menuItems = [],
  handleClick,
  children,
}: ContextMenuProps) => {
  const MENU_ID = 'menu-id' + Math.random();
  const { show } = useContextMenu({ id: MENU_ID });

  function displayMenu(e: any) {
    show(e);
  }
  const MenuBuilderProps = { size, menuItems, handleClick };

  return (
    <Fragment>
      {children(displayMenu)}
      <Menu data-beautify-context-menu id={MENU_ID}>
        <MenuBuilder {...MenuBuilderProps} />
      </Menu>
    </Fragment>
  );
};
