import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Container, Stack, Card, } from 'react-bootstrap'
import { MotionAnimate } from 'react-motion-animate'
import { API } from '../config/api'
import { useQuery } from 'react-query'
import Login from './Auth/Login';
import Register from './Auth/Register';

import bg1 from '../assets/images/bg1.png'
import bg2 from '../assets/images/bg2.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../assets/style/App.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useContext } from 'react'
import { UserContext } from '../context/userContext'


export default function Jumbotron() {

    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)

    const [state,] = useContext(UserContext)

    console.log("ini state", state);

    const { data: favorite } = useQuery("favoriteCache", async () => {
        const response = await API.get("/books-favorite")

        return response.data.data
    })


    const handleSubmit = useMutation(async (data) => {
        try {

            const form = {
                book_id: data.book_id
            }

            const response = await API.post("/cart", form)

            console.log("yang dikirim: ", form);
            alert("sukses")

        } catch (error) {

        }
    })


    return (
        <>

            <div className='d-flex justify-content-between' style={{ position: "absolute", width: "100%" }} >
                <img src={bg1} alt='' ></img>
                <img src={bg2} alt='' ></img>
            </div>
            <Stack gap={5}>
                <MotionAnimate
                    variant={{
                        hidden: { opacity: 0.2, rotate: -180 },
                        show: {
                            opacity: 0.8,
                            rotate: 0,
                            transition: {
                                repeat: 0,
                                duration: 4,
                                repeatDelay: 10,
                                type: 'spring'
                            }
                        }
                    }}>
                    <>
                        <Container className='d-flex justify-content-center' >
                            <p className='text-center mt-5 w-50' style={{ fontFamily: "Vollkorn", fontWeight: "400", fontSize: "33px" }}>
                                With us, you can shop online & help save your high street at the same time
                            </p>
                        </Container>
                    </>
                </MotionAnimate>
                <MotionAnimate
                    animation='fadeInUp'
                    reset={true}
                    distance={200}
                    delay={1}
                    speed={1}>
                    <>
                        <Container >
                            <p className='fw-bold text-start pb-3 mt-5 fw-bold' style={{ fontFamily: "Times New Roman", fontSize: "25px", color: "palevioletred" }} >Promo Book Lists: </p>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                // freeMode={true}
                                pagination={{
                                    clickable: true
                                }}
                                modules={[FreeMode, Pagination]}
                            >


                                {favorite?.map((items) => (
                                    <SwiperSlide className="mySwiper bg-transparent">
                                        <div className="container overflow-hidden text-center pb-5">
                                            <div className="row gx-5">
                                                <div className="col">
                                                    <div >
                                                        <div>
                                                            <img className=' object-fit-contain' src={items?.image} alt="" ></img>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div>
                                                        <Card.Body>

                                                            <Card.Title className=' text-start pb-2'
                                                                style={{ fontFamily: "Avenir", fontSize: "25px", fontWeight: "700" }}>{items?.title}</Card.Title>
                                                            <span className='text-muted  d-flex justify-content-start fw-light' style={{ fontStyle: "italic", fontSize: "16px", fontWeight: "400" }}>by. {items?.author}</span>
                                                            <Card.Text className=' text-start'>
                                                                {items.desc}
                                                            </Card.Text>
                                                            <span className='text-success d-flex justify-content-start fw-bold' >
                                                                Rp.{items?.price}
                                                            </span>
                                                            <div className=' justify-content-center mt-5'>

                                                                <button
                                                                    onClick={state.isLogin ? (() => handleSubmit.mutate({
                                                                        book_id: items?.id, total: items?.pricePromo
                                                                    })) : (() => setModalLogin(true))}
                                                                    className='px-5 bg-dark text-white border-0 py-1 ' >Add to Cart</button>
                                                            </div>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Container>
                    </>
                </MotionAnimate>
            </Stack>

            <Login modalLogin={modalLogin} setModalLogin={setModalLogin} switchRegister={setModalRegister} />
            <Register modalRegister={modalRegister} setModalRegister={setModalRegister} switchLogin={setModalLogin} />
        </>
    )
}
