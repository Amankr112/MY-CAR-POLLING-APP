import React from 'react';
import { RidesProvider } from './Components/ridecontext'; 
import AppNavigator from './Components/appnavigator'; 

export default function App() {
    return (
        <RidesProvider>
            <AppNavigator />
        </RidesProvider>
    );
}
