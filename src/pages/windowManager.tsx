import Tab from '@components/WindowManager';
import { PlusIcon } from '@heroicons/react/solid';
import { ActionIcon } from '@library/core/ActionIcon';
import DockLayout from 'rc-dock';
import 'rc-dock/dist/rc-dock.css';

const WindowManager = () => {
  const tabs = [
    {
      id: 'tab1',
      title: 'tab1',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab2',
      title: 'tab2',
      content: <Tab url={'http://www.sapna-group.com/index.php'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab3',
      title: 'tab3',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab4',
      title: 'tab4',
      content: <Tab url={'http://www.sapna-group.com/index.php'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab5',
      title: 'tab5',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab6',
      title: 'tab6',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab7',
      title: 'tab7',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab8',
      title: 'tab8',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card',
    },
    {
      id: 'tab9',
      title: 'tab9',
      content: <Tab url={'https://bihub.com/'} />,
      closable: true,
      group: 'card',
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
                >
                  <PlusIcon />
                </ActionIcon>
                <ActionIcon
                  autoFocus
                  onClick={() => context.dockMove(newTab(), panelData, 'middle')}
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
