import type { Component } from 'solid-js';
import { Edit } from './icons/edit';
import { HomeIcon } from './icons/home';
import { Logo } from './icons/logo';
import { For } from 'solid-js';
import { routes } from '../app/const/routes';
import { useLocation } from '@solidjs/router';

const menuSidebar: Component = () => {
    const location = useLocation()
    function isActive(pathname: string, link: string) {
        if (pathname == link || pathname.search(link) != -1) {
            return true
        }
        return false
    }
    const menus = [
        {
            route: routes.home,
            icon: <HomeIcon />,
        },
        {
            route: routes.edit,
            icon: <Edit />
        }
    ]
    return (
        <aside class="w-[90px]  shadow-md rounded-tr-[20px] rounded-br-[20px] h-screen sticky top-0  bg-white px-1 absolute">
            <ul class="relative">
                <li class="relative content-center bor ">
                    <Logo />
                </li>
                <li class="relative mx-3 content-center border-b-2">

                </li>
                <For each={menus}>
                    {
                        (menu, i) =>
                            <li class="relative content-center">
                                <a classList={{ "bg-gray-100": isActive(location.pathname, menu.route) }} class="flex items-center text-sm py-3 px-3 m-5  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href={menu.route} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    {menu.icon}
                                </a>
                            </li>
                    }

                </For>
            </ul>
        </aside>
    )

}

export default menuSidebar