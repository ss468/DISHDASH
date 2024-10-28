import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DEL } from "../redux/actions/action";
import { ADD } from "../redux/actions/action";
import { REMOVE } from "../redux/actions/action";

const Carddetails = () => {
  const dispatch=useDispatch();
  const [data, setData] = useState([]); 
  const { id } = useParams();  
  console.log("id is here=>>>>", id);

  const getdata2 = useSelector((state) => state.cartred.carts);
  console.log("second data is here===>", getdata2);
  
   

  const compare = () => {
    const comparedata = getdata2.filter((e) => e.id == id);
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id, getdata2]);  
  
  const handleonclick=(e)=>{
    dispatch(ADD(e));
   } 
   const handleonclick2=(e)=>{
    dispatch(REMOVE(e));
   }

  const ondel=(id)=>{
    dispatch(DEL(id))
  }
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
      </div>
      <section className="container mt-3">
        {data.length > 0 ? data.map((ele) => (
          <div className="iteamsdetails" key={ele.id}> 
            <div className="items_img">
              <img src={ele.imgdata} alt="" />
            </div>
            <div className="details">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <p><strong>Restaurant</strong>: {ele.address}</p>

                      <p><strong>Price</strong>: ₹{ele.price}</p>

                      <p><strong>Dishes</strong>: {ele.rname}</p>

                      <p><strong>Total</strong>: ₹{ele.price*ele.qnty}</p>
                      <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={()=>handleonclick2(ele)} >-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>handleonclick(ele)}>+</span>

                    </div>
                    </td>
                    <td>
                      <p>
                        <strong>Rating:</strong>
                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {ele.rating}★
                        </span>
                      </p>
                      <p><strong>Order Review:</strong>{" "}{ele.somedata}</p>
                      <p>
                        <strong>Remove:</strong>
                        <span>
                          <i
                            className="fas fa-trash"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={()=>ondel(ele.id)}
                          ></i>
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )) : <p>ITEM DELETED SUCESSFUL!!!!</p>}
      </section>
    </>
  );
};

export default Carddetails;
