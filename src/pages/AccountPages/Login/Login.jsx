import React from 'react'

import RegisterForm from '../../../components/Registration/RegisterForm/RegisterForm'

function Login() {
  
  return (
    <div >

<RegisterForm
                title={"Authorization"}
                input={{ email: "Email", password: "Password" }}
                type={"login"}
                button={{ redirect: "Registration", submit: "Authorization" }}
                link={"/reg"}
                infoText={"Enter your account login and password"}
              />
    </div>
  )
}

export default Login