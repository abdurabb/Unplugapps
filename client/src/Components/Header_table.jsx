import React from 'react'
import '../Css/Header_Table.css'

import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you have Bootstrap CSS included
// import './your-tailwind-styles.css'; 

function Header_table() {
    return (
        <>

            <div className='headerTable '>
            {/* table  table-bordered */}
                <table className="tableMain">
                    <thead className=''>
                        <tr className='text-center color-blue bg-yellow-600'>

                            <th colSpan="4">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Header_table
