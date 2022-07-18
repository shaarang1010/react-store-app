import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CardComponent } from "../../components/cards/Card";
import { ModalComponent } from "../../components/modal/Modal";
import { TableComponent, TableData } from "../../components/table/Table";
import { Product } from "../../models/Product";
import { httpRequest } from "../../utils/httpRequest";

const getAllProducts = async () => {
  return await httpRequest("https://fakestoreapi.com/products").catch((err) => {
    throw new Error(err.message);
  });
};

const Dashboard = () => {
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState<Product>();

  const onCardImageClickHandler = (product: Product) => {
    setProductSelected(product);
    setIsModalOpen(true);
    formatProductData();
  };

  const formatProductData = () => {
    let tableData: TableData[] = [];
    if (productSelected) {
      tableData = [
        { key: "description", value: productSelected.description },
        { key: "category", value: productSelected.category },
        { key: "rating", value: `${productSelected.rating.rate}/5` },
        { key: "users purchased", value: productSelected.rating.count },
      ];
    }
    return tableData;
  };

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
    <Row className="mt-3">
      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          setIsOpen={() => setIsModalOpen(!isModalOpen)}
          modalHeading={productSelected ? productSelected?.title : ""}
          modalBody={<TableComponent tableData={formatProductData()} />}
          onModalCloseHandler={() => setIsModalOpen(false)}
        />
      )}
      {!listOfProducts && <h2>Loading....</h2>}
      {listOfProducts &&
        listOfProducts.map((product) => (
          <Col sm={3} key={product.id}>
            <CardComponent
              cardImg={product.image}
              cardBadgeText={product.price}
              cardTitle={product.title}
              onClickHandler={() => {}}
              onImageClickHandler={() => {
                onCardImageClickHandler(product);
              }}
              handlerText="Add to bag"
            />
          </Col>
        ))}
    </Row>
  );
};

export default Dashboard;
