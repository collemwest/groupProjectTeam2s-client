import React from "react";
import { Switch, Ticket } from "../../components";

import { Header, Nav, NavDiv, SignInDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import NavBar from "../../components/NavBar";
import { TicketContainer } from "./styledComponents/ticketContainer";

const TicketLayout = ({ username }) => {
  return (
    <SignInDiv>
      <Header>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart username={username} />
          </div>
        </SignUpBar>

        <NavDiv>
          <Nav>
            <NavBar />
          </Nav>
        </NavDiv>
      </Header>
      <TicketContainer>
        <h4>Thank you for your purchase!</h4>
        <h3>Tickets</h3>
        <Ticket />
      </TicketContainer>
      <Footer />
    </SignInDiv>
  );
};

export { TicketLayout };