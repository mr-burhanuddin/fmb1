import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import db from './firebase'
import Feedback from './Feedback';

// ES7 snippets to do 'rfce'

function Home() {
    const [menus, setMenu] = useState([]);
useEffect(() => {
   db.collection('menu').onSnapshot(snapshot => {
      
       setMenu(snapshot.docs.map(doc => ({
           id: doc.id,
           menu: doc.data()
       })));
   })
}, []);

    return (
        <div className='home'>
            <Banner />
            <Feedback />
 
            <div className='home__section'>
                {
                    menus.map(({id, menu}) => (
                        <Card
                        key={id}
                        src="http://faizulmawaidilburhaniyah.com/fmb-thaali-raza/wp-content/uploads/2020/07/05-saifee-mohallah-karachi-highlights-1.jpg? w=520"
                        title={id}
                        Desert={menu.Desert}
                        Bread={menu.Bread}
                        Dish={menu.Dish}
                        Rice={menu.Rice}
                        Curry={menu.Curry}
                        />
                    ))
                    }
                   
            </div>
                
                 <div className="home">
                    <Feedback />   

                 </div>
        </div>
    )
}

export default Home
