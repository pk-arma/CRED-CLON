import "./button.css";

const Button = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <div
      onClick={onClick}
      className={` absolute-center flex button-wrapper ${customClass}`}
    >
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
