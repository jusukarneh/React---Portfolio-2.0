import { useState } from "react"

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formState)

    PostData(formState)
  }
  const PostData = ({name,
    email,
    subject,
    message}) => {
    fetch("/api/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    }).then(res => res.json())
      .then(data => {
        alert(data.message)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
        window.alert("email sent successfully")
      }).catch(err => {
        console.log(err)
      })
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
                        <input value={formState.name} onChange={event => setFormState({ ...formState, name: event.target.value })} type="text" placeholder=" Name" required />
                      </div>
                      <div>
                        <input value={formState.email} onChange={event => setFormState({ ...formState, email: event.target.value })} type="email" placeholder="Email " required />
                      </div>
                      <div>
                        <input value={formState.subject} onChange={event => setFormState({ ...formState, subject: event.target.value })} type="text" placeholder="Subject" required />
                      </div>
                      <div class="">
                        <input value={formState.message} onChange={event => setFormState({ ...formState, message: event.target.value })} type="text" placeholder="Message" class="message_input" required />
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