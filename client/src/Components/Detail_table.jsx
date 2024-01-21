import React from 'react'
import '../Css/Detail_Table.css'
function Detail_table() {
  return (
    <div>
      <div className='headerTable '>
        {/* table  table-bordered */}
        <table className=" table  table-bordered   tableMainTop">
          <thead className=''>
            <tr className='text-center MainHead'>
              <th colSpan="6" className=''>Detail</th>
            </tr>
          </thead>
          <tbody className=''>
          <tr className='firstHead'>
              <th scope="row">Sr No</th>
              <td>Item Code</td>
              <td>Item Name</td>
              <td>Qty</td>
              <td>Rate</td>
              <td>Amount</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@twitter</td>
              <td>@twitter</td>

            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>

            <tr>
              <th colSpan="4"></th>
              
              <td>Total</td>
              <td>7000</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Detail_table
