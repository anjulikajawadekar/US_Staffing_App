import { useState, useEffect } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import base_url from '../../api/bootapi';
import Header from '../../APP_Component/Header';
import EmpSidebar from './EmpSidebar';

function ExportData() {

    const [result, setResult] = useState([]);

    const getData = () => {
        fetch(`${base_url}/getAllIssues`)
            .then(response => response.json())
            .then(res => setResult(res));
    }

    useEffect(() => {
        getData();
    },)

    return (

        <div className="container-fluid">
            <div className="row">

                <div className="col-12 h-100 master_backgroung_heder">
                    <Header />
                </div>
                <div className="col-2 master_backgroung_side">

                    <EmpSidebar />
                </div>

                <div className="col-10 scroll-bar">

                    <div className="container">
                        <h3 className="mt-3 text-success"><center>Export React Table Data into EXCEL Sheet</center></h3>
                        <div className="row mt-4">
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button btn btn-success mb-3"
                                table="table-to-xls"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="Export Data to Excel Sheet" />
                            <table className="table" id="table-to-xls">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Issue Description</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {result.map((res) =>
                                        <tr>
                                            <td></td>
                                            <td>{res.description}</td>
                                            <td>{res.status}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ExportData