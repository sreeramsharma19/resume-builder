import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosDownload } from "react-icons/io";
import {Link} from 'react-router-dom'

function ResumeGenerator() {
    return (
        <div className='container-fluid'>
            <h2 className='mt-5 text-center'>Create a job-winning Resume in minutes</h2>
            <div style={{ height: '50vh' }} className='row justify-content-center align-items-center'> 
                <div className='col-4 border shadow p-5 text-center'>
                    <IoDocumentTextOutline className='text-primary fs-1 mb-3' />
                    <h4>Add your information</h4>
                    <p>Add pre-written examples to each section</p>
                    <h5>Step 1</h5>
                </div>
                <div className="col-1"></div>
                <div className="col-4 border shadow p-5 text-center">
                    <IoIosDownload className='text-danger fs-1 mb-3' />
                    <h4>Download your Resume</h4>
                    <p>Download and start applying</p>
                    <h5>Step 2</h5>
                </div>
            </div>
            <div className='text-center mb-5'>
              <Link to = {'/userform'}><button className='btn text-light' style={{backgroundColor:'brown'}}>Lets Start</button></Link>
            </div>
        </div>
    );
}

export default ResumeGenerator;