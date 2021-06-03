import Tab from '@components/WindowManager';
import { PlusIcon } from '@heroicons/react/solid';
import { ActionIcon } from '@library/core/ActionIcon';
import DockLayout from 'rc-dock';
import 'rc-dock/dist/rc-dock.css';
import '../components/WindowManager/tabs.css';

const WindowManager = () => {
  const tabs = [
    {
      id: 'tab1',
      title: 'tab1',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card custom',
    },
    {
      id: 'tab2',
      title: <div className='github-icon'>tab3</div>,
      content: <Tab url={'http://www.sapna-group.com/index.php'} />,
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
        left: 10,
        top: 10,
        right: 10,
        bottom: 10,
      }}
    />
  );
};

export default WindowManager;
