import { Component } from "solid-js"
import { fileStore } from "../app/files/files.store"
import { ButtonIcon, ButtonIconDimension } from "./ButtonIcon"

export const FileEditorPills:Component<{name:string, active:boolean}> = (props)=>{
    function setActive(){
        fileStore.setActive(props.name)
    }
    function closeFile(){
        fileStore.setOpened(props.name, false)
    }
    return (
        <div onClick={()=>setActive()} classList={{"border-b-4":props.active}} class="bg-white flex-1 cursor-pointer border-black w-40 rounded-[10px] mx-1 flex px-2 py-2">
            <div class="p-auto m-auto">
                {props.name}
            </div>

            <div class="mx-3 ">            
                <ButtonIcon onClickFn={()=>closeFile()} dimension={ButtonIconDimension.SMALL} hoverColor="#000000" hoverBgColor="#ffffff" iconName="del" color="bg-black" iconColor="text-white" />
            </div>
        </div>
    )
}