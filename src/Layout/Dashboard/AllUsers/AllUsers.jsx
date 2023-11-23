import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import {  FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [],refatch} = useQuery({
        queryKey: ['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user =>{}

    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refatch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                    )
            }
        });

    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl font-semibold">All Users: </h2>
                <h2 className="text-3xl font-semibold">Total Users:{users.length} </h2>
                
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-black font-bold bg-orange-300">
                            <th>
                                #
                            </th>
                            <th>NAME</th>                          
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td className="text-lg">
                                    {user.name}
                                </td>
                                <td className="text-lg">
                                    {user.email}

                                </td>
                                <td className="text-lg">
                                <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-400 "><FaUsers className="text-white hover:text-orange-400 text-2xl"></FaUsers>
                                    </button>
                                    </td>
                                <th>
                                <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-ghost btn-lg bg-red-700"><FaTrashAlt className="hover:text-red-600 text-white"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
            
        </div>
    );
};

export default AllUsers;