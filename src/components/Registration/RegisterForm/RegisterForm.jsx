


import s from './RegisterForm.module.css'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import {  useRef } from 'react'
import InputRegistration from '../InputRegistration/InputRegistration'
import ButtonRegistration from '../ButtonRegistration/ButtonRegistration'

function RegisterForm({title, input, type, link, button, infoText}){
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch
    } = useForm()

    // Cброс данных при смене роута
    // useEffect(() => {
    //     reset()
    // },[type])

    const passwordRef = useRef()
    passwordRef.current = watch('password', '')

    const emailInput = register('email', {
        required: 'Mail must be filled out',
        pattern: {
            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
            message: 'Incorrect e-mail'
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <h2>{title}</h2>

                <p>{input.email}</p>
                <InputRegistration {...emailInput}/>
                <div>
                    {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}
                </div>

                {type !== 'reset' && 
                    <>
                        <p>{input.password}</p>
                        <InputRegistration type={'password'} {...register('password', {
                                    required: 'Password must be filled out',
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: 'The password must contain a minimum of 8 letters and at least 1 number'
                                    }
                        })}/>
                        <div>
                            {errors.password && <p className={s.warning_text}>{errors.password.message}</p>}
                        </div>
                    </>
                }

                 {type === 'reg' && 
                    <>
                        <p>Повтор пароля</p>
                        <InputRegistration type={'password'} {...register('secondPassword', {
                                    required: 'Password must be filled out',
                                    validate: (value) => value === watch('password', '') || 'Passwords do not match'
                        })}/>
                        <div>
                            {errors.secondPassword && <p className={s.warning_text}>{errors.secondPassword.message}</p>}
                        </div>
                    </>
                 }

                <p className={s.info_text}>{infoText}</p>

                { type !== 'reset' && 
                    <Link to='/reset'>
                        <p className={s.info_text}>Restore access</p>
                    </Link>
                }

                <ButtonRegistration title={button.submit} color='yellow'/>

                <Link to={link}>
                    <ButtonRegistration title={button.redirect} color='white'/>
                </Link>

            </form>
        </div>
    )
}

export default RegisterForm