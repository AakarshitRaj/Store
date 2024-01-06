import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product =useSelector((state)=>state.product);
  const {productId}=useParams();
  const dispatch=useDispatch();
  console.log(product);

  const fetchProductsDetail=async()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(err=>{
      console.log("Err",err);
    });

    dispatch(selectedProduct(response.data));
  };
  useEffect(()=>{
    if(productId && productId!=="")
    fetchProductsDetail();
  },[productId]);

  return (
    <div>
      ProductDetail
    </div>
  )
}

export default ProductDetail
