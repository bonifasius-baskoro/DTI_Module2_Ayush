import axios from 'axios'
import { FC, useEffect, useState } from 'react'

const Index:FC = () => {
    const [tableData, setTableData] = useState<formSubmission[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/message").then((response)=>{
            setTableData(response.data as formSubmission[]);
        });
    },[])
  return (
    <div>TABLE
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>subject</th>
                    <th>message</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((message, index)=>(
                    <tr key={index}>
                        <td>{message.name}</td>
                        <td>{message.email}</td>
                        <td>{message.subject}</td>
                        <td>{message.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Index