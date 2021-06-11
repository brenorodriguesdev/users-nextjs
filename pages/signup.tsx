import { InputComponent, 
         ButtonComponent, 
         FormComponent, 
         TitleComponent, 
         MainComponent } from '../components'

export default function SignUp() {
  return (
    <MainComponent>
      <FormComponent>
        <TitleComponent text="Cadastro" />
        <InputComponent type="nome" placeholder="Digite seu nome" />
        <InputComponent type="email" placeholder="Digite seu e-mail" />
        <InputComponent type="password" placeholder="Digite sua senha" />
        <InputComponent type="password" placeholder="Confirme sua senha" />
        <ButtonComponent text="Cadastrar" />
      </FormComponent>
    </MainComponent>
  )
}
