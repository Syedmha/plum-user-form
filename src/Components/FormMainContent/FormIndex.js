import React from 'react'
import FormStep1 from './FormStep1/FormStep1'
import '../FormMainContent/FormIndex.css'
import FormStep4 from './FormStep4/FormStep4'

function FormIndex() {
    return (
        <>
            <div className='form-content-container'>
                {/* <FormStep1 /> */}
                <FormStep4 />
            </div>
        </>
    )
}

export default FormIndex