import { createVendiaClient } from '@vendia/client';

const useDMV = () => {
    const client = createVendiaClient({
        apiUrl: `https://2p9xdkxysg.execute-api.us-west-2.amazonaws.com/graphql/`,
        websocketUrl: `wss://dxs7zt01y4.execute-api.us-west-2.amazonaws.com/graphql`,
        apiKey: 'CJjSKcGiMaegKf6ZaJLT9wusrntJAW5wxGrRaorj7iGu'
      });

      const {entities} = client
      return {entities}
}
export default useDMV