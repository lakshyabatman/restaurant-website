import Card from 'antd/lib/card';
import React from 'react'

import Sandwiches from '../../Assets/Images/Sandwiches.jpeg'
import Pasta from '../../Assets/Images/Pasta.jpeg'
import Salad from '../../Assets/Images/Salad.jpeg'
import Pancakes from '../../Assets/Images/Pancakes.jpeg'
import './index.css'
import Badge from 'antd/lib/badge';
import Rate from 'antd/lib/rate';
const FeaturedDishes = () => {

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        background: '#364d79',
      };
      
    return (
        <div className="featured-dishes" id="featured">
            <div className="container-1">
            <h2>Popular Dishes</h2>
            </div>

            <div className="card-grid margin-top container-1">
            <Card
                hoverable
                className="card"
                cover={<img alt="example" src={Sandwiches} className="card-img" />}
            >
                <Rate allowHalf disabled defaultValue={4} style={{marginBottom:5}}/>
                <Card.Meta title="Grilled Cheese Sandwich" description="A crusty delight with a hearty filling of vegetables and cheddar cheese grilled to perfection." />
            </Card>
            <Card
                hoverable
                className="card"
                cover={<img alt="example" src={Salad} className="card-img" />}
            >
                <Rate allowHalf disabled defaultValue={4.5} style={{marginBottom:5}} />
                <Card.Meta title="Greek Salad" description="A refreshing blend of crunchy greens, tangy Roma tomatoes, garden-fresh red onions, Kalamata olives with sliced feta cheese enveloped in our special greek salad dressing." />
            </Card>
            <Card
                hoverable
                className="card"
                cover={<img alt="example" src={Pasta} className="card-img"/>}
            >
                <Rate allowHalf disabled defaultValue={5} style={{marginBottom:5}}/>
                <Card.Meta title="White Sauce Pasta" description="A creamy fusion of penne and cheese sauteed with broccoli, bell peppers, and onions." />
                
            </Card>
            <Card
                className="card"
                hoverable
                cover={<img alt="example" src={Pancakes} className="card-img"/>}
            >
                <Rate allowHalf disabled defaultValue={4.5} style={{marginBottom:5}} />
                <Card.Meta title="Pancakes" description="Classic fluff pancakes topped with butter and served with maple syrup on the side."/>
            </Card>
            </div>
        </div>
    )
}


export default FeaturedDishes