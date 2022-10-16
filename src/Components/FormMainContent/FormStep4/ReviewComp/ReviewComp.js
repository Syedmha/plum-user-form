import React from 'react'
import '../ReviewComp/ReviewComp.css'
import { Box, Stack, Text, Divider, Checkbox } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


function ReviewComp() {
    return (
        <>
            <Stack spacing={0}>
                <Box p={'16px 32px'} className='card-1'>
                    <Stack spacing={4}>
                        <Text fontSize={'md'} fontWeight={400} color={'gray.500'} >Plan selected</Text>
                        <Text fontSize={'md'} fontWeight={400} color={'gray.500'} >Mobile number</Text>
                        <Text fontSize={'md'} fontWeight={400} color={'gray.500'} >Address line 01</Text>
                        <Text fontSize={'md'} fontWeight={400} color={'gray.500'}>Pincode</Text>
                        <Text fontSize={'md'} fontWeight={400} color={'gray.500'}>State</Text>
                    </Stack>
                    <Stack spacing={4} ml={'60px'}>
                        <Text fontSize={'md'} fontWeight={600} color={'gray.800'} >One</Text>
                        <Text fontSize={'md'} fontWeight={600} color={'gray.800'} >Individual x 1</Text>
                        <Text fontSize={'md'} fontWeight={600} color={'gray.800'} >₹3L</Text>
                        <Text fontSize={'md'} fontWeight={600} color={'gray.800'}>₹000</Text>
                        <Text fontSize={'md'} fontWeight={600} color={'gray.800'}>₹000</Text>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default ReviewComp