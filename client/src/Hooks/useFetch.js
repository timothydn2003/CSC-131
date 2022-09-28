import React from 'react'
import { createVendiaClient } from '@vendia/client';

function useFetch() {
    const client = createVendiaClient({
        apiUrl: 'https://dv4wp9iyfc.execute-api.us-west-2.amazonaws.com/graphql/',
        websocketUrl: 'wss://9mb2aemyqd.execute-api.us-west-2.amazonaws.com/graphql',
        apiKey: 'D4mAPkeqdJrVAuSzmTHYdRDwrx91gdzCT2v5RbSDuXSV',
    })
    const { entities } = client;
    
    return { entities }
    
}

export default useFetch 