import { BaseService } from '../indexDBStorage/BaseService';

export class TabPersistanceService extends BaseService {
  tableName: string;

  constructor() {
    super();
    this.tableName = 'Tabs';
  }

  getTabs() {
    return this.connection.select({
      from: this.tableName,
    });
  }

  addTab(tab: ITab) {
    return this.connection.insert({
      into: this.tableName,
      values: [tab],
      return: true, // since tabid is autoincrement field and we need id,
      // so we are making return true which will return the whole data inserted.
    });
  }

  getTabById(id: number) {
    return this.connection.select({
      from: this.tableName,
      where: {
        id: id,
      },
    });
  }

  removeTab(id: number) {
    return this.connection.remove({
      from: this.tableName,
      where: {
        id: id,
      },
    });
  }

  updateStudentById(id: number, updateData: any) {
    return this.connection.update({
      in: this.tableName,
      set: updateData,
      where: {
        id: id,
      },
    });
  }
}
