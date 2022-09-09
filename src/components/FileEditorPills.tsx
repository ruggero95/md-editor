import { Component } from "solid-js"
import { ButtonIcon, ButtonIconDimension } from "./ButtonIcon"

export const FileEditorPills:Component<{filename:string, active:boolean}> = (props)=>{

    return (
        <div classList={{"border-b-4":props.active}} class="bg-white cursor-pointer border-black  rounded-[10px] mx-1 flex px-2 py-2">
            <div class="p-auto m-auto">
                {props.filename}
            </div>

            <div class="mx-3 ">            
                <ButtonIcon dimension={ButtonIconDimension.SMALL} hoverColor="#000000" hoverBgColor="#ffffff" iconName="del" color="bg-black" iconColor="text-white" />
            </div>
        </div>
    )
}