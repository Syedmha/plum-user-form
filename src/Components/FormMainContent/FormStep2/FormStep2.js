import React from 'react'
import '../FormStep2/FormStep2.css'
import { Heading, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import SelectAmount from './SelectAmount/SelectAmount'
import { useStepsContext } from '../../../Context/StepsContext'

function FormStep2() {
    const { steps, setSteps } = useStepsContext();

    return (
        <>
            <div className='step2-container'>
                <div className='txt-container'>
                    <IconButton marginRight={'1.5rem'} isRound onClick={() => setSteps(steps - 1)} size={'lg'} aria-label='Search database' icon={<ChevronLeftIcon />} />

                    <Stack spacing={2}>
                        <Heading size='lg'>Select your deductible amount</Heading>
                        <Text fontSize='xl'>Select the deductible amount for the policy (or policies) below.<br></br>(what is a deductible?)
                        </Text>
                    </Stack>
                </div>
                <SelectAmount />
            </div>
        </>

    )
}

export default FormStep2