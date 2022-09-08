import type { Component, ParentComponent, ParentProps } from 'solid-js';
import MenuSidebar from "../components/menuSidebar"
import { children } from 'solid-js';
const Layout: ParentComponent = (props:ParentProps)=>{
    const c = children(()=> props.children)
    return (
        <div class="m-0 p-0">
            <div class="flex">
                <MenuSidebar></MenuSidebar>
                <div class="w-full">                    
                    {c()}
                </div>
            </div>
        </div>   
    ) 
            
}

export default Layout