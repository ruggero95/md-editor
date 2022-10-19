import { Component } from "solid-js";
export enum ButtonIconDimension{
    SMALL='small',
    BIG='big'
}
export const ButtonIcon:Component<{onClickFn?: CallableFunction,dimension:ButtonIconDimension, hoverColor:string, hoverBgColor:string,iconName:string,color:string,iconColor:string}> = (props)=>{
   

    function getIcon(dim:ButtonIconDimension, iconName:string){
        const dimension = dim==ButtonIconDimension.SMALL ? 'w-4 h-4' : 'w-5 h-5'
        const icons:any = {
            "bin": <svg class={dimension} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>,
            "edit": <svg class={dimension} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>,
            "plus": <svg class={dimension} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>,
            "del": <svg class={dimension} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        }
        const icon = icons[iconName];    
        if(!icon){
            return 'No icon'
        }
        return icon
    }
    function getClass(dimension:ButtonIconDimension){
        if(dimension==ButtonIconDimension.SMALL){
            return 'rounded-[8px] p-1 h-7'
        }else if(dimension==ButtonIconDimension.BIG){
            return 'rounded-[10px] h-10 p-2'
        }
        return ''
    }
    return (
        <button onClick={(e)=>props.onClickFn && props.onClickFn(e)} style={{"--ib-bg-hover":props.hoverBgColor,"--ib-text-hover":props.hoverColor}} class={"m-1 icon-button "+props.color+" "+props.iconColor+" "+getClass(props.dimension)}>
            {getIcon(props.dimension, props.iconName)}
        </button>
    )
}