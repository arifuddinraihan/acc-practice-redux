import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addToCart, removeFromCart } from "../redux/actionCreators/productAction";
import { AiOutlineDelete } from "react-icons/ai"

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // console.log(pathname)
  return (
    <div
      className='relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      {
        pathname.includes('cart') && <div className="grid place-items-center bg-indigo-400 text-white top-1 right-1 px-3 py-1 rounded-full absolute">{product.quantity}</div>
      }
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, i) => {
            return <li key={i} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {pathname.includes("cart") &&
          <button onClick={() => dispatch(removeFromCart(product))}
            className='bg-red-400 flex justify-between items-center px-4 rounded-full py-1 flex-1 text-white text-bold'>
            <p className="text-lg">Remove</p>
            <AiOutlineDelete size={20} />
          </button>
        }
        {!pathname.includes("cart") &&
          <button onClick={() => dispatch(addToCart(product))}
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Add to cart
          </button>
        }
        {!pathname.includes("cart") &&
          <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
