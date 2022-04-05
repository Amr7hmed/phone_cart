import React from 'react';
import { useSelector ,useDispatch } from "react-redux";
import {deleteitem} from '../redux/action/actions';



function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addItems);
  console.log(state)
  const Cartempity = () => {
    return <div className="row"><div className='col-12'>
      Cart Empty
    </div></div>
  }

  const Cartitem = (state) => {
    const deletCart = (proudect) => {
      dispatch(deleteitem(proudect));
    };

    return (<div className="row" key={state.id}>
      <div className="col-md-6">
        <img
          src={state.image}
          alt={state.title}
          height="250px"
          width="250px"
        />
      </div>
      <div className="col-md-6">
        <h3 className="lead fw-bolder mb-4">{state.title}</h3>
        <h3 className="lead fw-bolder mb-2">
          Price : {state.price} $
        </h3>
          <button type="button" className="btn btn-danger" onClick={()=>deletCart(state)}>Delete</button>
      </div>
    </div>)
  }




  return (
    <div className='container-fluid py-5'>

      {state.length > 1 ? <Cartempity /> : state.map(Cartitem)}
    </div>
  );
}

export default Cart;
