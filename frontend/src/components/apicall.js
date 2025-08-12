import api from './api';

useEffect(() => {
  let isMounted = true;
  setLoading(true);

  api.get('/products', {
    params: { category: 'Accessories', page: 1, limit: 20 }
  })
  .then(response => {
    if (isMounted) {
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    }
  })
  .catch(err => setError(err))
  .finally(() => {
    if (isMounted) setLoading(false);
  });

  return () => { isMounted = false; };
}, []);
