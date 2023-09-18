'use client'
import * as React from 'react';
import { DataGrid, GridActionsCellItem, GridEventListener, GridRowEditStopReasons, GridRowId, GridRowModel, GridRowModes, GridRowModesModel, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider ,useTheme } from '@emotion/react';
import { createTheme } from '@mui/material';


import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';

import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import SaveIcon from '@mui/icons-material/Save';

import CancelIcon from '@mui/icons-material/Close';



const rows = [
  { id: 1, lastName: 'asad', firstName: 'father..', age: 35 ,game:'Milkystar' },
  { id: 2, lastName: 'ahmed', firstName: 'father..', age: 42 },
  { id: 3, lastName: 'fahad', firstName: 'father..', age: 45 },
  { id: 4, lastName: 'mab', firstName: 'father..', age: 16 },
  { id: 5, lastName: 'tuqeer', firstName: 'father..', age: null },
  { id: 6, lastName: null, firstName: null, age: 150 },
  { id: 7, lastName: 'talha', firstName: 'father..', age: 44 },
  { id: 8, lastName: 'fara', firstName: null, age: 36 },
  { id: 9, lastName: 'fara', firstName: null, age: 36 },
  { id: 10, lastName: 'fara', firstName: null, age: 36 },
  { id: 11, lastName: 'fara', firstName: null, age: 36 },
  { id: 12, lastName: 'fara', firstName: null, age: 36 },
  { id: 13, lastName: 'fara', firstName: null, age: 36 },
  { id: 14, lastName: 'fara', firstName: null, age: 36 },
  { id: 15, lastName: 'hoor', firstName: 'father..', age: 65 },
];

export default function Table() {
    const { theme: applicationTheme} =useTheme()
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});


    const theme = createTheme({
        palette:{
             mode: applicationTheme === 'light' ? 'light' :'dark'
        },
    })

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
          event.defaultMuiPrevented = true;
        }
      };
    
    
    
    
    
     const handleEditClick = (id: GridRowId) => () => {
        alert("Edit button click")
        // setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
      };
    
    
    
    
     const handleSaveClick = (id: GridRowId) => () => {
        // setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
      };
    
    
    
    
     const handleDeleteClick = (id: GridRowId) => () => {
         alert("delete button click")
        // setRows(rows.filter((row) => row.id !== id));
      };
    
    
    
    
     const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
          ...rowModesModel,
          [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });
    
    
    
    
       const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
        //   setRows(rows.filter((row) => row.id !== id));
        }
      };
    
    
    
    
     const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        // setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
      };
    
    
    
    
     const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
      };
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
      
        {
          field: 'actions',
          type: 'actions',
          headerName: 'Actions',
          width: 100,
          cellClassName: 'actions',
          getActions: ({ id }) => {
            const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
             
            // eslint-disable-next-line react-hooks/rules-of-hooks
      
            
      
      
      
      
      
           if (isInEditMode) {
              return [
                <GridActionsCellItem
                  icon={<SaveIcon />}
                  label="Save"
                  sx={{
                    color: 'primary.main',
                  }}
                  onClick={handleSaveClick(id)}
                />,
                <GridActionsCellItem
                  icon={<CancelIcon />}
                  label="Cancel"
                  className="textPrimary"
                  onClick={handleCancelClick(id)}
                  color="inherit"
                />,
              ];
            }
      
      
      
      
           return [
              <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                className="textPrimary"
                onClick={handleEditClick(id)}
                color="inherit"
              />,
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={handleDeleteClick(id)}
                color="inherit"
              />,
            ];
          },
      }
      ];
      

  return (

    <ThemeProvider theme={theme}>
    <div style={{ height: 700, width: '90%',  backgroundColor: applicationTheme === 'light' ? 'white' :'rgb(2 6 23)'  , fontSize:'1rem' }} >
        
      <DataGrid
      slots={{ toolbar: GridToolbar }}
      onRowClick={()=>{
        alert("hallo")
      }}
      
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
