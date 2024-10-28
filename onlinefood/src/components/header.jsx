import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState,useEffect } from "react";
import logo from "../assets/logo.png";

import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DEL } from "../redux/actions/action";

const Header = () => {
  const getdata = useSelector((state) => state.cartred.carts);
  console.log(getdata);
  const dispatch=useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const[price,setPrice]=useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ondel=(id)=>{
    dispatch(DEL(id))
  };
  const total=()=>{
    let price=0;
    getdata.map((ele,k)=>{
        price=ele.price*ele.qnty+price
    });
    setPrice(price);
  };

useEffect(()=>{
    total();
},[getdata]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ padding: "10px", backgroundColor: "#f8f9fa" }}
      >
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div
              className="navbar-nav"
              style={{ fontFamily: '"Roboto", cursive', fontSize: "1.2em" }}
            >
              <NavLink
                className="nav-link active"
                aria-current="page"
                style={{ fontSize: 25, fontWeight: "bold" }}
                to="/"
              >
                Addtocart
              </NavLink>
              <NavLink
                className="nav-link active"
                aria-current="page"
                style={{ fontSize: 25, fontWeight: "bold" }}
                to="/"
              >
                Home
              </NavLink>
            </div>
          </div>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹{e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              <i className="fas fa-trash smalltrash" onClick={()=>ondel(e.id)}></i>
                            </p>
                          </td>

                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <i className="fas fa-trash largetrash" onClick={()=>ondel(e.id)}></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total :₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your carts is empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}

         
        </Menu>
      </nav>
    </>
  );
};
export default Header;
