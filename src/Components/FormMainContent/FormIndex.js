import React from 'react'
import FormStep1 from './FormStep1/FormStep1'
import FormStep2 from './FormStep2/FormStep2'
import '../FormMainContent/FormIndex.css'

function FormIndex() {
    return (
        <>
            <div className='form-content-container'>
                {/* <FormStep1 /> */}
                <FormStep2 />
            </div>
        </>
    )
}

export default FormIndex