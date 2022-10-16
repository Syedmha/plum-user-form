import React from 'react'
import '../Buttons/FormButtons.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useStepsContext } from '../../../Context/StepsContext'
import { useUserDetailsContext } from '../../../Context/UserDetails';

function FormButtons() {
    const { steps, setSteps } = useStepsContext();
    const { schema, userDataState, userDataDispatch } = useUserDetailsContext();

    const handleNext = async (event) => {
        event.preventDefault();
        setSteps((steps < 4) ? steps + 1 : steps - 3)
    }

    return (
        <>
            <div className='button-container'>
                <Button onClick={handleNext} padding={'0 140px'} isLoading={false} loadingText="submitting" spinner colorScheme='blue' size='lg' variant='solid'>Next</Button>
            </div>
        </>

    )
}

export default FormButtons