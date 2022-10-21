import {createStore} from "solid-js/store"
export interface FileStored{
    name:string;
    creation:string;
    lastUpdate:string;
    opened:boolean; //if is in the top pills
    editing:boolean; //if is just created and 
    active:boolean; //if pills is clicked and content i showed
    content:string;
}
export const [files, setFiles] = createStore<FileStored[]>([]);

//contains method to interact with the store, insert update
export const fileStore = {
    createFile:(name:string, creationDate:string, content:string="",editing:boolean = true, opened:boolean =  false, active:boolean = false)=>{
        setFiles([...files, {
            name:name,
            creation:creationDate,
            lastUpdate:'',
            opened:opened,
            editing:editing,
            active:active,
            content:content
        }])
    },
    updateFileName:(creation:string,name:string)=>{
        setFiles(
            (file)=>file.creation==creation,
            "name",
            (oldVal)=>name
        )       
    },
    setEditing:(name:string,opened:boolean)=>{
        setFiles(
            (file)=>file.name==name,
            "editing",
            (oldVal)=>opened
        )
    },
    setOpened:(name:string,editing:boolean)=>{
        setFiles(
            (file)=>file.name==name,
            "opened",
            (oldVal)=>editing
        )
    },
    setActive:(name:string)=>{
        setFiles(
            (file)=>file.name!=name,
            "active",
            (oldVal)=>false
        )
        setFiles(
            (file)=>file.name==name,
            "active",
            (oldVal)=>true
        )
    },
    removeInEditing:()=>{
        setFiles(files.filter((e)=>{ return (e.editing==false)}))
    },
    removeFile:(creation:string)=>{
        setFiles(files.filter((e)=>e.creation!=creation))
    }
}