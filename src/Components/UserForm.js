import React from 'react'
import './UserForm.css'
import FormProgress from './Partials/Progress/FormProgress'
import FormIndex from './FormMainContent/FormIndex'
import FormButtons from './Partials/Buttons/FormButtons'

function UserForm() {
    return (
        <>
            <div className='form-container'>
                <FormProgress />
                <FormIndex />
                <FormButtons />
            </div>

        </>
    )
}

export default UserForm