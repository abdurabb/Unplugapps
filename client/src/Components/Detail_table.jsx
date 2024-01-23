import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Css/Detail_Table.css'
import LoadingSpinner from './LoadingSpinner';





function Detail_table() {

  const [isLoad, setIsLoad] = useState(false)
  const [data, setData] = useState([])
  const [errorMessage, setErrorMessage] = useState("");
  let total = 0;

  useEffect(() => {
    axios.get('http://5.189.180.8:8010/detail').then((res) => {
      setData(res.data)
      setIsLoad(false)
    }).catch((err) => {
      setErrorMessage('Somthing Wrong in Detail Table')
      setIsLoad(false)
    })
  }, [])

  return (
    <>
      {errorMessage ?
        <div> {errorMessage}</div>
        :

        <div>

          {isLoad ?
            <div>

              <div className='d-flex justify-center items-center h-screen'>
                <LoadingSpinner />
              </div>

            </div>
            :

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
                  {data.map((data, index) => {
                   total+=data.qty * data.rate
                   
                    return (
                      <>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{data.item_code}</td>
                          <td>{data.item_name}</td>
                          <td>{data.qty}</td>
                          <td>{data.rate}</td>
                          <td>{data.qty * data.rate}</td>
                          
                        </tr>
                      </>
                    )
                  })}
                  <tr>
                    <td colSpan="4"></td>
                    {/* <td ></td>
                    <td ></td> */}
                    <td>Total</td>
                    <td>{total}</td>
                  </tr>


                </tbody>
              </table>
            </div>
          }
        </div>
      }
    </>
  )

}

export default Detail_table
