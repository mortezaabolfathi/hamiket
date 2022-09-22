import React from "react";

const ModalEditProduct = ({ setModalShow, itemModal }) => {
  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <th>شماره کالا</th>
            <th>نام کالا</th>
            <th>تصویر کالا</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{itemModal.id} </td>
            <td>{itemModal.title}</td>
            <td>
              <img src={itemModal.thumbnailUrl} alt="pick item" />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={() => setModalShow(false)}> بستن </button>
      </div>
    </div>
  );
};

export default ModalEditProduct;
