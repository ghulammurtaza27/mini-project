import React from "react";

import { render, cleanup,  fireEvent } from "@testing-library/react";

import UserDetail from '../components/UserDetail'
import { Provider } from "react-redux";
import store from "../app/store"



afterEach(cleanup);


describe("Application", () => {

  


  it("enters a new password and checks if it updated on the screen", async () => {

    const user= {
      _id:1,
      username:'admin',
      password:'admin',
      age:5,
      is_admin: true
    }
    const { getByTestId } = render(<Provider store={store}>
      <React.StrictMode>
        <UserDetail user={user} />
      </React.StrictMode>
    </Provider>);

    const password = getByTestId("password-input").querySelector('input');

    fireEvent.change(getByTestId("password-input").querySelector('input'), {
      target: {value: "testing"}
    });

   
    expect(getByTestId("password-input").querySelector('input')).toHaveValue('testing');

  });
  
});
