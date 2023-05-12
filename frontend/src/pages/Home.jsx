import React from "react";
import { useGetAllProductsQuery } from "../redux/features/productsApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <div className="products-list container">
          {data?.map((product) => {
            return (
              <div className="product-card " key={product.id}>
                <div className="product-name" key={product.id}>
                  {product.name}
                </div>
                <div className="product-image">
                  <img src={product.image} alt="" />
                </div>
                <div className="product-desc">
                  <span className="product-desc1">{product.desc}</span>
                  <span className="product-price">${product.price}</span>
                </div>
                <div className="btn-cart">
                  <button
                    className="btn"
                    onClick={() => handleAddtoCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
