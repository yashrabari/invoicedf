// import React, { useMemo } from 'react'
// import { useTable } from 'react-table'
// import MOCK_DATA from './MOCK_DATA.json'
// import { COLUMNS } from './columns'
// // import './table.css'
// import styled from 'styled-components'

// export const BasicTable = () => {
//   const columns = useMemo(() => COLUMNS, [])
//   const data = useMemo(() => MOCK_DATA, [])

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     footerGroups,
//     rows,
//     prepareRow
//   } = useTable({
//     columns,
//     data
//   })

//   return (
//     <>
//       <table className='table'>

//         <thead className='hover'>
//           {headerGroups.map(headerGroup => (
//             <tr className='tr'{...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th className='th'{...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <scrollView horizo> 
//           <tbody  >
//             {/* {rows.map(row => {
//             prepareRow(row)
//             return ( */}
//             {/* <tr className='tr' {...row.getRowProps()}> */}
//             {/* {row.cells.map(cell => { */}
//             <tr className='tr'>
//               <th></th>
//               <th>
//                 <input
//                   // {changes}
//                   // value={companyData ? companyData.gst_number : ""}
//                   // className="form-control"
//                   // readOnly={true}
//                   type="text"
//                   placeholder="Enter product name..."
//                 />
//               </th>
//               <th>
//                 <input
//                   type="text"
//                   placeholder="Enter product name..."
//                 />
//               </th>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td><td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td><td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td><td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               {/* })} */}
//             </tr>
//             {/* ) */}
//             {/* })} */}
//           </tbody>
//         </scrollView>
//         {/* <tfoot >
//           {footerGroups.map(footerGroup => (
//             <tr {...footerGroup.getFooterGroupProps()}>
//               {footerGroup.headers.map(column => (
//                 <td {...column.getFooterProps()}>{column.render('Footer')}</td>
//               ))}
//             </tr>
//           ))}
//         </tfoot> */}
//       </table>
//     </>
//   )
// }

// export const Styles = styled.div`
//   .table {
//     border: 1px solid #ddd;

//     .tr {
//       :last-child {
//         .td {
//           border-bottom: 0;
//         }
//       }
//     }

//     .th,
//     .td {
//       padding: 5px;
//       border-bottom: 1px solid #ddd;
//       border-right: 1px solid #ddd;
//       background-color: #fff;
//       overflow: hidden;

//       :last-child {
//         border-right: 0;
//       }
//     }

//     &.sticky {
//       overflow: scroll;
//       .header,
//       .footer {
//         position: sticky;
//         z-index: 1;
//         width: fit-content;
//       }

//       .header {
//         top: 0;
//         box-shadow: 0px 3px 3px #ccc;
//       }

//       .footer {
//         bottom: 0;
//         box-shadow: 0px -3px 3px #ccc;
//       }

//       .body {
//         position: relative;
//         z-index: 0;
//       }

//       [data-sticky-td] {
//         position: sticky;
//       }

//       [data-sticky-last-left-td] {
//         box-shadow: 2px 0px 3px #ccc;
//       }

//       [data-sticky-first-right-td] {
//         box-shadow: -2px 0px 3px #ccc;
//       }
//     }
//   }
// `
import React, { useState, useMemo } from 'react';
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'

import { useTable } from 'react-table'
// import { makeStyles } from '@material-ui/core/styles';



export const BasicTable = () => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })
  // const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
  }

  const handleRemoveFields = id => {
    const values = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <>
      <table className='table'  onSubmit={handleSubmit}>

        <thead className='hover'>
          {headerGroups.map(headerGroup => (
            <tr className='tr'{...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className='th'{...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>



        {
          inputFields.map(inputField => (
            <tr key={inputField.id}>
              <th>hi</th>
              <th><input
                name="lastName"
                label="Last Name"
                placeholder='Enter product Name'
                variant="filled"
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 80
                }}
                name="lastName"
                label="Last Name"
                placeholder='HSN/SAC'
                variant="filled"
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 50
                }}
                name="lastName"
                label="Last Name"
                variant="filled"
                placeholder='QTY.'
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 70
                }}
                name="lastName"
                label="Last Name"
                variant="filled"
                placeholder='PRICE'
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 50
                }}
                name="lastName"
                label="Last Name"
                variant="filled"
                placeholder='0'
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 40
                }}
                name="lastName"
                label="Last Name"
                variant="filled"
                disabled={true}
                placeholder='%'
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 40
                }}
                name="lastName"
                label="Last Name"
                variant="filled"
                disabled={true}
                placeholder='%'
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 40
                }}
                name="lastName"
                label="Last Name"
                
                placeholder='%'
                variant="filled"
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>
              <th><input
                style={{
                  width: 40
                }}
                name="lastName"
                label="Last Name"
                
                placeholder='%'
                variant="filled"
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              />+<input
                  style={{
                    width: 40
                  }}
                
                placeholder='₹'
                  name="lastName"
                  label="Last Name"
                  variant="filled"
                  value={inputField.lastName}
                  onChange={event => handleChangeInput(inputField.id, event)}
                /></th>
              <th><input
                style={{
                  width: 120
                }}
                name="lastName"
                label="Last Name"
                placeholder='TOTAL'
                variant="filled"
                value={inputField.lastName}
                onChange={event => handleChangeInput(inputField.id, event)}
              /></th>

              <button disabled={inputFields.length === 1} style={{
                backgroundColor:'lightgray'
              }} onClick={() => handleRemoveFields(inputField.id)}>
                {/* <RemoveIcon /> */}-
              </button>
              <button style={{
                backgroundColor:'blueviolet'
              }}
                onClick={handleAddFields}
              >
                {/* <AddIcon /> */}+
              </button>
            </tr>
          ))
        }



        <button
          // className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          // endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</button>
      </table>
    </>
  );
}
