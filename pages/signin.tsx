import {
  InputComponent,
  ButtonComponent,
  FormComponent,
  TitleComponent,
  MainComponent,
  LinkComponent,
  HelpComponent
} from '../components'

export default function SignIn() {
  return (
    <MainComponent>
      <FormComponent>
        <TitleComponent text="Login" />
        <InputComponent type="email" placeholder="Digite seu e-mail" />
        <InputComponent type="password" placeholder="Digite sua senha" />

        <HelpComponent>
          <LinkComponent text="Ainda não tem conta?" />
          <LinkComponent text="Esqueceu sua senha?" />
        </HelpComponent>

        <ButtonComponent text="Entrar" />
      </FormComponent>
    </MainComponent>
  )
}
