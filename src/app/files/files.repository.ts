//contiene metodo per scrivere nel db
import { RxCollection, RxCollectionBase, RxDocument, RxQuery } from "rxdb"
import { DB } from "../db/db"


export const filesRepository = {
    create: async (name: string, creation: string | number, lastUpdate: string | number, opened: string | boolean, editing: string | boolean, active: string | boolean, content: string) => {
        const db = await DB.get()
        return db.files.insert({
            name: name,
            creation: creation.toString(),
            lastUpdate: lastUpdate.toString(),
            opened: opened.toString(),
            editing: editing.toString(),
            active: active.toString(),
            content: content
        })
    },
    getAll: async () => {
        const db = await DB.get()
        return db.files.find()
    },
    getByName: async (name: string) => {
        const db = await DB.get()
        return db.files.find({
            selector: {
                name: name
            }
        })
    },   
    getOthers: async (name:string)=>{
        const db = await DB.get()
        return db.files.find().where('name').ne(name)
    },
    update: (documents:RxQuery, inputs:any) => {
        return documents.update({
            $set: inputs
        })
    },
    delete: (documents:RxQuery) => {
        //TODO check RxColelction if is rigth
        return documents.remove()
    }
}