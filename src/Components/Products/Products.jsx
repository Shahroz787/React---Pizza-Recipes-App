import React from "react";

import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((ProductsData) => {
          return (
            <ProductCard key={ProductsData.id}>
              <ProductImg src={ProductsData.img} alt={ProductsData.alt} />
              <ProductInfo>
                <ProductTitle>{ProductsData.name}</ProductTitle>
                <ProductDesc>{ProductsData.desc}</ProductDesc>
                <ProductPrice>{ProductsData.price}</ProductPrice>
                <ProductButton>{ProductsData.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
