import React, { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data } from './Data'; 
import "./DashTable.css";

export default function DashTable() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(data);
    }, []);

    return (
        <div className="card dataTable">
            <DataTable className="DataTable" value={rows} >
                <Column field="branch" header="Branch"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="semester" header="Semester"></Column>
                <Column body={actionBodyTemplate} header="Edit"></Column>
            </DataTable>
        </div>
    );

    function actionBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <button className="p-button-text p-button-plain p-component update-button">Update</button>
                <button className="p-button-text p-button-plain p-component delete-button">Delete</button>
            </React.Fragment>
        );
    }
    
}
