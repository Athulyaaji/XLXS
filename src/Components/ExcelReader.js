import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import * as XLSX from 'xlsx';


function ExcelReader() {

const [data,setData]=useState([])

const handleFileUpload=(e)=>{
    const reader=new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload=(e)=>{
        const data=e.target.result;
        const workbook=XLSX.read(data,{type:'binary'});
        const sheetName=workbook.SheetNames[0];
        const sheet=workbook.Sheets[sheetName];
        const parseData=XLSX.utils.sheet_to_json(sheet);
        setData(parseData)
    }
}

  return (
    <div>
        <input className='mt-5 mb-3'
        type='file'
        accept='.xlsx,.xls'
        onChange={handleFileUpload}
        
        />

       <Container>
           <Row>
               <Col >
                    {
                        data.length>0&&(
                           <table className="table">
                            <thead>
                                <tr>
                                    {Object.keys(data[0]).map((key)=>(
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((row,index)=>(
                                        <tr key={index}>
                                            {Object.values(row).map((value,index)=>(
                                                <td key={index}>{value}</td>
                                            ))}
                                        </tr>
                                    ))
                                }
                            </tbody>
                           </table>
                        )
                    }
               </Col>
                
           </Row>
       </Container>

    </div>
  )
}

export default ExcelReader