import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllAdminProducts, getProductsByProdName } from "../feature/products/ProductSlice";
import ProductItem from "./ProductItem";
import { Button, Form } from "react-bootstrap";
function AllAdminProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeProducts = useSelector(
    (state) => state.ProductReducer.Products
  );
  
  const [disablePostButton, setDisablePostButton] = useState(true);
  const [handle, setHandle] = useState("");
  useEffect(() => {
    // if (localStorage.getItem("token") === null) {
      // navigate("/unauthorized");
    // }
    dispatch(getAllAdminProducts());
  }, []);

  
  

  async function handleCreatePost(e) {
    e.preventDefault();
    dispatch(getProductsByProdName({
      ProductName:handle,
    }));
  }
  function handleChange(e) {
    setHandle(e.target.value);
    if(e.target.value.length>0 && e.target.value.length<25){
      setDisablePostButton(false);
    }
    else{
      dispatch(getAllAdminProducts());
      setDisablePostButton(true);
    }
  }
  

  return (
    <div>
      <h2>List of Products </h2>
      <Form className="d-flex flex-column">
          <div className="d-flex justify-content-end align-items-center">
          <Form.Group className="mb-3"  >
            <Form.Label></Form.Label>            
            <Form.Control
              type="text"
              value={handle}
              onChange={handleChange}
            />
          </Form.Group>
            <Button
              onClick={handleCreatePost}
              variant="success"
              disabled={disablePostButton}
              className="col-2 mx-3"
            >
              Search
            </Button>
            </div>
      </Form>
      {storeProducts!==null && storeProducts.length>0? (
        storeProducts.map((Products) => {
          return (
            <ProductItem
              key={Products.id}
              id={Products.id}
              productName={Products.productName}
              productDescription={Products.productDescription}
              price={Products.price}
              features={Products.features}
              productQuantity={Products.productQuantity}
              productStatus={Products.productStatus}
              productId={Products.id}
            />
          );
        })
      ) : (
        <span>No Products Found</span>
      )}
    </div>
  );
}

export default AllAdminProducts;
