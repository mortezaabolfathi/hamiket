import React from 'react';
import "./styleLoginPage.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const LoginPage = () => {
    return ( 
        <div  className="boxLogin">

            <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                <Card className="shadow bg-dark bg-opacity-25">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">حامی کت </h2>
                        <p className=" mb-5 text-warning">لطفا برای وارد شدن ایمیل و رمز عبور خودرا وارد کنید</p>
                        <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                آدرس ایمیل خودرا وارد کنید
                            </Form.Label>
                            <Form.Control type="email" placeholder="آدرس ایمیل...." />
                            </Form.Group>
    
                            <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                            >
                            <Form.Label>رمز عبود خودرا وارد کنید</Form.Label>
                            <Form.Control type="password" placeholder="رمز عبور...." onChange={(e)=>console.log(e.target.value)} />
                            </Form.Group>
                            <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                            >
                            <p className="small">
                                <a className="text-warning text-opacity-80" href="#!">
                                آیا رمز عبور خودرا فراموش کرده اید?
                                </a>
                            </p>
                            </Form.Group>
                            <div className="d-grid">
                            <Button variant="dark" type="submit">
                                وارد شوید
                            </Button>
                            </div>
                        </Form>
                        <div className="mt-3">
                            <p className="mb-0  text-center">
                            آیا قبلا ثبت نام نکرده اید?{" "}
                            <a href="{''}" className="text-dark fw-bold">
                                ثبت نام کنید
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>

        </div>
          );
        }
 
export default LoginPage;