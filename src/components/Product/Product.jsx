import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import ModalEditProduct from "../Modal/ModalEditProduct";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProduct } from "../../feathers/products/productSlice";
import userEvent from "@testing-library/user-event";
import { useDispatch, useSelector } from "react-redux";
import { useListPostsQuery } from "../../feathers/products/productsServices";
import Pagination from "../Pagination/Pagination";

const Product = () => {
  const [products,setProduct]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage,setProductPerPage]=useState(5);
  const [modalShow, setModalShow] = useState(false);
  const [itemModal, setItemModal] = useState();



  const handleModal = (item) => {
    setItemModal(item);
    setModalShow(true);
  };

  const dispatch=useDispatch()
  const productsALL=useSelector(state=>state.products)
  // console.log(productsALL) //initialState


  useEffect(() => {
    dispatch(getProduct())
  },[]);


  useEffect(()=>{
      if(productsALL!==undefined){
        setProduct(productsALL.products)
      }
  },[productsALL])

  const indexOfLastProduct=currentPage * productPerPage;
  // console.log(indexOfLastProduct)
  const indexOfFirstProduct=indexOfLastProduct - productPerPage;
  // console.log(indexOfFirstProduct);
  // console.log("products is :", productsALL.products)
  const currentPosts=products.slice(indexOfFirstProduct, indexOfLastProduct)
  // console.log("slice products :", currentPosts);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <Container>
          {productsALL.loading? (
            <h3>...Loading</h3>
          ) : (
            <table class="table mt-5">
              <thead class="table-dark">
                <tr>
                  <th scope="col">شماره کالا</th>
                  <th scope="col">نام</th>
                  <th scope="col">عکس</th>
                  <th scope="col">ویرایش محصول</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((item) => {
                  return (
                    <tr>
                      <td>{item.id} </td>
                      <td>{item.title}</td>
                      <td>
                        <img src={item.thumbnailUrl} alt="" />
                      </td>
                      <td>
                        <button onClick={() => handleModal(item)}>
                          ویرایش کالا
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <Modal
            show={modalShow}
            className="bg-dark bg-opacity-10 d-flex align-items-center"
          >
            <ModalEditProduct
              setModalShow={setModalShow}
              itemModal={itemModal}
            />
          </Modal>
        </Container>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-center bg-opacity-10 bg-danger">
        <Pagination 
          paginate={paginate}
          productPerPage={productPerPage} 
          totalProducts={products.length}/>
      </div>
    </>
  );
};

export default Product;
