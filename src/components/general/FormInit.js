import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { accessUser } from "../../store/selectUserReducer";

import formHead from "../../assets/images/formHead.png";
import formImage from "../../assets/images/formImage.png";

function FormInit() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    dispatch(accessUser(email, password, history));
  };

  return (
    <div className="form-init">
      <div>
        <h2>PROGRAMACIÓN, COMPRA Y SEGUIMIENTO DE INSUMOS</h2>
        <img src={formImage} alt="formImage" />
      </div>

      <div className="form-gen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <div>
            <div className="mb-3">
              <div className="app-logo">
                <img src={formHead} alt="formHead" />
              </div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                autoFocus
                id="email"
                type="text"
                name="email"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                disabled={email === ""}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-outline-secondary">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormInit;
