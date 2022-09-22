import React, { useEffect,useState } from 'react';
import "./styleLoginPage.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";




const LoginPage = () => {

    const [usersData,setUsersData]=useState()
    const [inputUser,setInputUser]=useState([{
        email :"",
        password:""
    }])

    const [disabledButton,setDisabledButton]=useState(false)

    const getUser=()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users?_start=0&_limit=2")
        .then((res)=>{
            setUsersData(res.data)
            console.log("usersData is :",usersData)
        });
    }

    useEffect(()=>{
        getUser()
    },[]);

    const inputHandler=(e)=>{
        const value=e.target.value
        setInputUser({
            ...inputUser,
            [e.target.name]:value
        })
        // console.log(inputUser)
    }

    const checkedEmail=(e)=>{
        e.preventDefault()
        // console.log(usersData[0].email)
        const emailUser=usersData.find((item)=>
            item.email===inputUser.email
        )
        // console.log("user is find emailUser:", emailUser)
       if(emailUser){
        setDisabledButton(true)
        // console.log("disabledButton id :" ,disabledButton)
    }
     
    }

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
                            <Form.Label className="text-center" >
                                آدرس ایمیل خودرا وارد کنید
                            </Form.Label>
                            <Form.Control type="email" placeholder="آدرس ایمیل...."  name="email" onChange={(e)=>inputHandler(e)}/>
                            </Form.Group>
    
                            <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                            >
                            <Form.Label>رمز عبود خودرا وارد کنید</Form.Label>
                            <Form.Control type="password" placeholder="رمز عبور...." name="password" onChange={(e)=>inputHandler(e)} />
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
                                {disabledButton===false ?
                                    <Button onClick={(e)=>checkedEmail(e)} variant="dark" type="submit">
                                        <Link className='text-white'>
                                                وارد شوید
                                        </Link>
                                    </Button> 
                                    : 
                                     <Button  variant="dark" type="submit">
                                     <Link to='panelAdmin' className='text-white' >
                                             وارد شوید
                                     </Link>
                                    </Button>
                                    
                                    }
                                    
                                    {/* <button  >test</button> */}
                                
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