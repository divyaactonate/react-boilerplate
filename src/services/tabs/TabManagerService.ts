import { TabPersistanceService } from './TabPersistanceService';

export interface ITab {
  id?: number;
  title: string;
  type: 'IframeTab' | 'NavigationTab' | 'StaticTab';
  nav?: [string];
  tabId: number;
}

export class TabManagerService {
  tabService: TabPersistanceService;

  constructor() {
    this.tabService = new TabPersistanceService();
  }

  async addTabs(tabs: [ITab]) {
    try {
      const result = await this.tabService.addTab(tabs);
      console.log('add result', result);
      return result;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }

  async removeTab(tabID: number) {
    try {
      const result = await this.tabService.removeTab(tabID);
      return result;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }

  async loadTabsFromDb() {
    try {
      const result = await this.tabService.getTabs();
      return result;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }

  async getTabsCount() {
    try {
      const result = await this.tabService.getTabsCount();
      return result;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  }
}
