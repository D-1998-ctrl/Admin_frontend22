import React, { useState, useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import Select from 'react-select';
import Switch from "react-switch";
import './services.css'
const Services = () => {

    const [isServiceFormOpen, setIsServiceFormOpen] = useState(false);
    const handleServices = () => {
        setIsServiceFormOpen(!isServiceFormOpen);
    };
    const handleServiceFormClose = () => {
        setIsServiceFormOpen(false);
    };

    const [service, setService] = useState(false)

    const handleServiceWitch = (checked) => {
        setService(checked)
    }





    return (
        <>
            <div>
                <h1>Services</h1>
            </div>
            <div className='create-service-header'>
                <div className='service-actions-btns'>
                    <button className='btn1' onClick={handleServices}>Create Service</button>
                </div>
            </div>

            <div className={`service-form-container ${isServiceFormOpen ? "service-form-open" : ""}`}>
                <div className="service_header_title">
                    <h3>Create invoice</h3>
                    <RxCross2 onClick={handleServiceFormClose} style={{ cursor: 'pointer', fontSize: '25px', color: 'rgb(24, 118, 211)' }} />
                </div>

                <div className='services-form'>
                    <div><h3>Service </h3></div>

                    <div style={{ marginTop: '30px' }}>
                        <label>Service Name</label>
                        <input type="text" placeholder='Service name' />
                    </div>


                    <div >
                        <label>Description</label>
                        <input type="text" placeholder='Description' />
                    </div>


                    <div className='input-box-service'>
                        <div>
                            <label>Rate</label>
                            <input type='text' placeholder='Rate' />
                        </div>
                        <div>
                            <label style={{ marginBottom: '8px' }}>Rate Type</label>
                            <Select placeholder='Rate Type' />
                        </div>
                    </div>

                    <div className='service-switch'>
                        <Switch
                            onChange={handleServiceWitch}
                            checked={service}
                            onColor="#3A91F5"
                            onHandleColor="#FFF"
                            handleDiameter={10}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            height={20}
                            width={32}
                            className="job-template-react-switch"
                             label='Tax'
                        />
                    </div>








                </div>


                <div className='billing-ivoice-buttons'>
                    <button className='btn1'>Save</button>
                    <button onClick={handleServiceFormClose} className='btn2'>Cancle</button>

                </div>

            </div>




        </>
    )
}

export default Services
