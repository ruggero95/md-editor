import { ButtonIcon, ButtonIconDimension } from "../../../components/ButtonIcon"
import { SectionTitle } from "../../../components/SectionTitle"

export const File = () => {
    return (
        <div class="mt-16">
            <SectionTitle title="File" />            
            <div class="overflow-x-auto   rounded-[20px] relative">
                <table class="w-full  rounded-[20px] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class=" text-gray-700 text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Creation
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Last Edit
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="py-4 px-6">
                                23-04-2022
                            </td>
                            <td class="py-4 px-6">
                                04-03-2022
                            </td>
                            <td class="py-4 px-6">
                                <ButtonIcon dimension={ButtonIconDimension.BIG} hoverColor="#000000" hoverBgColor="#ffffff" iconName="edit" color="bg-black" iconColor="text-white" />
                                <ButtonIcon dimension={ButtonIconDimension.BIG} hoverColor="#dc2626" hoverBgColor="#fff"  iconName="bin" color="bg-red-600" iconColor="text-white" />
                            </td>
                        </tr>                                           
                    </tbody>
                </table>
            </div>

        </div>
    )
}

/**
 * 
 * <div class="p-10 overflow-x-auto relative bg-white w-full rounded-[20px]">
                <table class="w-full">
                    <thead class="p-48 content border-b-gray-300  h-5">
                        <tr >
                            <th>Name</th>
                            <th>Creation</th>
                            <th>Last edit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>File</td>
                            <td>23-02-2022</td>
                            <td>22-03-2021</td>
                            <td>
                                <ButtonIcon iconName="edit" color="bg-black" iconColor="text-white" />
                                <ButtonIcon iconName="bin" color="bg-red-600" iconColor="text-white" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


 */