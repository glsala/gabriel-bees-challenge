import React, { useState, ChangeEvent } from "react";
import AuthCSS from "./Auth.module.css";
import BeesLogo from "./../../assets/icons/bees-img.svg";
import { useHistory } from "react-router-dom";

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<any>>;
}

interface InputValue {
  value: any;
}
const Auth: React.FC<Props> = ({ setIsAuth, setUserName }) => {
  const history = useHistory();
  const handleAuth = () => {
    setIsAuth(true);
    setUserName(inputValue);

    history.push("/");
  };

  const handleData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAuth();
  };

  const [inputValue, setInputValue] = useState<InputValue>({ value: "" });
  const [isChecked, setIsChecked] = useState(false);

  const handleInputValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target.value;
    const re = /^[a-zA-Z \b]*$/;

    if (inputElement === " " || re.test(inputElement)) {
      setInputValue({ value: inputElement });
    }
  };
  const handleCheckboxValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const checkboxElement = e.target.checked;

    setIsChecked(checkboxElement);
  };

  return (
    <div className={AuthCSS.wrapper}>
      <div className={AuthCSS.container}>
        <div>
          <p className={AuthCSS.title}>Please, enter your full name below</p>
          <p className={AuthCSS.title}>
            Only alphabetical characters are accepted
          </p>
          <form onSubmit={handleData}>
            <div className={AuthCSS.inputWrapper}>
              <input
                type="text"
                value={inputValue.value}
                onChange={(e) => handleInputValidation(e)}
                placeholder="Full Name"
                required
              />
            </div>

            <div className={AuthCSS.checkboxWrapper}>
              <label>
                <input
                  type="checkbox"
                  required
                  onChange={(e) => handleCheckboxValidation(e)}
                />{" "}
                Are you older than 18 years old?
              </label>
            </div>

            <div className={AuthCSS.buttonWrapper}>
              <button
                className={AuthCSS.button}
                disabled={!(isChecked && !!inputValue.value)}
                type="submit"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={AuthCSS.logoWrapper}>
        <img className={AuthCSS.logoImg} src={BeesLogo} alt="delete icon" />
      </div>
    </div>
  );
};

export default Auth;
