// export interface Validation {
//   [x: string]: RegisterOptions;
// }
export interface DemoTabs {
  id?: number;
  title: string;
  type: 'IframeTab' | 'NavigationTab' | 'StaticTab';
  nav?: [string];
  tabId: number;
}
