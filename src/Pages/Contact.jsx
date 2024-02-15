import { useState } from "react"

function Contact() {
  const [ formState,setFormState]= useState({
    fullname:"",
    email:"",
    phonenumber:"",
    message:"",
  })
  function handleSubmit(event){
    event.preventDefault()
    console.log(formState)
    
    window.Location.href="mailto:jusudaddi@yahoo.com?subject="+formState.fullname+"&body="+formState.message
  }
  return (
    <>
       <section class="contact_section layout_padding">
    <div class="contact_bg_box">
      <div class="img-box">
        {/* <img src="images/contact-bg.jpg" alt=""/> */}
      </div>
    </div>
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Get In touch
        </h2>
      </div>
      <div class="">
        <div class="row">
          <div class="col-md-7 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="contact_form-container">
                <div>
                  <div>
                    <input value={formState.fullname} onChange={event=>setFormState({...formState,fullname:event.target.value})} type="text" placeholder="Full Name"  required/>
                  </div>
                  <div>
                    <input value={formState.email} onChange={event=>setFormState({...formState,email:event.target.value})}  type="email" placeholder="Email " required/>
                  </div>
                  <div>
                    <input value={formState.phonenumber} onChange={event=>setFormState({...formState,phonenumber:event.target.value})}   type="text" placeholder="Phone Number" required/>
                  </div>
                  <div class="">
                    <input value={formState.message} onChange={event=>setFormState({...formState,message:event.target.value})}  type="text" placeholder="Message" class="message_input"  required/>
                  </div>
                  <div class="btn-box ">
                    <button type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
export default Contact