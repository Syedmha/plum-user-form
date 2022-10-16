import React from 'react'
import '../FormStep3/FormStep3.css'
import { Heading, Stack, CheckboxGroup, Checkbox, Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useStepsContext } from '../../../Context/StepsContext'


function FormStep3() {
    const { steps, setSteps } = useStepsContext();

    return (
        <>
            <div className='step3-container'>
                <div className='txt-container'>
                    <IconButton marginRight={'1.5rem'} isRound onClick={() => setSteps(steps - 1)} size={'lg'} aria-label='Search database' icon={<ChevronLeftIcon />} />
                    <Heading size='lg'>Declaration</Heading>
                </div>
                <div className='checkbox'>
                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                        <Stack spacing={[1, 5]} direction={['column']} >
                            <Checkbox ><Text fontSize={'xl'} noOfLines={3}>
                                I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</Text></Checkbox>
                            <Checkbox ><Text fontSize={'xl'} noOfLines={3}>
                                I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.</Text></Checkbox>
                            <Checkbox ><Text fontSize={'xl'} noOfLines={3}>
                                I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)</Text></Checkbox>
                            <Checkbox ><Text fontSize={'xl'} noOfLines={3}>
                                I understand that this policy doesn't cover Pre-existing diseases.</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </div>
            </div>
        </>
    )
}

export default FormStep3