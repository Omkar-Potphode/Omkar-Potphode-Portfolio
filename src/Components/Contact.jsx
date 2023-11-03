import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { useForm } from 'react-hook-form'
import 'animate.css';
import emailjs from "@emailjs/browser"
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {


  const {register, control, handleSubmit, formState: {errors,isValid,isSubmitting, isSubmitted, isSubmitSuccessful, submitCount},getValues, setValue, reset, trigger} = useForm({defaultValues:{
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    mobile_number: '',

  }})

  const form = useRef();

  const onSubmit =(data) =>{
    console.log("submit",data);
  }

  const onError = () =>{
    console.log("errors")
  }

  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_lskfhc8','template_7rgb3fb',form.current,'CqkJFk5y7i8wv-XBl').then(
      (result) =>{
        console.log(result.text)
      },(error) => {
        console.log(error.text)
      }
    )
  }

  useEffect(() => {
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  const success_notify = () =>{
    toast.success('🦄 Message send successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <h4>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</h4><br/>
                <form ref={form} onSubmit={handleSubmit(onSubmit,onError,sendEmail)} noValidate>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name="first_name" {...register("first_name", {required: true, maxLength: 35},)}/>
                    </Col>
                    {errors?.first_name?.type === "required" && <p className="red">This field is required</p>}
                      {errors?.first_name?.type === "maxLength" && (<p className="red">Username cannot exceed 35</p>)}
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" name="last_name" {...register("last_name", {required:true,maxLength: 35})} />
                    </Col>
                    {errors?.last_name?.type === "required" && <p className="red">This field is required</p>}
                      {errors?.last_name?.type === "maxLength" && (<p className="red">Username cannot exceed 35</p>)}
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="email" {...register("email", {required: true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}  />
                    </Col>
                    {errors?.email?.type === "required" && <p className="red">This field is required</p>}
        {errors?.email?.type === "pattern" && (<p className="red">enter correct email address</p>)}
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name="mobile_number" {...register("mobile_number", {required: true, valueAsNumber: true, maxLength: 10})}/>
                    </Col>
                    {errors?.first_name?.type === "required" && <p className="red">This field is required</p>}
                      {errors?.first_name?.type === "maxLength" && (<p className="red">Username cannot exceed 10</p>)}
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message" {...register("message", {required: true})}></textarea>
                      {errors?.first_name?.type === "required" && <p className="red">This field is required</p>}
                      <button type="submit" disabled={isSubmitting} onClick={isSubmitSuccessful ? success_notify(): ""}><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <ToastContainer/>
    </section>
  )
}
