import { files } from "../../../app/files/files.store"
import { ButtonIconDimension } from "../../../components/ButtonIcon"
import { EditorIcon } from "../../../components/EditorIcon"

export const EditorContainer = ()=>{
    function getActiveContent(){
        const file = files.find((e)=>e.active && e.opened)
        return file?.content
    }
    return (
        <div class="flex editor-height flex-wrap p-2 rounded-[20px] bg-white">
            <div class="w-full h-12">
                <EditorIcon dimension={ButtonIconDimension.BIG} iconName="italic"/>
                <EditorIcon dimension={ButtonIconDimension.BIG} iconName="bold"/>
            </div>
            <textarea onKeyUp={()=>alert('change')} class="mx-2 editor-textarea border-none active:border-none focus:border-none w-full h-full" >
                {getActiveContent()}
            </textarea>
        </div>
    )
}