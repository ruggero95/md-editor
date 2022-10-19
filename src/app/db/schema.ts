import { RxSchema } from "rxdb";

export const fileschema = {
    title:'fileschema',
    version:0,
    type:'object',
    primaryKey:{
        key: 'id',
        fields: [
            "creation"
        ],
        separator: '-'
    },
    properties:{
        id:{
            type:'string',
            maxLength:250
        },
        name:{
            type:'string',
            maxLength:500
        },
        creation:{
            type:'string',
            maxLength:150
        },
        lastUpdate:{
            type:'string'
        },
        opened:{
            type:'string'
        },
        editing:{
            type:'string'
        },
        active:{
            type:'string'
        },
        content:{
            type:'string'
        }          
    },
    required: ['name', 'creation'],
    indexes:['name','creation']
}