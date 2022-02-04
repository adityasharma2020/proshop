import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';


const HomeScreen = () => {
  return( 
    <>
        <h1>Latest products</h1>
        <Row> {/* Here, we are looping to the products that we are getting from products.js file */}
            {products.map(product => (
                <Col key={product._id} sm ={12} md={6} lg={4} xl={3} >
                    <Product product = {product} />
                </Col>
            ))}  {/*and we are using Map to create a list NOTE: Map takes an arrow function */}
        </Row>
  </>
  )
};

export default HomeScreen;
