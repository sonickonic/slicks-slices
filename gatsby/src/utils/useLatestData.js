import { useEffect, useState } from 'react';

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
        query: `
        query {
          StoreSettings(id: "downtown"){
            name
            slicemaster{
              name
            }
            hotSlices{
              name
            }
          }
        }`,
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
