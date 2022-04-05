/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from 'react-redux';
import {additem,deleteitem} from '../redux/action/actions';


function Product() {
  const { id } = useParams();
  const [proudect, setProudect] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btncart, setBtncart] = useState("Add To Cart");
  const dispatch = useDispatch();



  useEffect(() => {
    const getProudects = async () => {
      await axios(`https://fakestoreapi.com/products/${id}`).then(response => {
        const persons = response.data;
        setLoading(true);
        setProudect(persons)
        console.log(persons)
      }).catch(function (error) {
        console.log(error);
      })

    }
    getProudects();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const addcart =(proudect)=>{
    if(btncart === "Add To Cart"){
      setBtncart("Remove To Cart")
      dispatch(additem(proudect))
    }else{
      setBtncart("Add To Cart")
      dispatch(deleteitem(proudect))
    }

  }
  const Showproudect = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={proudect.image} alt={proudect.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{proudect.category}</h4>
          <h1 className="display-5">{proudect.title}</h1>
          <p className="lead fw-bolder">
            Rating {proudect.rating && proudect.rating.rate}
            <i className="fa fa-star"></i>
          </p>

          <h3 className="fw-bold my-4 display-6">$ {proudect.price}</h3>
          <p className="lead">{proudect.description}</p>

          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addcart(proudect)}>
            {btncart}
          </button>
          <NavLink to="/cart" className="btn btn-dark px-3 ms-2 py-2">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (<div className='container-fluid py-5'>

    <div className="row py-4">
      {loading ? <Showproudect />:<Loading />}
    </div>
  </div>);
}

export default Product;
