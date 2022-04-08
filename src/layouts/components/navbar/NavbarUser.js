import React from "react";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import * as Icon from "react-feather";
import classnames from "classnames";
import ReactCountryFlag from "react-country-flag";
import Autocomplete from "../../../components/@vuexy/autoComplete/AutoCompleteComponent";
//import { useAuth0 } from "../../../authServices/auth0/auth0Service"
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import { IntlContext } from "../../../utility/context/Internationalization";

const handleNavigation = (e, path) => {
  e.preventDefault();
  history.push(path);
};

const UserDropdown = (props) => {
  // const { logout, isAuthenticated } = useAuth0()
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={(e) => handleNavigation(e, "/pages/profile/userProfile")}
      >
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag="a"
        href="/pages/login"
        // onClick={(e) => {
        //   e.preventDefault();
        //   if () {
        //     return logout({
        //       returnTo:
        //         window.location.origin + process.env.REACT_APP_PUBLIC_PATH,
        //     });
        //   } else {
        //     history.push("/");
        //   }
        // }}
      >
        <Icon.Power size={14} className="mr-50" />
        <span
          className="align-middle"
          onClick={(e) => {
            window.localStorage.removeItem("auth-adtoken");
            window.location.push = "/";
            return false;
          }}
        >
          Log Out
        </span>
      </DropdownItem>
    </DropdownMenu>
  );
};

class NavbarUser extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axiosConfig
      .get(`/getoneseller`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  removeItem = (id) => {
    let cart = this.state.shoppingCart;

    let updatedCart = cart.filter((i) => i.id !== id);

    this.setState({
      shoppingCart: updatedCart,
    });
  };

  handleLangDropdown = () =>
    this.setState({ langDropdown: !this.state.langDropdown });

  render() {
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.state.data.name}
              </span>
              <span className="user-status">Available</span>
            </div>
            <span data-tour="user">
              <img
                src={this.state.data.image}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    );
  }
}
export default NavbarUser;
