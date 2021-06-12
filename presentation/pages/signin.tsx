import { useEffect, useState } from 'react'
import {
  InputComponent,
  ButtonComponent,
  FormComponent,
  TitleComponent,
  MainComponent,
  LinkComponent,
  HelpComponent,
  ErrorComponent
} from '../components'
import { SignInUseCase } from '../../domain/useCases/sign-in'
import { Validator } from '../../validation/contracts/validator'


interface SignInProps {
  signInUseCase: SignInUseCase
  validator: Validator
}

export default function SignInPage({ signInUseCase, validator }: SignInProps) {

  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [initialEmail, setInitialEmail] = useState(false)
  const [initialPassword, setInitialPassword] = useState(false)
  const [mainError, setMainError] = useState('')

  const enter = async () => {
    try {
      const accessToken = await signInUseCase.sign({
        email,
        password
      })

      setMainError('')
    }
    catch (error) {
      setMainError(error.message)
    }
  }

  const validateEmail = () => {
    const error = validator.validate({ email }, 'email')
    setEmailError(error ? error.message : '')
  }

  const validatePassword = () => {
    const error = validator.validate({ password }, 'password')
    setPasswordError(error ? error.message : '')
  }


  useEffect(() => {

    if (initialEmail) {
      validateEmail()
    }

  }, [email])

  useEffect(() => {

    if (initialPassword) {
      validatePassword()
    }

  }, [password])


  return (
    <MainComponent>
      <FormComponent>
        <TitleComponent text="Login" />

        <InputComponent type="email" placeholder="Digite seu e-mail" onChange={(event: any) => { setEmail(event.target.value) }} onBlur={() => { setInitialEmail(true); validateEmail(); }} />
        {emailError ? <ErrorComponent text={emailError} /> : null}
        <InputComponent type="password" placeholder="Digite sua senha" onChange={(event: any) => { setPassword(event.target.value) }} onBlur={() => { setInitialPassword(true); validatePassword(); }} />
        {passwordError ? <ErrorComponent text={passwordError} /> : null}

        <HelpComponent>
          <LinkComponent text="Ainda não tem conta?" />
          <LinkComponent text="Esqueceu sua senha?" />
        </HelpComponent>

        {mainError ? <ErrorComponent text={mainError} /> : null}

        <ButtonComponent text="Entrar" disabled={!email || !password || emailError.length > 0 || passwordError.length > 0} onClick={enter} />
      </FormComponent>
    </MainComponent>
  )
}
