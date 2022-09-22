import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function PanelAdmin() {
  return (
    <>
     <div className="d-grid gap-2">
      <div className='bg-dark bg-opacity-10 mb-4 d-flex justify-content-center h-75  align-items-center'>
        <h1 className='mx-4'> صفحه مدیریت  </h1>
        <p className='pt-2 h-75 d-flex justify-content-center align-items-center'>برای وارد شدن به هر کدام از صفحات روی آن کلید کنید</p>
      </div>
      <Button variant="secondary" size="lg" className='mt-2'>
            <Link to="/admin/products" className='text-white'>
              بررسی  محصولات
          </Link>
      </Button>
    </div>
      
    </>
  );
}

export default PanelAdmin;