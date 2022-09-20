import React from 'react'
import { createVendiaClient } from '@vendia/client';

function useFetch() {
    const client = createVendiaClient({
        apiUrl: 'https://amoej1r6g6.execute-api.us-west-2.amazonaws.com/graphql/',
        websocketUrl: 'wss://k59wej25i2.execute-api.us-west-2.amazonaws.com/graphql',
        apiKey: '2aviuYwaVpZtVgoBTbLpWmxwbwbhTFSTMNbXTjhQWJGg',
    })
    const { entities } = client;
    
    return { entities }
    
}

export default useFetch 