import React from "react";

type CheckboxProps = {
  checked: boolean;
  label: string;
};

export default function Checkbox(props: CheckboxProps) {
  let [isChecked, setIsChecked] = React.useState(props.checked);

  function toggleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <span onClick={toggleCheck}>
      <input type="checkbox" checked={isChecked} />
      <span></span>
      {props.label}
    </span>
  );
}
