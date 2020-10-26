import { useEffect, useState } from 'react';

const gql = String.raw;
const deets = gql`
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

function useLatestData() {
  const [hotSlices, setHotSlices] = useState();
  const [slicemaster, setSlicemaster] = useState();

  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemaster(res.data.StoreSettings.slicemaster);
      });
  }, []);
  return {
    hotSlices,
    slicemaster,
  };
}

export default useLatestData;
