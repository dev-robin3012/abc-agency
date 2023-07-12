import React from "react";
import { Heading, Icon } from "./components";

const CompanyDropdown = () => {
  return (
    <div>
      <div data-first-dropdown-section>
        <ul>
          <Heading>
            <a href="/">
              <Icon /> About Stripe
            </a>
          </Heading>
          <Heading>
            <a href="/">
              <Icon />
              Customers
            </a>
          </Heading>
          <Heading>
            <a href="/">
              <Icon />
              Jobs
            </a>
          </Heading>
          <Heading>
            <a href="/">
              <Icon />
              Environment
            </a>
          </Heading>
        </ul>
      </div>
    </div>
  );
};

export default CompanyDropdown;
