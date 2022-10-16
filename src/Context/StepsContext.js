import React, { createContext, useContext, useState } from 'react'
import { useControllableProp, useControllableState } from '@chakra-ui/react'

const StepsContext = createContext({
    steps: 1,
    setSteps: () => { },
});

const useStepsContext = () => useContext(StepsContext);

const StepsContextProvider = ({ children }) => {
    const [steps, setSteps] = useState(1);

    return (
        <StepsContext.Provider value={{ steps, setSteps }}>
            {children}
        </StepsContext.Provider>
    )
}

export { useStepsContext, StepsContextProvider } 