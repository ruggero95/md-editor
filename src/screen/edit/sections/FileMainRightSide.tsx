import { FileEditorPills } from "../../../components/FileEditorPills"
import { EditorContainer } from "./editorContainer"

export const FileMainRightSide = ()=>{
    return (
        <div class="ml-3 flex-1">            
            <div class="flex flex-wrap flex-col h-[65px] basis-0 overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200  scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <FileEditorPills active={true} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
                <FileEditorPills active={false} filename="test.md"/>
            </div>
            <div class="flex-wrap pt-3">
                <EditorContainer/>
            </div>
        </div>
    )
}