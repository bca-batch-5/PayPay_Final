import React from "react";
import "../../styles/Pin/stylePin.css";

const Pin = () => {
  function moveEvent(e) {
    if (e.target.value.length == 1) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  }
  function pressHandler(e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  return (
    <form style={{width:'100%'}}>
    <div className="pin-form-baru">
      <input
        className="form-pin-baru"
        type="text"
        maxlength="1"
        id="first"
        onKeyPress={pressHandler}
        onKeyUp={moveEvent}
      />
      <input
        className="form-pin-baru"
        type="text"
        maxlength="1"
        id="sec"
        onKeyPress={pressHandler}
        onKeyUp={moveEvent}
      />
      <input
        className="form-pin-baru"
        type="text"
        maxlength="1"
        id="third"
        onKeyPress={pressHandler}
        onKeyUp={moveEvent}
      />
      <input
        className="form-pin-baru"
        type="text"
        maxlength="1"
        id="fourth"
        onKeyPress={pressHandler}
        onKeyUp={moveEvent}
      />
      <input
        className="form-pin-baru"
        type="text"
        maxlength="1"
        id="fifth"
        onKeyPress={pressHandler}
        onKeyUp={moveEvent}
      />
      <input
        className="form-pin-baru"
        type="text"
        maxlength="1"
        id="six"
        onKeyPress={pressHandler}
      />
    </div>
  </form>
  );
};

export default Pin;
