import { createRxDatabase, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import {
     addPouchPlugin
} from 'rxdb/plugins/pouchdb';
import { fileschema } from './schema';
window['global'] = window;
import { addRxPlugin } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
addRxPlugin(RxDBDevModePlugin);
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
addRxPlugin(RxDBQueryBuilderPlugin);
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
addRxPlugin(RxDBLeaderElectionPlugin);

// @ts-ignore: old type
import * as puchDB from "pouchdb-adapter-idb"
addPouchPlugin(puchDB);
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
addRxPlugin(RxDBUpdatePlugin);
interface DBSchema {
    singleton: RxDatabase | null,
    leader(): Promise<boolean> | undefined
    get(): Promise<RxDatabase>,
    checkAndMigrate(): void
}

export const DB: DBSchema = {
    singleton: null,
    get: async () => {
        if (DB.singleton != null) {   
            await DB.leader()     
            return DB.singleton
        }
        const myDatabase = await createRxDatabase({
            name: 'mdfiles',
            storage: getRxStorageDexie()
        });
        DB.singleton = myDatabase
        await DB.leader()     
        return DB.singleton
    },
    leader: ()=>{
        return DB?.singleton?.waitForLeadership()
    },
    checkAndMigrate: async () => {
        const db = await DB.get()
        await DB.leader()     
        await db.addCollections(
            {
                files:{
                    schema:fileschema
                    
                }
            }
        )
    }

}
