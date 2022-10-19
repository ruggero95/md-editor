import { files, FileStored } from "../../../app/files/files.store"
import { FileEditorPills } from "../../../components/FileEditorPills"
import { EditorContainer } from "./editorContainer"
import { For } from "solid-js"
export const FileMainRightSide = () => {
    function getFiles() {
        return files.filter((e) => e.opened == true)
    }
    return (
        <div class="ml-3 flex-1">
            <div class="flex flex-wrap content-start flex-col align h-[65px] basis-0 overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200  scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <For each={getFiles()}>{(file: FileStored, i) =>
                    <FileEditorPills {...file} />
                }</For>

            </div>
            <div class="flex-wrap pt-3">
                <EditorContainer />
            </div>
        </div>
    )
}