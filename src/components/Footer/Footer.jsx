import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#dashboard">Home</a>
              </li>
              <li>
                <a href="#links">Links</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" by "}
            <a href="mailto:sean.c.douglas@navy.mil">Admin</a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
