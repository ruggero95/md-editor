import { NewFile } from "../../../components/newFile"
import { SectionTitle } from "../../../components/SectionTitle"
import { TemplateBox } from "../../../components/TemplateBox"

export const Write = () => {
    return (
        <>
                <SectionTitle title="Write"/>
                <div class="flex">
                    <NewFile />
                    <TemplateBox hoverbgColor="#bfdbfe" hoverTextColor="#1d4ed8" text="Simple" bgColor="bg-blue-700" textColor="text-blue-200"/> 
                    <TemplateBox hoverbgColor="#fef9c3" hoverTextColor="#facc15" text="Hackaton" bgColor="bg-yellow-400" textColor="text-yellow-100"/> 
                </div>
        </>
    )
}