import { useEffect, useState } from 'react';
export default function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   URL could change after initial page load
  // e.g. when a user clicks on a category to fetch its products
  useEffect(() => fetchData(), [url]);
  function fetchData() {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        console.log(`fetched data from ${url} ->`, json);
        setData(json);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(`error fetching data from ${url} ->`, error);
      });
  }

  //   returning an array instead of object to allow data to be renamed by the caller
  return [loading, error, data];
}
