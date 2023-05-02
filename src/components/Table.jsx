import React from "react";
import TableSkeleton from './TableSkeleton'
import { NotFound } from '../pages/NotFound';
import Up from './Up'
import Down from './Down'
import Edit from './Edit'
import Delete from './Delete'

export const Table = ({items, isLoading, sortField, directionSort, editTR, deleteTR, searchValue}) => {
    const [field, setField] = React.useState('clientId')
    const sceleton = [...new Array(20)].map((_, i) => <TableSkeleton key={i}/>)
    const Direction = () => {
        return (
            directionSort ? <Up/> : <Down/>
        )
    }
    const sortFieldOnDirection = (field) => {
        sortField(field)
        setField(field)
    }
    const finalItems = items.filter(obj => {
      if(obj.clientName.toLowerCase().includes(searchValue.toLowerCase())){
          return true
      } else return false
    })
    return(
        <div className="table-container">
            {
                isLoading ?
                    sceleton
                : 
                  finalItems.length != 0 ?
                        <table class="table" style={{width: '1200px'}}>
                          <thead>
                            <tr>
                              <th scope="col" onClick={()=>sortFieldOnDirection('clientId')} style={{cursor: 'pointer'}}>
                                Client ID {field == 'clientId' ? <Direction/> : null}
                               </th>
                              <th scope="col" onClick={()=>sortFieldOnDirection('clientName')} style={{cursor: 'pointer'}}>
                                Client Name {field == 'clientName' ? <Direction/> : null}
                                </th>
                              <th scope="col" onClick={()=>sortFieldOnDirection('TRN_PPSN')} style={{cursor: 'pointer'}}>
                                TRN/PPSN {field == 'TRN_PPSN' ? <Direction/> : null}
                                </th>
                              <th scope="col" onClick={()=>sortFieldOnDirection('yearEnd')} style={{cursor: 'pointer'}}>
                                Year End {field == 'yearEnd' ? <Direction/> : null}
                                </th>
                              <th scope="col" onClick={()=>sortFieldOnDirection('ARD')} style={{cursor: 'pointer'}}>
                                ARD {field == 'ARD' ? <Direction/> : null}
                                </th>
                              <th scope="col" onClick={()=>sortFieldOnDirection('companyNumber')} style={{cursor: 'pointer'}}>
                                Company number {field == 'companyNumber' ? <Direction/> : null}
                                </th>
                              <th scope="col">Email</th>
                              <th scope="col">Phone number</th>
                              <th scope="col">Company address</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                finalItems.map( (item, i)=> (
                                    <tr>
                                        <td>{item.clientId}</td>
                                        <td>{item.clientName}</td>
                                        <td>{item.TRN_PPSN}</td>
                                        <td>{item.yearEnd}</td>
                                        <td>{item.ARD}</td>
                                        <td>{item.companyNumber}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.companyAddress}</td>
                                        <td style={{display:'flex', justifyContent:'space-around'}}>
                                            <span style={{cursor: 'pointer'}} onClick={()=>editTR(i)}><Edit style={{cursor: 'pointer'}}/></span>
                                            <span style={{cursor: 'pointer'}} onClick={()=>deleteTR(i)}><Delete style={{cursor: 'pointer'}}/></span>
                                        </td>
                                    </tr>
                                ))
                            }
                          </tbody>
                        </table>
                    : <NotFound/>
            }
        </div>
    )
}