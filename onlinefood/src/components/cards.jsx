import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import "./style.css";
import { useDispatch } from "react-redux";
import { Button } from "bootstrap";
import { ADD } from "../redux/actions/action.js";
const Cards = () => {


const dispatch=useDispatch();
const [foodData, setFoodData] = useState([]); 
  useEffect(() => {
    axios
      .get(`http://localhost:4000/`)
      .then((response) => {
        console.log("Data fetched:", response.data);
        setFoodData(response.data.fooddata || []);
      })
      .catch((error) => {
        console.log("ERROR IN FETCHING DATA => ", error);
        setFoodData([]); 
      });
  }, []);

  const handleonclick=(e)=>{
      dispatch(ADD(e));
  }

  return (
    <>
      <div className="container mt-3" style={{ textAlign: "center" }}>
        <h2
          className="text-center"
          style={{
            fontFamily: '"Rubik Dirt"',
            fontSize: "2em",
            textAlign: "center",
            marginTop: "50px",
            color: "#FFD700", 
            backgroundColor: "black",
            display: "inline-block",
          }}
        >
         Hungry?, No More!
        </h2>
        <div className="row d-flex justify-content-center align-items-center">
          {foodData.length > 0 ? (
            foodData.map((element, id) => (
              <div key={id} className="card mx-2 mt-4 card_style" style={{ width: '22rem', border: "none" }}>
                <img src={element.imgdata} className="card-img-top" alt="..." style={{ height: "16rem" }} />
                <div className="card-body">
                  <h5 className="card-title">{element.rname}  </h5>
                  <p className="card-text">HOTEL: {element.address}  <button type="button" className="btn btn-success" style={{ fontSize: '12px', padding: '5px 10px',marginLeft: '10px'}} ><FaStar /> {element.rating}</button></p>
                  
                  
                  <p className="card-text"> <button type="button" className="btn btn-warning"><FaRupeeSign /> {element.price}</button></p>
                  <p className="card-text"><strong>{element.somedata}</strong></p>
                  <button type="button" onClick={()=>handleonclick(element)} className="btn btn-info">ADD TO CART</button>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
