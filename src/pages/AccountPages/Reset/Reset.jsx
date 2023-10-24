import React from 'react'
import RegisterForm from '../../../components/Registration/RegisterForm/RegisterForm'

function Reset() {
  return (
    <div>
         <RegisterForm
                title={"Reset password"}
                input={{ email: "Email" }}
                type={"reset"}
                link={"/login"}
                button={{ redirect: "Войти", submit: "Confirm reset" }}
                infoText={
                  "Specify the mail of the registered account. A link to password reset will be sent to the specified mail. Activation period 24 hours"
                }
              />
    </div>
  )
}

export default Reset