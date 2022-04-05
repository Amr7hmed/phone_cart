/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";


const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProudects = async () => {
      await axios("https://fakestoreapi.com/products").then(response => {
        const persons = response.data;
        setLoading(true);
        setData(persons)
        console.log(data)
      }).catch(function (error) {
        console.log(error);
      })

    }
    getProudects();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const Showproudect = () => {
    return (<>
      {data.map((proudect, index) => {
        return (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 text-center p-4">
              <img
                src={proudect.image}
                className="card-img-top"
                alt={proudect.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {proudect.title.substring(0, 12)}...
                </h5>
                <p className="card-text">$ {proudect.price}</p>
                <NavLink to={`/products/${proudect.id}`} className="btn btn-outline-dark">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>)
  }
  return (<div className='container-fluid py-5'>
    <div className='text-center my-5'>
      <h2>Products</h2>
      <hr />
    </div>
    <div className="row justify-content-center">
      {loading ? <Showproudect /> : <Loading />}
    </div>
  </div>
  );
};

export default Products;
