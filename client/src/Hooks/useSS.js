import { createVendiaClient } from '@vendia/client';

const useSS = () => {
    const client = createVendiaClient({
        apiUrl: `https://i8tsr8zvx0.execute-api.us-west-2.amazonaws.com/graphql/`,
        websocketUrl: `wss://5awcxua859.execute-api.us-west-2.amazonaws.com/graphql`,
        apiKey: 'BpkmN4K1JYyrUcDpnexyH9gPPNQHptzb6jRcqPhPxXZL'
      });

      const {entities} = client
      return {entities}
}
export default useSS
//This file is to set up the Vendia client for our SS entity
