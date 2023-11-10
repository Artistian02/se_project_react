import React from "react";
import "./ToggleSwitch.css";
import { useMyContext } from "../contexts/CurrentTemperatureUnitContexts";
const ToggleSwitch = () => {
  const { data, toggleMeasureUnits } = useMyContext();

  console.log(data);
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={() => toggleMeasureUnits()}
      ></input>
      <span
        className={
          data === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          data === "F" ? "switch__active" : "switch__none"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          data === "C" ? "switch__active" : "switch__none"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwitch;
