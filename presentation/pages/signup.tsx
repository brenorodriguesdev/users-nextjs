import { useEffect, useState } from 'react'
import { CreateUserUseCase } from '../../domain/useCases/create-user'
import { Validator } from '../../validation/contracts/validator'

import {
  InputComponent,
  ButtonComponent,
  FormComponent,
  TitleComponent,
  MainComponent,
  ErrorComponent
} from '../components'

interface SignUpProps {
  validator: Validator
  createUserUseCase: CreateUserUseCase
}

export default function SignUpPage({ validator, createUserUseCase }: SignUpProps) {

  const [name, setName] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('')
  const [initialName, setInitialName] = useState(false)
  const [initialEmail, setInitialEmail] = useState(false)
  const [initialPassword, setInitialPassword] = useState(false)
  const [initialPasswordConfirmation, setInitialPasswordConfirmation] = useState(false)

  const [mainError, setMainError] = useState('')


  const create = async () => {
    try {

      await createUserUseCase.create({
        name,
        email,
        password,
        passwordConfirmation
      })

      setMainError('')
    }
    catch (error) {
      setMainError(error.message)
    }
  }

  const validateName = () => {
    const error = validator.validate({ name }, 'name')
    setNameError(error ? error.message : '')
  }

  const validateEmail = () => {
    const error = validator.validate({ email }, 'email')
    setEmailError(error ? error.message : '')
  }

  const validatePassword = () => {
    const error = validator.validate({ password }, 'password')
    setPasswordError(error ? error.message : '')
  }

  const validatePasswordConfirmation = () => {
    const error = validator.validate({ password }, 'passwordConfirmation')
    setPasswordConfirmationError(error ? error.message : '')
  }


  useEffect(() => {

    if (initialName) {
      validateName()
    }

  }, [password])


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


  useEffect(() => {

    if (initialPasswordConfirmation) {
      validatePasswordConfirmation()
    }

  }, [passwordConfirmation])

  return (
    <MainComponent>
      <FormComponent>
        <TitleComponent text="Cadastro" />
        <InputComponent type="text" placeholder="Digite seu nome" onChange={(event: any) => { setName(event.target.value) }} onBlur={() => { setInitialName(true); validateName(); }} />
        {nameError ? <ErrorComponent text={nameError} /> : null}
        <InputComponent type="email" placeholder="Digite seu e-mail" onChange={(event: any) => { setEmail(event.target.value) }} onBlur={() => { setInitialEmail(true); validateEmail(); }} />
        {emailError ? <ErrorComponent text={emailError} /> : null}
        <InputComponent type="password" placeholder="Digite sua senha" onChange={(event: any) => { setPassword(event.target.value) }} onBlur={() => { setInitialPassword(true); validatePassword(); }} />
        {passwordError ? <ErrorComponent text={passwordError} /> : null}
        <InputComponent type="password" placeholder="Confirme sua senha" onChange={(event: any) => { setPasswordConfirmation(event.target.value) }} onBlur={() => { setInitialPasswordConfirmation(true); validatePasswordConfirmation(); }} />
        {passwordConfirmationError ? <ErrorComponent text={passwordConfirmationError} /> : null}
        {mainError ? <ErrorComponent text={mainError} /> : null}
        <ButtonComponent
          disabled={!name
            || !email
            || !password
            || !passwordConfirmation
            || nameError.length > 0
            || emailError.length > 0
            || passwordError.length > 0
            || passwordConfirmationError.length > 0} text="Cadastrar" onClick={create} />
      </FormComponent>
    </MainComponent>
  )
}
