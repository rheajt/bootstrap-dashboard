import React, { ComponentType } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import { Menu, ChevronRight, Home } from 'react-feather';
import { Link } from 'react-router-dom';

interface Props {}

interface ListItemProps {
  label: string;
  icon: ComponentType;
}

const ListItem: React.FC<ListItemProps> = ({ label, icon: I }) => {
  return (
    <ListGroup.Item className="sidebar-item py-2 px-2">
      {label}
      <I />
    </ListGroup.Item>
  );
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar bg="light" fixed="top" className="py-0 px-1">
        <Button variant="light" className="mr-3">
          <Menu />
        </Button>
        <Navbar.Brand as={Link} to="/">
          Dashboard
        </Navbar.Brand>
        <Navbar.Text className="ml-auto mr-3">
          <b>Signed in: </b>Jordan Rhea
        </Navbar.Text>
        <Button variant="primary" size="sm">
          Sign Out
        </Button>
      </Navbar>

      <Container fluid className="pl-0 pr-0 d-flex flex-row main">
        <div className="sidebar">
          <ListGroup variant="flush">
            <ListItem label="Home" icon={Home} />
          </ListGroup>
          <ListGroup variant="flush">
            <ListItem label="Admin" icon={ChevronRight} />
          </ListGroup>
        </div>
        <div className="p-2">{children}</div>
      </Container>
    </>
  );
};

export default Layout;
