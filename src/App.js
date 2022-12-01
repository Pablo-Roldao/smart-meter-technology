import React from "react";

//import { Outlet } from "react-router-dom";
import Places from "./pages/Places";
import { Link } from "react-router-dom";

import { Amplify, I18n } from "aws-amplify";

import { Authenticator, View, useTheme, Image, Text, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage("pt");
I18n.putVocabularies({
  pt: {
    "Create Account": "Criar conta",
    "We Texted You": "Nós mandamos uma mensagem pra você",
    "Your code is on the way. To log in, enter the code we sent you. It may take a minute to arrive.": "Seu código foi enviado para você. Para entrar, insira o código que foi enviado. Isso levará apenas um minuto e serve para a sua própria segurança.",
    "Confirm": "Confirme",
    "We Emailed You": "Nós enviamos um e-mail para você",
    "Your code is on the way. To log in, enter the code we emailed to": "Seu código foi enviado. Para entrar, insira o código que enviamos para ",
    "It may take a minute to arrive.": "Vai levar apenas alguns instantes para chegar."
  }
});

I18n.putVocabulariesForLanguage('pt', {
  "Reset Password": "Recuperar senha",
  "Send code": "Enviar código",
  "Back to Sign In": "Voltar para o login",
  "confirme": "Confirme"
});

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Link to="/">
          <Image
            alt="SMT logo"
            src="./images/smt-logo.png"
            width={"50%"}
          />
        </Link>
      </View>
    );
  },
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; Todos os direitos reservados para SMT
        </Text>
      </View>
    );
  },
}
const formFields = {
  signIn: {
    username: {
      label: "E-mail",
      placeholder: "Insira seu e-mail...",
    },
    password: {
      label: "Senha",
      placeholder: "Insira sua senha...",
    }
  },
  signUp: {
    name: {
      order: 1,
      label: "Nome",
      placeholder: "Insira seu nome..."
    },
    email: {
      order: 2,
      label: "E-mail",
      placeholder: "Insira seu e-mail...",
    },
    phone_number: {
      dialCode: "+55",
      order: 3,
      label: "Celular",
      placeholder: "Insira seu número de celular...",
    },
    password: {
      order: 4,
      label: "Senha",
      placeholder: "Insira sua senha...",
    },
    confirm_password: {
      order: 5,
      label: "Confirmação de senha",
      placeholder: "Insira sua senha novamente...",
    },
  },
  resetPassword: {

  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Insira seu código de confirmação...",
      label: "Código",
      isRequired: false,
    },
    password: {
      label: "Nova senha",
      placeholder: "Insira sua nova senha...",
    },
    confirm_password: {
      label: "Confirmação de senha",
      placeholder: "Insira sua nova senha novamente...",
    },
  },
}

export default function App() {
  
  return (
    <div className="">
      <Authenticator
        components={components}
        formFields={formFields}
        signUpAttributes={["name", "phone_number"]}>
        {({ signOut, user }) => (
          <main>
            <div id="app-container">
              <Places name={user.attributes.name} signOutFunction={signOut}/>
            </div>
          </main>
        )}
      </Authenticator>
    </div>
  );
}