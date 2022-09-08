import { Component } from "solid-js";
import { Write } from "./sections/Write";
import { File } from "./sections/File";

export const Home:Component = (props)=>{
    return (
        <div class="container pt-20 px-20">
            <Write/>
            <File/>
        </div>
    )
}