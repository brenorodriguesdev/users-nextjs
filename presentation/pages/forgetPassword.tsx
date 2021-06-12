import {
  InputComponent,
  ButtonComponent,
  FormComponent,
  TitleComponent,
  MainComponent,
  LinkComponent,
  HelpComponent
} from '../components'

export default function ForgetPasswordPage() {
  return (
    <MainComponent>
      <FormComponent>
        <TitleComponent text="Recuperar Senha" />
        <InputComponent type="email" placeholder="Digite seu e-mail" />

        <HelpComponent>
          <LinkComponent text="Acessar sua conta?" />
          <LinkComponent text="Ainda não tem conta?" />
        </HelpComponent>

        <ButtonComponent text="Recuperar" />
      </FormComponent>
    </MainComponent>
  )
}
