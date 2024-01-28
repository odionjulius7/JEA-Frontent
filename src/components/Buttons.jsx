import Button from "react-bootstrap/Button";

function Buttons({ variant, style, text }) {
  return (
    <>
      <Button style={style} variant={variant}>
        {text}
      </Button>
    </>
  );
}

export default Buttons;
