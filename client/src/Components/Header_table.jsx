import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import '../Css/Header_Table.css'



import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you have Bootstrap CSS included
// import './your-tailwind-styles.css'; 

function Header_table() {

    const [isLoad, setIsLoad] = useState(false)
    const [data, setData] = useState([])
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsLoad(true);
        axios.get('http://5.189.180.8:8010/header').then((res) => {
            setData(res.data)
            setIsLoad(false)
        }).catch((err) => {
            // setErrorMessage('Somthing Wrong in Header Table')
            // setIsLoad(false)

        })
    }, [])


    return (
        <>
            {errorMessage ?
                <div> {errorMessage}</div>
                :
                <>
                    {isLoad ?
                        <div>

                            <div className='d-flex justify-center items-center h-screen'>
                                <LoadingSpinner />
                            </div>

                        </div>

                        :
                        <div className='headerTable '>
                            {/* table  table-bordered */}
                            <table className="tableMain">
                                <thead className=''>
                                    <tr className='text-center color-blue bg-yellow-600'>

                                        <th colSpan="9">Header</th>
                                    </tr>
                                </thead>
                                {data.map((data, index) => {
                                    console.log(index);
                                    return (
                                        <tbody>
                                            <tr>
                                                <th scope="row" colSpan=""></th>
                                                <td>Vr NO:-</td>
                                                <td>{index}</td>
                                                <td colSpan="1"></td>
                                                <td>Vr Date</td>
                                                <td>{data.vr_date}</td>

                                                <td colSpan="1"></td>
                                                <td>Status</td>
                                                <td>{data.status}</td>
                                            </tr>
                                            <tr className=''>
                                                <th scope="row">&nbsp;</th>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr className=''>
                                                <th scope="row"></th>
                                                <td>Ac Name</td>
                                                <td colSpan="3">{data.ac_name}</td>

                                                <td>Ac Amt</td>
                                                <td>{data.ac_amt}</td>
                                            </tr>
                                            <tr className='mt-4'>
                                                <th scope="row">&nbsp;</th>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>

                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Header_table
