import React from 'react'
import FormStep1 from './FormStep1/FormStep1'
import FormStep2 from './FormStep2/FormStep2'
import '../FormMainContent/FormIndex.css'
import FormStep3 from './FormStep3/FormStep3'

function FormIndex() {
    return (
        <>
            <div className='form-content-container'>
                {/* <FormStep1 /> */}
                <FormStep3 />
            </div>
        </>
    )
}

export default FormIndex