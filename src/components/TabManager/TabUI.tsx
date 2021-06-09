import { ReactElement, LegacyRef, useEffect, useState } from 'react';
import Tab from '@components/TabManager/IframeTab';
// import NavigationTab from '@components/TabManager/NavigationTab';
import { PlusIcon } from '@heroicons/react/solid';
import { ActionIcon } from '@library/core';
import { ITab, TabManagerService } from '@src/services/tabs/TabManagerService';
import DockLayout from 'rc-dock';
import 'rc-dock/dist/rc-dock.css';
import './tabs.css';
/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as TabComponents from './index';
export interface ITabUI {
  id: number;
  title: string | ReactElement;
  content: ReactElement;
  closable: boolean;
  group: string;
}
const TabUI = () => {
  let dockLayout: LegacyRef<DockLayout> = null;
  const getRef = (r: LegacyRef<DockLayout>) => {
    dockLayout = r;
  };

  const defaultTabs = [
    {
      id: 1,
      title: 'Report',
      content: <Tab url={'https://bihub.com/'} />,
      closable: false,
      group: 'card custom',
    },
  ];

  const [tabList, setTabList] = useState<ITabUI[]>(defaultTabs);
  const [loading, setLoading] = useState(true);

  const service = new TabManagerService();

  const loadTabs = async () => {
    try {
      const tabs: [ITab] = await service.loadTabsFromDb();
      const tabList: ITabUI[] = [];
      console.log('tabs from db', tabs);
      tabs.forEach((tab) => {
        const Content = TabComponents[tab.type];

        tabList.push({
          id: tab?.tabId || 0,
          title: <div className='folder-icon truncate'>{tab.title}</div>,
          content: <Content />,
          closable: tabs.length > 1 ? true : false,
          group: 'card custom',
        });
      });
      setTabList(tabList);
      setLoading(false);
    } catch (error) {}
  };

  const updatedLastTabClosable = async (closable: boolean) => {
    try {
      const tabs: [ITab] = await service.loadTabsFromDb();
      const tabList: any[] = [];

      tabs.forEach((tab) => {
        const Content = TabComponents[tab.type];

        tabList.push({
          id: tab?.tabId || 0,
          closable: closable,
          title: <div className='folder-icon truncate'>{tab.title}</div>,
          content: <Content />,
          group: 'card custom',
        });
      });
      return tabList[0];
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    loadTabs();
  }, []);

  const defaultLayout: any = {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          tabs: tabList,
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
    const id = Date.now();
    const tabsTypes = ['StaticTab', 'NavigationTab', 'IframeTab'];
    let index = Math.floor(Math.random() * 3) + 1;
    index = index ? index : 2;
    const selectedType = tabsTypes[index] ? tabsTypes[index] : 'NavigationTab';
    service.addTabs([{ title: `${selectedType} ${id}`, type: selectedType, tabId: id }]);
    const Content = TabComponents[selectedType];
    return {
      id: id,
      title: (
        <div className='folder-icon truncate'>
          {selectedType} {id}
        </div>
      ),
      closable: true,
      group: 'card custom',
      content: <Content />,
    };
  };

  const onLayoutChange = async (newLayout: any, currentTabId: any, direction: any) => {
    // control DockLayout from state
    console.log('onLayoutChange currentTabId', currentTabId);
    console.log('onLayoutChange newLayout', newLayout);
    console.log('onLayoutChange direction', direction);
    if (direction === 'remove') {
      service.removeTab(currentTabId);
      const count = await service.getTabsCount();
      console.log('count', count);
      if (count == 1) {
        const lastTab = await updatedLastTabClosable(false);
        dockLayout?.updateTab(lastTab?.id, lastTab);
      } else if (count == 2) {
        const lastTab = await updatedLastTabClosable(true);
        dockLayout?.updateTab(lastTab?.id, lastTab);
      }
    }

    if (direction === 'middle') {
      const count = await service.getTabsCount();
      console.log('count', count);
      if (count == 2) {
        const lastTab = await updatedLastTabClosable(true);
        dockLayout?.updateTab(lastTab?.id, lastTab);
      }
    }
  };

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <DockLayout
          ref={getRef}
          defaultLayout={defaultLayout}
          style={{
            position: 'absolute',
            left: '316px',
            top: 0,
            right: 10,
            bottom: 10,
            width: '79%',
          }}
          onLayoutChange={onLayoutChange}
        />
      )}
    </>
  );
};

export default TabUI;
