import React from 'react'
import '../PlanDetails/PlanDetails.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider,
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function PlanDetails() {
    return (
        <>
            <div className='plan-container'>
                <Accordion allowToggle>
                    <AccordionItem sx={{ backgroundColor: '#FFFFFF' }} >
                        <h2>
                            <AccordionButton sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px 10px 0 0',
                                _hover: {
                                    backgroundColor: '#FFFFFF',

                                }
                            }}>
                                <Box className='accordion-btn-txt' flex='1' textAlign='left' fontWeight={600} fontSize={'18px'} backgroundColor={'#FFFFFF'}>
                                    Plan details
                                </Box>
                                <AccordionIcon sx={{ backgroundColor: '#FFFFFF' }} />
                            </AccordionButton>
                            <Divider />
                        </h2>
                        <AccordionPanel pb={4} sx={{
                            backgroundColor: '#FFFFFF'
                        }}>
                            <Text sx={{ backgroundColor: '#FFFFFF' }} color={'gray.600'} fontWeight={400} fontSize={'14px'}>Your plan type</Text>
                            <Select placeholder='Select your plan'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default PlanDetails