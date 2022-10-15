import React from 'react'
import '../BasicDetails/BasicDetails.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

function BasicDetails() {
    return (
        <>
            <div className='basic-container'>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px 10px 0 0',
                                _hover: {
                                    backgroundColor: '#FFFFFF',

                                }
                            }}>
                                <Box className='accordion-btn-txt' flex='1' textAlign='left' fontWeight={600} fontSize={'18px'} backgroundColor={'#FFFFFF'}>
                                    Basic details (required)
                                </Box>
                                <AccordionIcon sx={{ backgroundColor: '#FFFFFF' }} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '0 0 10px 10px',
                            borderWidth: '1px 0 0 0',
                            borderStyle: 'solid',
                            borderColor: "#8C98AB",
                        }}>
                            <FormControl>
                                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Personal email address</FormLabel>
                                        <Input type='email' placeholder='Enter' />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Mobile number</FormLabel>
                                        <Input type='email' placeholder='Enter' />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Address line 01</FormLabel>
                                        <Input type='email' placeholder='Enter' />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Address line 02</FormLabel>
                                        <Input type='email' placeholder='Enter' />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Pincode</FormLabel>
                                        <Input type='email' placeholder='Enter' />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>State</FormLabel>
                                        <Input type='email' placeholder='Enter' />
                                    </GridItem>
                                    {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
                                </Grid>
                            </FormControl>


                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default BasicDetails