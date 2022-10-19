import { createSignal, Show, Component, onMount } from "solid-js"
import { files, fileStore } from "../app/files/files.store"

export const FileNameSideBar:Component<{name:string, editing:boolean, creation:string}> = (props) => {
    const [tempFilename, setTempFilename] = createSignal<string>(props.name ? props.name : "")
    let inputRef!:HTMLInputElement
    function endName(e:KeyboardEvent){
        if(tempFilename()!="" && (e.key=="Enter" || e.code=="Enter" || e.keyCode==13)){
            console.log('premuto invio')
            //setto editing a false nello store    
            fileStore.setEditing(props.name, false) 
            fileStore.updateFileName(props.creation, tempFilename())  
        }
    }
    function openFile(){
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
            <Show when={props.editing===true}>
                <div class="bg-slate-100 rounded-md w-full my-1 p-3">
                    <input ref={inputRef} type="text" autofocus={true} class="w-full bg-slate-100 outline-0" onKeyDown={(e)=>endName(e)} onChange={(e) => setTempFilename(e.currentTarget.value)} value={tempFilename()} />
                </div>
            </Show>
            <Show when={props.editing === false}>
                <div onDblClick={(e)=>openFile()} class="p-3 hover:bg-gray-50 cursor-pointer rounded-md my-1">
                    {tempFilename()}.md 
                </div>
            </Show>

        </div>
    )
}