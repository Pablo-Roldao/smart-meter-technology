import React from "react";
import { Outlet } from "react-router-dom";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
  return (
    <>
      <Authenticator signUpAttributes={[
        'address',
        'birthdate',
        'email',
        'name',
        'phone_number'
      ]}>
        {({ signOut, user }) => (
          <main className="row">
            <h3 className="col">Logado como {user.attributes.name}...</h3>
            <button onClick={signOut} className="col btn btn-outline-dark">Sign out</button>
            <div id="app-container">
              <Outlet />
            </div>
          </main>
        )}
      </Authenticator>

    </>
  );
}