import { useEffect, useState } from "react"
import { Paragraph } from "../ParagraphContainer/PContainer"
import axios from "axios"
import { toast } from "react-toastify"
import Image from "next/image"
import { PopUpUser } from "../modal/popUp"
import { useSession } from "next-auth/react"


export function Users() {
    const [users, setUsers] = useState([])
    const [pop, setPop] = useState(false)
    const session = useSession()

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get(`${process.env.API_URL}/api/user`)
            if (data.status == 200) {
                setUsers(data.user)
            }
            else if (data.status == 400) {
                setUsers([])
                toast.error(data.error)
            }
        }
        getUsers()
    }, [pop])
    const handleState = () => {
        setPop(!pop)
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center p-3 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Paragraph style="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Users
                </Paragraph>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                    users.length == 0 && (
                        <div className="flex flex-col gap-3 w-full items-center justify-center m-5">
                            <Image
                                src={"/assets/noResults.png"}
                                width={500}
                                height={500}
                                alt="no result image"
                                className="w-24"
                            />
                            <p className="text-lg sm:text-3xl">There is not any User!</p>
                        </div>
                    )
                }
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 && (
                                users.map((item, index) =>
                                    <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                                        <th scope="row" className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className={`px-6 py-4 text-right ${session.data.user?.email==item.email && "hidden"}`}>
                                            <button className="text-blue-700" onClick={() => setPop(!pop)}>Delete</button>
                                        </td>
                                        {
                                            pop && <PopUpUser state={pop} data={item} changeState={handleState} />
                                        }
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}