export interface ITab {
  id: number;
  title: string;
  type: 'STATIC' | 'IFRAME' | 'NAVIGATION';
}

export class TabManagerService {
  addTabs(tabs: [ITab]) {
    return tabs;
  }

  removeTabs(tabs: [ITab]) {
    return tabs;
  }
}
