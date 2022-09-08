import { Component } from "solid-js"
import { Edit } from "./icons/edit"

export const TemplateBox: Component<{ hoverbgColor:string, hoverTextColor:string,bgColor: string, textColor: string, text: string }> = (props) => {
    const bgh = "hover:"+props.hoverbgColor;
    const txh = "hover:"+props.hoverTextColor;

    return (
        <div style={{"--template-bg-hover":props.hoverbgColor, "--template-text-hover":props.hoverTextColor}} class={"mx-2 w-[230px] template-box m-auto `${}` content-center text-center align-middle rounded-[20px] cursor-pointer h-[126px] " + props.bgColor + " " + props.textColor+" hover:bg-"+props.hoverbgColor+"-100 "+txh+ " "  } >
            <div class="grid grid-cols-2">
                <div>
                <svg class="w-32 text-xs  h-32 font-extralight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <div class=" m-auto">
                    <span class="font-extrabold">Template</span>
                    <br />
                    {props.text}
                </div>
            </div>


        </div>
    )
}