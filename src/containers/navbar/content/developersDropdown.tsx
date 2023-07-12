import React from "react";
import styled from "styled-components";
import { Icon, DropdownSection, Heading, LinkList } from "./components";

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`;

const DevelopersDropdown = () => {
  return (
    <div>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Documentation</Heading>
          <p>Start integrating Stripe&rsquo;s products and tools</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a href="/">Elements</a>
                </li>
                <li>
                  <a href="/">Checkout</a>
                </li>
                <li>
                  <a href="/">Mobile apps</a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Topics</h4>
              <LinkList>
                <li>
                  <a href="/">Apple Pay</a>
                </li>
                <li>
                  <a href="/">Testing</a>
                </li>
                <li>
                  <a href="/">Launch Checklist</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <Heading>
            <a href="/">
              <Icon /> Full API Reference
            </a>
          </Heading>
          <Heading>
            <a href="/">
              <Icon /> API Status
            </a>
          </Heading>
          <Heading>
            <a href="/">
              <Icon /> Open Source
            </a>
          </Heading>
        </ul>
      </DropdownSection>
    </div>
  );
};

export default DevelopersDropdown;
