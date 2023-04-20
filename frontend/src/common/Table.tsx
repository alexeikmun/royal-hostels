interface Props {
    headers: string[];
    body: string[][];
}

const Table = ({ headers, body }: Props) => {
    return(
        <div className="overflow-x-auto mt-5 w-full">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    { headers.map((header) => 
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-orange-600 text-left">
                            {header}
                        </th>
                        )
                    }
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {body.map((row) => 
                            <tr className="py-10">
                                {
                                    row.map((element: string, elementIndex: number) =>    
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            { element }
                                        </td>
                                    )
                                }
                                <td className="flex justify-center items-center w-full">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-orange-600 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700"
                                    >
                                        Select
                                    </a>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table