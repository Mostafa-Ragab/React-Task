import React from 'react';
import Translate from 'react-translate-component';
import  StudentList from '../studentList.component';
import './tables.css';

const Tables = ({status}) => (
    <div className=" row justify-content-center  mt-3">
        <div className="col-auto">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <Translate content="TableName" component="th" />
                        <Translate content="TableStatus" component="th"/>
                        <Translate content="TableMajor" component="th"/>

                    </tr>
                </thead>
                <tbody>
                    <StudentList status={status} />
                </tbody>
            </table>
        </div>
    </div>
);

export default Tables;