import { ButtonIcon, ButtonIconDimension } from "../../../components/ButtonIcon"
import { SectionTitle } from "../../../components/SectionTitle"
import { files, fileStore } from "../../../app/files/files.store"
import { For } from "solid-js/web"
import { FileNameSideBar } from "../../../components/fileNameSideBar"
import dayjs from "dayjs"
export const FileSideBar = () => {
    function createFile(){
        fileStore.removeInEditing()
        fileStore.createFile("", dayjs().valueOf().toString())
    }
    return (
        <div class="bg-white left-file-editor flex-none sticky w-96 rounded-[20px] p-10">
            <div class="flex justify-between">
                <SectionTitle title="Files" />
                <ButtonIcon onClickFn={createFile} dimension={ButtonIconDimension.SMALL} hoverColor="#000000" hoverBgColor="#ffffff" iconName="plus" color="bg-black" iconColor="text-white" />
            </div>
            <div>
                <For each={files}>{(file, i) =>
                    <FileNameSideBar {...file}/>
                }</For>
            </div>
        </div>
    )
}