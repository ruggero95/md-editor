import { ButtonIcon } from "../../../components/ButtonIcon"
import { SectionTitle } from "../../../components/SectionTitle"

export const FileSideBar = () => {
    return (
            <div class="bg-white sticky h-screen w-96 rounded-[20px] p-10">
                <div class="flex justify-between">
                    <SectionTitle title="Files" />
                    <ButtonIcon hoverColor="#000000" hoverBgColor="#ffffff" iconName="plus" color="bg-black" iconColor="text-white" />
                </div>
            </div>
    )
}