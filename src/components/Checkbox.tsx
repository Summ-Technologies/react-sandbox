import React, { CSSProperties } from "react";

type CheckboxProps = {
  checked: boolean;
  label: string;
};

export default function Checkbox(props: CheckboxProps) {
  let [isChecked, setIsChecked] = React.useState(props.checked);

  function toggleCheck() {
    setIsChecked(!isChecked);
  }

  let styles: { [key: string]: CSSProperties } = {
    text: { paddingLeft: 5 },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.container}>
      <span onClick={toggleCheck}>
        <input type="checkbox" checked={isChecked} />
        <span></span>
        {props.label}
      </span>
    </div>
  );
}
