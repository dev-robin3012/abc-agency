import React from "react";
import styled from "styled-components";
import { Heading } from "./components";

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`;

const ProductsDropdown = () => {
  return (
    <div>
      <div data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Heading color="blue">Payments</Heading>
              <p>A complete payments platform</p>
            </div>
          </li>
          <li>
            <div>
              <Heading color="green">Billing</Heading>
              <p>Build and scale your recurring business model</p>
            </div>
          </li>
          <li>
            <div>
              <Heading color="teal">Connect</Heading>
              <p style={{ marginBottom: 0 }}>Everything platforms need to get sellers paid</p>
            </div>
          </li>
        </ProductsSection>
      </div>
    </div>
  );
};

export default ProductsDropdown;
