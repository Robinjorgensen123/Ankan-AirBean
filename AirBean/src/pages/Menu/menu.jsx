import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { getKaffemeny } from '../../components/Api/apiService';
import Header from '../../components/Header/Header';
import plusIcon from '../../assets/Images/+.png'; 

function Menu() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlePlusClick = (item) => {
    console.log('Produkt detaljer:', item);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const result = await getKaffemeny();
        setMenuData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div>Laddar...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!menuData) return <div>Ingen meny tillgänglig</div>;

  return (
    <>
      <Header />
      <div className="menu-page">
        <div className="menu-display">
          <h2>Meny</h2>
          <div className="menu-items">
            {menuData && menuData.filter(item => item.title).map((item) => (
              <div key={item.id} className="menu-item">
                <div className="item-content">
                  <img 
                    src={plusIcon} 
                    alt="Lägg till" 
                    className="plus-icon" 
                    onClick={() => handlePlusClick(item)}
                  />
                  <div className="item-info">
                    <div className="item-title-row">
                      <h3>{item.title}</h3>
                      <div className="price">{item.price} kr</div>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;