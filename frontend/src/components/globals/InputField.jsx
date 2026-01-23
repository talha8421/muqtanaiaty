function InputField({
  prefixIcon,
  postfixIcon,
  type,
  placeholder,
  className,
  title,
  value,
  onChange
}) {
  return (
    <div className="flex flex-col gap-1.25">
      <h3 className="text-[17px] font-medium text-appBlack">{title}</h3>

      <div
        className={`w-full  bg-fbGray flex px-4.5 py-4 rounded-[8px] ${className} `}
      >
        <span className="flex gap-2 grow">
          {prefixIcon}

          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border-none appearance-none bg-transparent outline-none text-appBlack text-[16px] placeholder-gray"
          />
        </span>

        {postfixIcon}
      </div>
    </div>
  );
}

export default InputField;
