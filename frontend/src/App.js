import { useEffect, useState } from "react";
import { addTask, getTasks } from "./api/taskApis";
import axios from "axios";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [editTitle, seteditTitle] = useState('');
    const [editdescription, seteditdescription] = useState('');
    const [editStatus, seteditStatus] = useState('');
    const [allTasks, setAllTasks] = useState([]);
    const [editTask, setEditTask] = useState('');

    useEffect(() => {
        axios.get("/api/tasks")
          .then((res) => {
            setAllTasks(res.data.tasks);
          })
          .catch((err) => console.log(err));
      }, [showAdd]);

    const submitTaskHandler = () => {
        addTask(title, description, status);
        setShowAdd(false);
    }

  return (
    <div className="p-8">
        <div className="py-4">
            <div className="cursor-pointer" onClick={() => setShowAdd(!showAdd)}>
                Add Task
            </div>
            {showAdd && <div>
                <div className="flex flex-row gap-4 py-2">
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded w-full py-2 px-3" />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded w-full py-2 px-3" />
                </div>
                <div className="flex flex-row gap-4 py-2">
                    <select id="underline_select" value={status} onChange={(e) => setStatus(e.target.value)} className="block py-2.5 px-0 w-full border-0 border-b-2 ">
                        <option>Choose a status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <input type="submit" onClick={submitTaskHandler} className="border cursor-pointer text-white bg-green-500 rounded w-full py-2 px-3" />
                </div>
            </div>}
        </div>
      

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
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {allTasks?.map((task, index) =>
                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {task?.title}
                    </th>
                    <td className="px-6 py-4">
                        {task?.description}
                    </td>
                    <td className="px-6 py-4">
                        {task?.status}
                    </td>
                    <td className="px-6 py-4">
                        <div onClick={() => { setShowModal(true); setEditTask(task); seteditTitle(task?.title); seteditdescription(task?.description); seteditStatus(task?.status);}} className="font-medium text-blue-600 cursor-pointer dark:text-blue-500 hover:underline">Edit</div>
                    </td>
                </tr>
                )}
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
                        <input value={editTitle} onChange={() => seteditTitle} className="border rounded w-full py-2 px-3" id="group_name" type="text" />
                    </div>
                    <div className="">
                        <label className=" createFormLabels block text-sm mb-2">
                            Description
                        </label>
                        <input value={editdescription} onChange={(e) => seteditdescription(e.target.value)} className="border rounded w-full py-2 px-3" id="group_name" type="text" />
                    </div>
                    <div className="">
                        <label className=" createFormLabels block text-sm mb-2">
                            Status
                        </label>
                        <select id="underline_select" value={editStatus} onChange={() => seteditStatus} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
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
