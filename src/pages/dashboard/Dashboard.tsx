import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CardComponent } from "../../components/cards/Card";
import { ModalComponent } from "../../components/modal/Modal";
import { TableComponent, TableData } from "../../components/table/Table";
import { Notification } from "../../components/toasts/Toast";
import { useApi } from "../../hooks/useApi";
import { Product } from "../../models/Product";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState<Product>();
  const { data: listOfProducts, error } = useApi<Product[]>();
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const onCardImageClickHandler = (product: Product) => {
    setProductSelected(product);
    setIsModalOpen(true);
    formatProductData();
  };

  const onAddProductHandler = (product: Product) => {
    setProductSelected(product);
    setIsNotificationShown(true);
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

  return (
    <>
      <Row className=" mt-5 mb-3 pt-5">
        {isNotificationShown && (
          <Notification
            header="Adding to your cart"
            show={isNotificationShown}
            onClose={() => setIsNotificationShown(false)}
            description={`${
              productSelected && productSelected.title
            } has been added to your cart`}
          />
        )}
      </Row>
      <Row className="mt-5">
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
                onClickHandler={() => onAddProductHandler(product)}
                onImageClickHandler={() => {
                  onCardImageClickHandler(product);
                }}
                handlerText="Add to bag"
              />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Dashboard;
