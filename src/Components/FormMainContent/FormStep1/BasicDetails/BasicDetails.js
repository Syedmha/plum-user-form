import React from 'react'
import '../BasicDetails/BasicDetails.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider,
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { useUserDetailsContext } from '../../../../Context/UserDetails'

function BasicDetails() {
    const { schema, userDataState, userDataDispatch } = useUserDetailsContext();
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
                            <Divider />
                        </h2>
                        <AccordionPanel pb={4} sx={{
                            backgroundColor: '#FFFFFF',
                        }}>
                            <FormControl onSubmit={console.log("submitted")}>
                                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Personal email address</FormLabel>
                                        <Input type='email' placeholder='Enter' onChange={(event) => { userDataDispatch({ type: "EMAIL", playload: event.target.value }) }} />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Mobile number</FormLabel>
                                        <Input type='tel' placeholder='Enter' onChange={(event) => { userDataDispatch({ type: "MOBILE", playload: event.target.value }) }} />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Address line 01</FormLabel>
                                        <Input type='text' placeholder='Enter' onChange={(event) => { userDataDispatch({ type: "ADD1", playload: event.target.value }) }} />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Address line 02</FormLabel>
                                        <Input type='text' placeholder='Enter' onChange={(event) => { userDataDispatch({ type: "ADD2", playload: event.target.value }) }} />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>Pincode</FormLabel>
                                        <Input type='text' placeholder='Enter' onChange={(event) => { userDataDispatch({ type: "PIN", playload: event.target.value }) }} />
                                    </GridItem>
                                    <GridItem>
                                        <FormLabel color={'gray.600'} fontWeight={400} fontSize={'14px'}>State</FormLabel>
                                        <Input type='text' placeholder='Enter' onChange={(event) => { userDataDispatch({ type: "DEDUCT", playload: event.target.value }) }} />
                                    </GridItem>
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