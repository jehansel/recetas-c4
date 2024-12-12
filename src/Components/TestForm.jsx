import React, { useState } from "react";

const TestForm = ({ handleSumbit }) => {
  const [disableBtn, setDisableBtn] = useState(false);
  return (
    <div>
      <input
        data-testid="password"
        // style={{ display: "none" }}
        type="password"
        role="input"
      />
      <button
        disabled={disableBtn}
        onClick={() => {
          setDisableBtn(true);
          handleSumbit();
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default TestForm;
