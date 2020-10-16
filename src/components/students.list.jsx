import React from 'react';

const StudentList  = ({students})=>{
    if(Object.keys(students).length>0)
    {
        return students.map((student)=>{
            return(
                <tr key={Math.random()}>  
                    <td>{student.Name}</td>
                    <td>{student.Status}</td>
                    <td>{student.Major}</td>
                </tr>
            );
        })
    }
}

export default StudentList;