import * as React from "react";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import "url-search-params-polyfill";
import BasketSummary from "./BasketSummary";
import { IApplicationState } from "./Store";

import logo from "./logo.svg";

interface IState {
  search: string;
}

interface IProps extends RouteComponentProps {
  basketCount: number;
}

class Header extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      search: ""
    };
  }
  public componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get("search") || "";
    this.setState({ search });
  }
  public render() {
    return (
      <header className="header">
        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            value={this.state.search}
            onChange={this.handleSearchChange}
            onKeyDown={this.handleSearchKeydown}
          />
          <BasketSummary count={this.props.basketCount} />
        </div>
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">React Shop</h1>
        <nav>
          <NavLink
            to="/products"
            className="header-link"
            activeClassName="header-link-active"
          >
            Products
          </NavLink>
          <NavLink
            to="/contactus"
            className="header-link"
            activeClassName="header-link-active"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/admin"
            className="header-link"
            activeClassName="header-link-active"
          >
            Admin
          </NavLink>
        </nav>
      </header>
    );
  }
  private handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };
  private handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.history.push(`/products?search=${this.state.search}`);
    }
  };
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    basketCount: store.basket.products.length
  };
};

export default connect(mapStateToProps)(withRouter(Header));
