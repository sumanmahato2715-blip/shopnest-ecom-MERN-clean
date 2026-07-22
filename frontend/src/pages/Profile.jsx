useEffect(() => {
  if (!user) {
    navigate('/login');
    return;
  }
  const fetchMyOrders = async () => {
    try {
      const res = await fetch('/api/orders/myorders', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const data = await res.json();
      if (res.ok) {
        setOrders(Array.isArray(data) ? data : []);
      } else {
        if (res.status === 401) {
          logout();
          navigate('/login');
        }
        setOrders([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchMyOrders();
}, [user, navigate]);
