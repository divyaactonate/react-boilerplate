import { DATA_TYPE, Connection } from 'jsstore';

const getWorkerPath = () => {
  if (process.env.NODE_ENV === 'development') {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js');
  } else {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js');
  }
};

// This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.
const workerPath = getWorkerPath().default;
export const idbCon = new Connection(new Worker(workerPath));
export const dbname = 'dev-bihub';

const getDatabase = () => {
  const tblTabs = {
    name: 'Tabs',
    columns: {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        notNull: true,
        dataType: DATA_TYPE.String,
      },
      type: {
        dataType: DATA_TYPE.String,
        default: 'StaticTab',
      },
      nav: {
        dataType: DATA_TYPE.Array,
        default: [],
      },
      tabId: {
        dataType: DATA_TYPE.Number,
        default: 0,
      },
    },
  };
  const dataBase = {
    name: dbname,
    tables: [tblTabs],
  };
  return dataBase;
};

export const initJsStore = () => {
  try {
    const dataBase = getDatabase();
    idbCon.initDb(dataBase);
  } catch (ex) {
    console.error(ex);
  }
};
