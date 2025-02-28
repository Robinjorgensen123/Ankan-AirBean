import React, { useState, useEffect } from 'react';
import { getKaffemeny } from './apiService';

const DataDisplay = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;  

    const fetchMenu = async () => {
      try {
        const result = await getKaffemeny();
        if (mounted) {  
          console.log('Menu data:', result);
          setMenu(result);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchMenu();
  }, []);

  return null;  
};

export default DataDisplay;