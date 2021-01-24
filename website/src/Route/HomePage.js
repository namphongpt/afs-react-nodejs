import React from "react";
import { render } from "react-dom";
import { MenuPub } from "../Components/PublicMenu";
import "../assets/pages.css";
import Carousel from "react-bootstrap/Carousel";
import sliderOne from "../assets/icons/slider-1.jpg";
import sliderTwo from "../assets/icons/slider-2.jpg";
import sliderThree from "../assets/icons/slider-3.jpg";
import ScrollTop from "react-scrolltop-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "../assets/icons/logo.png";
import ProductList from "../Components/Ecommerce";
const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" &&
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />}
      {status === "success" &&
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="container-fluid pages">
      <Helmet>
        <title>Ads for socials - Welcome!</title>
        <meta
          name="description"
          content="Ads for social is a starting point for social media advertising. It offers customizable basic templates of social media campaigns for small businesses at affordable prices."
        />
      </Helmet>
      <MenuPub />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Take your imagination</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderTwo} alt="Third slide" />

          <Carousel.Caption>
            <h3>The high Quality</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderThree} alt="Third slide" />

          <Carousel.Caption>
            <h3>without having a professional studio</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-fluid">
        <div className="banner-specials main">
          <div className="container">
            <div className="row">
            <div className="col-md-6">
              <img width="100%" style={{ maxHeight: '400px', marginTop: '30px' }} className="img-responsive" src="https://images.unsplash.com/photo-1591716775167-a6b11f898571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
            </div>
            <div className="col-md-6">
              <img width="100%" style={{ maxHeight: '400px', marginTop: '30px' }} className="img-responsive" src="https://images.unsplash.com/photo-1591716775138-017af352d778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
            </div>
            <div className="col-md-6">
              <img width="100%" style={{ maxHeight: '400px', marginTop: '30px' }} className="img-responsive" src="https://images.unsplash.com/photo-1591696154658-eef027c4c62a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
            </div>
            <div className="col-md-6">
              <img width="100%" style={{ maxHeight: '400px', marginTop: '30px' }} className="img-responsive" src="https://images.unsplash.com/photo-1591536238757-fcba34b775a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
            </div>
            </div>
          </div>
          <p>&nbsp;</p>
        </div>
        <div className="jumbotron featured-products">
          <div className="row">
            <div className="col-md-12 page-heading">
              <h1>Shop collections</h1>
            </div>
            <ProductList />
            <div className="col-md-12">
              <a href="/login" className="btn btn-primary show-all">
                Show All Products
              </a>
            </div>
          </div>
        </div>
        <section className="suscribe-area">
          <div class="form">
            <h2>Suscribe</h2>
            <MailchimpSubscribe url={url} />
          </div>
        </section>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-left text-md-left">
            <MDBRow>
              <MDBCol md="3">
                <span className="logo">
                  <img className="logo-image" src={logo} />
                </span>
                <p>
                  <br />
                  Ads for social is a starting point for social media
                  advertising. It offers customizable basic templates of social
                  media campaigns for small businesses at affordable prices.
                </p>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright{" "}
              <a href="https://www.mdbootstrap.com"> adsforsocials.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
      <ScrollTop
        text=""
        distance={100}
        breakpoint={768}
        style={{ backgroundColor: "red" }}
        className="scroll-your-role"
        speed={300}
        target={0}
        icon={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFudYTFxddZ0POEgD-dYxCI9Q6aN8O06PReNeupfPQKman3SnT&usqp=CAU`}
      />
    </div>
  );
};
