'use client'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider ,useTheme } from '@emotion/react';
import { createTheme } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'game', headerName: 'Game name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'asad', firstName: 'father..', age: 35 ,game:'Milkystar' },
  { id: 2, lastName: 'ahmed', firstName: 'father..', age: 42 },
  { id: 3, lastName: 'fahad', firstName: 'father..', age: 45 },
  { id: 4, lastName: 'mab', firstName: 'father..', age: 16 },
  { id: 5, lastName: 'tuqeer', firstName: 'father..', age: null },
  { id: 6, lastName: 'hassan', firstName: null, age: 150 },
  { id: 7, lastName: 'talha', firstName: 'father..', age: 44 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 9, lastName: 'hoor', firstName: 'father..', age: 65 },
];

export default function Table() {
    const { theme: applicationTheme} =useTheme()
    const theme = createTheme({
        palette:{
             mode: applicationTheme === 'light' ? 'light' :'dark'
        },
    })
  return (

    <ThemeProvider theme={theme}>
    <div style={{ height: 700, width: '90%',  backgroundColor: applicationTheme === 'light' ? 'white' :'rgb(2 6 23)'  , fontSize:'1rem' }} >
        
      <DataGrid
      
      
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,20]}
        checkboxSelection
      />
    </div>
    </ThemeProvider>
  );
}
