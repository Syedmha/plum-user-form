import React from 'react'
import '../Buttons/FormButtons.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

function FormButtons() {
    return (
        <>
            <div className='button-container'>
                <Button padding={'0 140px'} isLoading={false} loadingText="submitting" spinner colorScheme='blue' size='lg' variant='solid'>Next</Button>
            </div>
        </>

    )
}

export default FormButtons