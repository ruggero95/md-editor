import { Component } from "solid-js"

export const SectionTitle:Component<{title:string}> = (props)=>{
    return (
        <h1 class="text-4xl mb-10 font-semibold ">{props.title}</h1>
    )
}