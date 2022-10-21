import { createSignal, Show, Component, onMount } from "solid-js"
import { filesRepository } from "../app/files/files.repository"
import { files, fileStore } from "../app/files/files.store"
import dayjs from "dayjs"
export const FileNameSideBar:Component<{name:string, editing:boolean|string, creation:string}> = (props) => {
    const [tempFilename, setTempFilename] = createSignal<string>(props.name ? props.name : "")
    let inputRef!:HTMLInputElement
    async function endName(e:KeyboardEvent){
        if(tempFilename()!="" && (e.key=="Enter" || e.code=="Enter" || e.keyCode==13)){
            //TODO inserisco file direttamente nel db, poi la subscribe lo inserirà nell array dei files
            //vuil dire che devo rimuovere il file dall array prima di inserirlo nel db
            console.log('premuto invio')
            
            //setto editing a false nello store    
            fileStore.setEditing(props.name, false) 
            fileStore.updateFileName(props.creation, tempFilename())  
            //rimuovo file dall array
            //fileStore.removeFile(props.creation)
            //aggiungo al DB, una subscribe presente nell editor lo aggiungerà agli array
            //await filesRepository.create(tempFilename(), props.creation, dayjs().valueOf().toString(), false,  false, false,"")
           
        }
    }
    async function openFile(){
        /*const file = await filesRepository.getByName(props.name)
        const others = await filesRepository.getOthers(props.name)
        await filesRepository.update(others,{active:false})
        await filesRepository.update(file,{opened:"true", active:"true"})*/
        
        fileStore.setOpened(props.name, true)
        fileStore.setActive(props.name)
    }
    onMount(()=>{
        if(inputRef){
            inputRef.focus()
        }        
    })

    return (
        <div>
            <Show when={props.editing==='true' || props.editing===true}>
                <div class="bg-slate-100 rounded-md w-full my-1 p-3">
                    <input ref={inputRef} type="text" autofocus={true} class="w-full bg-slate-100 outline-0" onKeyDown={(e)=>endName(e)} onChange={(e) => setTempFilename(e.currentTarget.value)} value={tempFilename()} />
                </div>
            </Show>
            <Show when={props.editing === 'false' || props.editing===false}>
                <div onDblClick={(e)=>openFile()} class="p-3 hover:bg-gray-50 cursor-pointer rounded-md my-1">
                    {tempFilename()}.md 
                </div>
            </Show>

        </div>
    )
}