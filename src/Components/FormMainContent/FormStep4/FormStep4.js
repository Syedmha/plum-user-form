import React from 'react'
import '../FormStep4/FormStep4.css'
import { Heading, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import ReviewComp from '../FormStep4/ReviewComp/ReviewComp'
function FormStep4() {
    return (
        <>
            <div className='step4-container'>
                <div className='txt-container'>
                    <IconButton marginRight={'1.5rem'} isRound size={'lg'} aria-label='Search database' icon={<ChevronLeftIcon />} />

                    <Stack spacing={2}>
                        <Heading size='lg'>Select your deductible amount</Heading>
                        <Text fontSize='xl'>Select the deductible amount for the policy (or policies) below.<br></br>(what is a deductible?)
                        </Text>
                    </Stack>
                </div>
                <ReviewComp />
            </div>
        </>
    )
}

export default FormStep4