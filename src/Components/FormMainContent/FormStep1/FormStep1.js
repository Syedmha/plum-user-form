import React from 'react'
import '../FormStep1/FormStep1.css'
import { Heading, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import PlanDetails from './PlanDetails/PlanDetails'
import BasicDetails from './BasicDetails/BasicDetails'

function FormStep1() {
    return (
        <>
            <div className='step1-container'>
                <Stack spacing={2}>
                    <Heading size='lg'>Choose your plan</Heading>
                    <Text fontSize='xl'>Hello Anisha,
                        <br></br> Increase yours and your family's health insurance cover by ₹20 lakhs with Super top-up!
                    </Text>
                </Stack>
                <PlanDetails />
                <BasicDetails />
            </div>
        </>
    )
}

export default FormStep1