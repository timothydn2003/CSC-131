import { createVendiaClient } from '@vendia/client';

const useDOS = () => {
    const client = createVendiaClient({
        apiUrl: `https://o1oh3yozub.execute-api.us-west-2.amazonaws.com/graphql/`,
        websocketUrl: `wss://fcqgyhxd8b.execute-api.us-west-2.amazonaws.com/graphql`,
        apiKey: '5NL4Q3XxtYzunuArRSSMxCT1j8M8N7fqkBi5tgYTxr3q'
      });

      const {entities} = client
      return {entities}
}
export default useDOS