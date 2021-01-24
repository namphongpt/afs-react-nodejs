import React from "react";
import { render } from "react-dom";
import "../assets/pages.css";
import axios from "axios";
let rs = 0;

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      jsonResponse: 0
    };

    this.Auth = this.Auth.bind(this);
  }

  Auth() {
    const url = new URL("https://api.hermepos.com/V2/auth");

    let params = {
      api_key:
        "93fa3e4624676f2e9aa143911118b4547087e9b6e0b6076f2e1027d7a2da2b0a",
      private: "cf1e8c14e54505f60aa10ceb8d5d8ab3",
    };

    url.search = new URLSearchParams(params).toString();

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        //console.log(json[0].token);
        this.setState({ jsonResponse: json[0].token });
      });
  }


  product(data) {
      let html = `<article className="card cart-item">
      <div className="card-body">
        <img
          className="img-responsive" width="100%" height="300"
          src="https://api.hermepos.com${data.image}"
        />
        <h3 style="height: 60px; margin-bottom: 25px;">${data.descripcion}</h3>
        <b>Price: $${data.costo} <strong class="currency-site">USD</strong></b>
        <hr />
        <button class="btn btn-block btn-primary">
          View Product
        </button>
      </div>
    </article>`;

    return html;
  }


  products() {
    if(this.state.jsonResponse != 0){
        const url = new URL("https://api.hermepos.com/V2/products");

    let params = {
      token: this.state.jsonResponse,
      limit: "3",
      body: '{ "id_almacen": "2" }'
    };

    url.search = new URLSearchParams(params).toString();

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        [...json].map((product) => {
             //console.log(this.product(product));
             let item = document.getElementById('products_list');
             item.innerHTML =  item.innerHTML + this.product(product);
        });

        //this.setState({ jsonResponse: json[0].token });
      });
    }
  }

  componentDidMount() {
    this.Auth();
    setTimeout(() => {
        this.products();
    }, 3000);
  }

  render() {
    return (
        <section className="shop-section" id="products_list" data-token={this.state.jsonResponse}></section>
    );
  }
}

export default ProductList;
