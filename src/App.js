import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [menuItems, setmenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const itemsFiltered = items.filter(item => item.category === category); 
    setmenuItems(itemsFiltered);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories menuItems={menuItems} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
    )
}

export default App;
