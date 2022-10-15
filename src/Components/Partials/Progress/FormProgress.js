import React from 'react'
import '../Progress/FormProgress.css'
import { Progress } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function FormProgress() {
    return (
        <>
            <div className='progress-container'>
                <Grid templateColumns='repeat(4, 5fr)' gap={4}>
                    <GridItem >
                        <Progress size='sm' value={100} />
                    </GridItem>
                    <GridItem >
                        <Progress size='sm' value={100} />
                    </GridItem>
                    <GridItem >
                        <Progress size='sm' value={100} />
                    </GridItem>
                    <GridItem >
                        <Progress size='sm' value={100} />
                    </GridItem>
                </Grid>
            </div>


        </>


    )
}

export default FormProgress