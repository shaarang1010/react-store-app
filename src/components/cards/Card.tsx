import React from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type CardComponentProps = {
  cardImg?: string;
  cardTitle?: string;
  cardInfo?: React.ReactNode;
  cardBadgeText?: string;
  onClickHandler(e: React.MouseEvent<HTMLButtonElement>): void;
  handlerText?: string;
};

export const CardComponent: React.FC<CardComponentProps> = ({
  cardImg,
  cardInfo,
  cardTitle,
  cardBadgeText,
  onClickHandler,
  handlerText,
}) => {
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>
          <>
            {cardTitle}{" "}
            {cardBadgeText && (
              <Badge pill bg="dark">
                {`$${cardBadgeText}`}
              </Badge>
            )}
          </>
        </Card.Title>
        <Card.Text>{cardInfo}</Card.Text>
        <Button variant="primary" onClick={onClickHandler}>
          {handlerText}
        </Button>
      </Card.Body>
    </Card>
  );
};
