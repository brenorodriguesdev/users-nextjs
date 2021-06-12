import { useState } from 'react'
import {
  InputComponent,
  ButtonComponent,
  FormComponent,
  TitleComponent,
  MainComponent,
  LinkComponent,
  HelpComponent
} from '../components'
import { SignInUseCase } from '../../domain/useCases/sign-in'


interface SignInProps {
  signInUseCase: SignInUseCase
}

export default function SignInPage({ signInUseCase }: SignInProps) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [mainError, setMainError] = useState('')


  const enter = async () => {
    try {
      const accessToken = await signInUseCase.sign({
        email,
        password
      })

    }
    catch (error) {
 
    }
  }
  

  return (
    <MainComponent>
      <FormComponent>
        <TitleComponent text="Login" />

        <InputComponent type="email" placeholder="Digite seu e-mail" onChange={(event: any) => { setEmail(event.target.value) }} />
        <InputComponent type="password" placeholder="Digite sua senha" onChange={(event: any) => { setPassword(event.target.value) }} />

        <HelpComponent>
          <LinkComponent text="Ainda não tem conta?" />
          <LinkComponent text="Esqueceu sua senha?" />
        </HelpComponent>

        <ButtonComponent text="Entrar" onClick={enter} />
      </FormComponent>
    </MainComponent>
  )
}
