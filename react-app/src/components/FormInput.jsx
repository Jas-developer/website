import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
