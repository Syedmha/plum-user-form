import React, { useState, useEffect } from 'react'
import FormStep1 from './FormStep1/FormStep1'
import FormStep3 from '../FormMainContent/FormStep3/FormStep3'
import FormStep2 from '../FormMainContent/FormStep2/FormStep2'
import '../FormMainContent/FormIndex.css'
import FormStep4 from './FormStep4/FormStep4'
import { useStepsContext } from '../../Context/StepsContext'


function FormIndex() {
    const { steps, setSteps } = useStepsContext();
    let form = <FormStep1 />;

    if (steps === 1) {
        form = (<FormStep1 />);
    }
    else if (steps === 2) {
        form = (<FormStep2 />);
    } else if (steps === 3) {
        form = (<FormStep3 />);
    }
    else if (steps === 4) {
        form = (<FormStep4 />);
    }

    return (
        <>
            <div className='form-content-container'>
                {form}
            </div>
        </>
    )
}

export default FormIndex