import React from 'react'
import '../SelectAmount/SelectAmount.css'
import { Box, Stack, Text, Divider, Checkbox } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import SliderComp from './SliderComp/SliderComp'

function SelectAmount() {
    return (
        <>
            <Stack spacing={0}>
                <Box p={'16px'} className='card-1'>
                    <Text fontSize={'lg'} fontWeight={600} mb={'16px'}>Self (Individual)</Text>
                    <div className='avatar'>
                        <Avatar size='sm' bg='teal.500' marginRight={'8px'} />
                        <Text fontSize={'sm'} fontWeight={600}>John Doe</Text>
                    </div>
                </Box>
                <Divider mt={'16px'} mb={'24px'} />
                <Box p={'16px'} className='card-2' mb={'160px'}>
                    <Text fontSize={'md'} fontWeight={400} mb={'26px'}>Sum insured of ₹20,00,000 with a deductible of ₹3,00,000</Text>
                    <div>
                        <SliderComp />
                    </div>
                </Box>
            </Stack>
            <Box className='checkbox'>
                <Checkbox size={'lg'} isInvalid>I understand that this insurance will not be utilized until ₹3,00,000 (deductible) is exhausted.</Checkbox>
            </Box>
        </>
    )
}

export default SelectAmount