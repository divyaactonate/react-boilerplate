import Tab from '@components/TabManager/IframeTab';
import NavigationTab from '@components/TabManager/NavigationTab';
import { PlusIcon } from '@heroicons/react/solid';
import { ActionIcon } from '@library/core/ActionIcon';
import DockLayout from 'rc-dock';
import 'rc-dock/dist/rc-dock.css';
import './tabs.css';

const TabUI = () => {
  const tabs = [
    {
      id: 'tab1',
      title: 'Report',
      content: <Tab url={'https://bihub.com/'} />,
      closable: false,
      group: 'card custom',
    },
    {
      id: 'tab2',
      title: <div className='github-icon'>Jan 2021</div>,
      content: <NavigationTab />,
      closable: true,
      group: 'card custom',
    },
  ];
  let count = 9;
  const defaultLayout: any = {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          tabs: tabs,
          panelLock: {
            minWidth: 200,
            panelExtra: (panelData: any, context: any) => (
              <>
                <ActionIcon
                  autoFocus
                  onClick={() => context.dockMove(newTab(), panelData, 'middle')}
                  size={'xs'}
                >
                  <PlusIcon />
                </ActionIcon>
              </>
            ),
          },
        },
      ],
    },
  };

  const newTab = () => {
    return {
      id: `newtab${++count}`,
      title: 'New Tab',
      closable: true,
      group: 'card',
      content: (
        <div>
          <p>This panel has an add button defined in panelLock</p>
        </div>
      ),
    };
  };
  return (
    <DockLayout
      defaultLayout={defaultLayout}
      style={{
        position: 'absolute',
        left: '316px',
        top: 0,
        right: 10,
        bottom: 10,
        width: '79%',
      }}
    />
  );
};

export default TabUI;
