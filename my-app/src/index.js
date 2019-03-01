import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Image, Text} from 'semantic-ui-react';

class TopTop extends React.Component {
  render() {
    return(
        <Menu borderless className="toptop">
        </Menu>
    )
  }
}

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "#4a4a4a", fontSize: "14px" };
    const itemStyle1 = { color: "#5d9732", fontSize: "14px"};
    return (
        <Menu borderless className="topmenu">
        <Container>
          <Image fitted left src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTYgMTU0Ij48cGF0aCBmaWxsPSIjNUU5NzMyIiBkPSJNMjU2LjcgOTEuNGwtOS4yLTQuMmMtNi40LTIuOC0xNC41LTYuMy0xNC41LTE1LjUgMC00LjggMy41LTExIDExLTExczEwLjcgNS41IDEyLjUgOWMyIDMuNSA0LjQgNy41IDEwLjEgNy41IDUuMiAwIDguOC0zLjkgOC44LTkgMC03LjQtOC4zLTE5LjctMzAuNS0xOS43LTIzLjQgMC0zMiAxNC0zMiAyNyAwIDE3LjEgMTQuNyAyNC4zIDIwLjIgMjYuOSA0LjYgMi4yIDE1LjQgNyAxOC4zIDkuNSAyLjUgMi4xIDYgNS4xIDYgMTEuMyAwIDYuOC01IDExLjQtMTEuNiAxMS40LTcuNCAwLTEwLjctNC44LTE1LjEtMTEtMi42LTMuNS01LjItNy4yLTEwLjMtNy4yLTUuMyAwLTkuNCA0LjQtOS40IDkuOSAwIDcuNCA4LjggMjIuMyAzNC4yIDIyLjMgMjcuNCAwIDMzLjEtMTguNiAzMy4xLTI4LjkuMS0xNy43LTEzLjEtMjQuMy0yMS42LTI4LjN6bS01MC42LTU5Yy40LTMuNy0xLjEtNi4zLTIuNi04LjctMy41LTUtNS40LTcuOS00LjktMTIuNy43LTcgNi44LTExLjcgMTQuMi0xMC45IDguMy45IDE1LjUgOC4xIDE0LjEgMjEuNi0yLjIgMjAuNi0yMi4xIDM2LTI5IDM1LjItMi44LS4zLTQuNS0yLjctNC4zLTUuMy4yLTIgMS0zIDIuNy00LjYgNS41LTUuNCA5LjMtOS42IDkuOC0xNC42eiIvPjxwYXRoIGZpbGw9IiNFRTMxMjQiIGQ9Ik0xOTYuMyA3MS42Yy03LjgtNy40LTEwLjQtNi0xNS41LTIxLjUtMi41LTcuNi03LjEtMTYuNi0xNC45LTE5LjMtMTMuNS00LjYtMjcuNyA1LjYtMzcgMTQuNkMxMTkgNTUgMTE0LjggNjYgODkuMiA4My4yIDgyIDg4IDczLjQgOTEuMiA2NSA5Mi44Yy0xMC42IDItMTkuNS0xLjItMjkuOS0yQzE1LjQgODkuMSAwIDk2LjYgMCAxMDguNHMzMC4xIDMyIDU1LjQgMzYuNmMzMi40IDUuOSA1OC40IDQuMiA3NS43LTEgMzEuMi05LjUgNDguMy0yMS40IDYyLjgtMzYgOS42LTkuNiAxNS0yNC40IDIuNC0zNi40eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik05Ny40IDEwNGMtNi42IDIuNy0xNy42IDMtMTguNS0uOS0uNi0yLjggNS0xLjQgMTEuMi01IDguMS00LjYgMTAuNi03IDEyLjgtNC45IDIuOCAyLjcgMi44IDcuNC01LjUgMTAuOHptNDYuOC0zMS4xYy0yMi4xIDE3LTMxLjggMjQuNC0zNC44IDE2LjgtMS42LTQuMiA1LjQtNi45IDExLjUtMTIuOCA3LjctNy41IDE2LjgtMTkuMiAyNS4zLTI2LjEgOS45LTggMTYuMS01LjcgMTguMy0uOSAzLjMgNy4xLTggMTMuNS0yMC4zIDIzeiIvPjxwYXRoIGZpbGw9IiM1RTk3MzIiIGQ9Ik0yODguOCAxNDMuNGMwIDIuOS0yLjQgNS4zLTUuNCA1LjMtMyAwLTUuNC0yLjMtNS40LTUuMyAwLTIuOSAyLjQtNS4yIDUuNC01LjIgMy0uMSA1LjQgMi4yIDUuNCA1LjJ6bS05LjUgMGMwIDIuMyAxLjggNC4yIDQuMSA0LjJzNC0xLjkgNC00LjJjMC0yLjMtMS43LTQuMi00LjEtNC4yLTIuMiAwLTQgMS45LTQgNC4yem0zLjMgMi43aC0xLjJ2LTUuMmMuNS0uMSAxLjItLjIgMi0uMiAxIDAgMS40LjIgMS44LjQuMy4yLjUuNi41IDEuMSAwIC42LS41IDEuMS0xLjEgMS4ydi4xYy41LjIuOC42LjkgMS4zLjIuOC4zIDEuMS40IDEuM2gtMS4zYy0uMi0uMi0uMy0uNi0uNC0xLjMtLjEtLjUtLjQtLjgtMS4xLS44aC0uNmwuMSAyLjF6bTAtMi45aC42Yy43IDAgMS4yLS4yIDEuMi0uOCAwLS41LS40LS44LTEuMS0uOC0uMyAwLS41IDAtLjcuMXYxLjV6Ii8+PC9zdmc+" />
          <Menu.Item style={itemStyle}>REWARDS</Menu.Item>
          <Menu.Item style={itemStyle}>ORDER NOW</Menu.Item>
          <Menu.Item style={itemStyle}>MENU</Menu.Item>
          <Menu.Item style={itemStyle}>LOCATIONS</Menu.Item>
          <Menu.Item style={itemStyle}>GIFT CARDS</Menu.Item>
          <Menu.Item style={itemStyle}>LOG IN</Menu.Item>
          <Menu.Item style={itemStyle1} fitted position={"right"}>0 ITEMS</Menu.Item>
          <Menu.Item><Icon name="shopping bag"/></Menu.Item>
        </Container>
        </Menu>
  )
  }
}


class Middle extends React.Component {
  render() {
    const itemStyle1 = { color: "#5d9732", fontSize: "14px"};
    return (

        <Menu borderless className="middle">
        <Container>
        <Menu.Item style={itemStyle1} position="centered">FIND YOUR NEAREST LOCATION</Menu.Item>
        </Container>
        </Menu>
  )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image centered fluid src="https://raw.githubusercontent.com/ilee72/ilee72.github.io/master/images/chili.JPG" />
  )
  }
}


class Chili extends React.Component {

  render() {
    return (
        <div>
          <TopTop/>
        <TopMenu/>
        <Middle/>
        <FullWidthImage/>
        </div>
  );
  }
}


ReactDOM.render(<Chili/>, document.getElementById('root'));