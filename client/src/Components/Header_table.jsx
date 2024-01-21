import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Css/Header_Table.css'

import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you have Bootstrap CSS included
// import './your-tailwind-styles.css'; 

function Header_table() {

    const [isLoad,setIsLoad] = useState(false)

    useEffect(() => {
        axios.get('http://5.189.180.8:8010/header').then((res) => {
            
        }).catch((err) => {


        })
    }, [])


    return (
        <>
            
            <div className='headerTable '>
                {/* table  table-bordered */}
                <table className="tableMain">
                    <thead className=''>
                        <tr className='text-center color-blue bg-yellow-600'>

                            <th colSpan="9">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" colSpan=""></th>
                            <td>Vr NO:-</td>
                            <td>000</td>
                            <td colSpan="1"></td>
                            <td>Vr Date</td>
                            <td>0000</td>

                            <td colSpan="1"></td>
                            <td>Status</td>
                            <td>A</td>
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
                            <td colSpan="3">Thorntonasdfasfd</td>

                            <td>Ac Amt</td>
                            <td>700000</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Header_table
