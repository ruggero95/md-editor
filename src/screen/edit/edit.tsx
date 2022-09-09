import { Component } from "solid-js";
import { FileMainRightSide } from "./sections/FileMainRightSide";
import { FileSideBar } from "./sections/FileSideBar";

export const Edit:Component = (props)=>{
    return (
        <div class="flex  m-5 main-content container">
            <FileSideBar />
            <FileMainRightSide/>
        </div>
    )
}