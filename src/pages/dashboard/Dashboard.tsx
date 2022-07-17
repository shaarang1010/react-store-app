import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CardComponent } from "../../components/cards/Card";
import { Product } from "../../models/Product";
import { httpRequest } from "../../utils/httpRequest";

const getAllProducts = async () => {
  return await httpRequest("https://fakestoreapi.com/products").catch((err) => {
    throw new Error(err.message);
  });
};

const Dashboard = () => {
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setListOfProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Row>
      {!listOfProducts && <h2>Loading....</h2>}
      {listOfProducts &&
        listOfProducts.map((product) => (
          <Col sm={3} key={product.id}>
            <CardComponent
              cardImg={product.image}
              cardBadgeText={product.price}
              cardTitle={product.title}
              onClickHandler={() => {}}
              handlerText="Add to bag"
            />
          </Col>
        ))}
    </Row>
  );
};

export default Dashboard;
