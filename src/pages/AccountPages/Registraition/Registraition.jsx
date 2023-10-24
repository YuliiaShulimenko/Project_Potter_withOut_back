import React from 'react'
import RegisterForm from '../../../components/Registration/RegisterForm/RegisterForm'

function Registraition() {
  return (
    <div>

<RegisterForm
                title={"Registration"}
                input={{ email: "Email", password: "Password" }}
                type={"reg"}
                button={{ redirect: "Login", submit: "Sign up" }}
                link={"/login"}
                infoText={
                  "By registering on the site, you agree to our privacy policy and terms of use."
                }
              />
       
    </div>
  )
}

export default Registraition