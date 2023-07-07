import { useEffect, useState } from 'react';
export default function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   URL could change after initial page load
  // e.g. when a user clicks on a category to fetch its products
  useEffect(() => fetchData(), [url]);
  function fetchData() {
    let isLatestRequest = true;
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (!isLatestRequest) return;
        setLoading(false);
        console.log(`fetched data from ${url} ->`, json);
        setData(json);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(`error fetching data from ${url} ->`, error);
      });

    // when the next request is made, this request is no longer the latest request
    // hence, the data from the old request should NOT set the data
    return () => {
      isLatestRequest = false;
    };
  }

  //   returning an array instead of object to allow data to be renamed by the caller
  return [loading, error, data];
}
