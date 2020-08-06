import React from "react";
import "./select.scss";

const Select = ({
  options,
  valuePropertyCustom = "value",
  labelPropertyCustom = "label",
  value,
  onChange,
  placeholder = 'Selecciona una opción',
  ...props
}) => {
  return (
    <select className="select" value={value} onChange={onChange} {...props}>
      <option disabled selected>
        { placeholder }
      </option>
      {options.map(item => {
        return typeof item === "object" ? (
          <option
            value={item[valuePropertyCustom]}
            key={item[valuePropertyCustom].toString()}
          >
            {item[labelPropertyCustom]}
          </option>
        ) : (
          <option key={item.toString()}>{item}</option>
        );
      })}
    </select>
  );
};

export default Select;
