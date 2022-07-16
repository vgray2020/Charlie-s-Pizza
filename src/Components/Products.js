import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/caprese.jpg';
import pimage2 from '../images/bacon.jpg';
import pimage3 from '../images/thin.jpg';

function Products() {
    return (
        <div id='products'>
            <h1>Specialty Pizzas</h1>
            <p>All hand tossed and made with the freshest ingredients </p>
            <div className='a-container'>
                <Productbox image={pimage1} title="CAPRESE - Mozzarella, Tomatoes, Basil" />
                <Productbox image={pimage2} title="BACON - Bacon, Alfredo Sauce" />
                <Productbox image={pimage3} title="OLIVE - Thin crust, olives, peppers" />
            </div>
            
        </div>
    )
}

export default Products;
