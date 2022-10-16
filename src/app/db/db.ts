import { createRxDatabase, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';

interface DBSchema {
    singleton: RxDatabase | null,
    get(): Promise<RxDatabase>,
    checkAndMigrate(): void
}

export const DB: DBSchema = {
    singleton: null,
    get: async () => {
        if (DB.singleton != null) {
            return DB.singleton
        }
        const myDatabase = await createRxDatabase({
            name: 'mdfiles',
            storage: getRxStorageDexie()
        });
        DB.singleton = myDatabase
        return DB.singleton
    },
    checkAndMigrate: async () => {
        const db = await DB.get()
        await db.addCollections(
            {
                files:{
                    schema:fileSchema
                    
                }
            }
        )
    }

}


const fileSchema = {
    title: 'file_schema',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100 // <- the primary key must have set maxLength
        },
        name: {
            type: 'string'
        },
        creation: {
            type: 'string'
        },
        lastedit: {
            description: 'age in years',
            type: 'integer',

            // number fields that are used in an index, must have set minium, maximum and multipleOf
            minimum: 0,
            maximum: 150,
            multipleOf: 1
        }
    },
    required: ['name', 'creation', 'lastedit'],
    indexes: ['name']
}