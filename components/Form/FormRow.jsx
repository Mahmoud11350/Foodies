const FormRow = ({ name, type, id }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="capitalize text-[#A29E97] text-lg font-bold mb-2 block"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="w-full bg-[#1C2027] py-2 px-4 text-lg rounded-lg outline-none"
      />
    </div>
  );
};
export default FormRow;
