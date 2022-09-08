import { Plus } from "./icons/plus"

export const NewFile = () => {
    return (
        <div class="mx-2 hover:bg-black hover:text-white border-dotted inline-flex align-middle content-center text-center cursor-pointer border-2 rounded-[20px] w-[126px] h-[126px] border-black ">
            <div class="w-full  m-auto">
                <Plus />
                New
            </div>
        </div>
    )
}