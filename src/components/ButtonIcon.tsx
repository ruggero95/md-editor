import { Component } from "solid-js";

export const ButtonIcon:Component<{hoverColor:string, hoverBgColor:string,iconName:string,color:string,iconColor:string}> = (props)=>{
   

    function getIcon(iconName:string){
        const icons:any = {
            "bin": <svg class={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>,
            "edit": <svg class={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>,
            "plus": <svg class={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>,
            "del": <svg class={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        }
        const icon = icons[iconName];    
        if(!icon){
            return 'No icon'
        }
        return icon
    }

    return (
        <button style={{"--ib-bg-hover":props.hoverBgColor,"--ib-text-hover":props.hoverColor}} class={"m-1 icon-button h-10 rounded-[10px] p-2 "+props.color+" "+props.iconColor}>
            {getIcon(props.iconName)}
        </button>
    )
}