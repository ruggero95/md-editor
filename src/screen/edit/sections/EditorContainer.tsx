import { ButtonIconDimension } from "../../../components/ButtonIcon"
import { EditorIcon } from "../../../components/EditorIcon"

export const EditorContainer = ()=>{
    return (
        <div class="flex editor-height flex-wrap p-2 rounded-[20px] bg-white">
            <div class="w-full h-12">
                <EditorIcon dimension={ButtonIconDimension.BIG} iconName="italic"/>
                <EditorIcon dimension={ButtonIconDimension.BIG} iconName="bold"/>
            </div>
            <textarea class="mx-2 editor-textarea border-none active:border-none focus:border-none w-full h-full" >
                yo
            </textarea>
        </div>
    )
}