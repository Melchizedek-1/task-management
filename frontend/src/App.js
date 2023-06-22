import { useState } from "react";

function App() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-8">
      

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Task
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                        White
                    </td>
                    <td className="px-6 py-4">
                        Laptop PC
                    </td>
                    <td className="px-6 py-4">
                        $1999
                    </td>
                    <td className="px-6 py-4">
                        <div onClick={() => setShowModal(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</div>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                        Black
                    </td>
                    <td className="px-6 py-4">
                        Accessories
                    </td>
                    <td className="px-6 py-4">
                        $99
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Google Pixel Phone
                    </th>
                    <td className="px-6 py-4">
                        Gray
                    </td>
                    <td className="px-6 py-4">
                        Phone
                    </td>
                    <td className="px-6 py-4">
                        $799
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple Watch 5
                    </th>
                    <td className="px-6 py-4">
                        Red
                    </td>
                    <td className="px-6 py-4">
                        Wearables
                    </td>
                    <td className="px-6 py-4">
                        $999
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    {showModal &&
    <>
    <div className="flex overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-[1002] outline-none focus:outline-none">
        <div className='flex justify-center overflow-y-auto items-center  mx-auto my-auto'>
            <div className='flex flex-col items-center my-4 bg-[#FFFFFF] gap-4 w-[554px]'>
                <div className="w-full p-4">
                    <div className="mb-4">
                        <label className=" createFormLabels block text-sm mb-2">
                            Title
                        </label>
                        <input  className="border rounded w-full py-2 px-3" id="group_name" type="text" />
                    </div>
                    <div className="">
                        <label className=" createFormLabels block text-sm mb-2">
                            Description
                        </label>
                        <input  className="border rounded w-full py-2 px-3" id="group_name" type="text" />
                    </div>
                    <div className="">
                        <label className=" createFormLabels block text-sm mb-2">
                            Status
                        </label>
                        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option>Choose a status</option>
                            <option value="Pending">Pending</option>
                            <option value="In progress">In progress</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className="px-4 mt-4 flex flex-col justify-center items-center">
                        <button className='flex justify-center cursor-pointer w-[100px] py-1 mb-3 bg-[#CBD2E0] rounded-[20px]'>
                            Save
                        </button>
                        <div onClick={() => setShowModal(false)} className='flex justify-center cursor-pointer items-center w-[100px] py-1 border rounded-[20px]'>Cancel</div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <div className="opacity-25 fixed inset-0 z-[1001] bg-black"></div>
    </>}
    </div>
  );
}

export default App;
