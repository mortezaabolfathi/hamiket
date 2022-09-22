import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import ModalEditProduct from "../Modal/ModalEditProduct";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState();
  const [totalPage, setTotalPage] = useState(0);

  const [modalShow, setModalShow] = useState(false);
  const [itemModal, setItemModal] = useState();
  const handleModal = (item) => {
    setItemModal(item);
    setModalShow(true);
  };


  const { id } = useParams();

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_page=${id}&_limit=4`)
      .then((res) => {
        setProduct(res.data);
        const totalProducts=20
        const totalP = Math.ceil(totalProducts / 4);
        setTotalPage(totalP);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <div>
        <Container>
          {product === undefined ? (
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
                {product.map((item) => {
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
        {[...Array(totalPage)].map((x, i) => 
            <Link to={`/admin/products/${i + 1}`} className="p-4">
              <div className="">{i + 1}</div>
            </Link>
             )}
      </div>
    </>
  );
};

export default Product;
