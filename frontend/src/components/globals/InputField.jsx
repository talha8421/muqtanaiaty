// function InputField({
//   prefixIcon,
//   postfixIcon,
//   type,
//   placeholder,
//   className,
//   title,
//   value,
//   onChange
// }) {
//   return (
//     <div className="flex flex-col gap-1.25">
//       <h3 className="text-[17px] font-medium text-appBlack">{title}</h3>

//       <div
//         className={`w-full  bg-fbGray flex px-4.5 py-4 rounded-[8px] ${className} `}
//       >
//         <span className="flex gap-2 grow">
//           {prefixIcon}

//           <input
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             className="w-full border-none appearance-none bg-transparent outline-none text-appBlack text-[16px] placeholder-gray"
//           />
//         </span>

//         {postfixIcon}
//       </div>
//     </div>
//   );
// }

// export default InputField;
import React, { useState } from "react";
import { Eye } from "lucide-react"; // You can install this or use your own Eye icon

function InputField({
  prefixIcon,
  postfixIcon,
  type,
  placeholder,
  className,
  title,
  value,
  onChange,
  isPassword = false, // Added boolean prop, default false
}) {
  const [showPassword, setShowPassword] = useState(false);

  // Determine the input type dynamically
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1.25">
      <h3 className="text-[17px] font-medium text-appBlack">{title}</h3>

      <div
        className={`w-full  bg-fbGray flex px-4.5 py-4 rounded-[8px] ${className} `}
      >
        <span className="flex gap-2 grow">
          {prefixIcon}

          <input
            type={inputType} // Using the dynamic type
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border-none appearance-none bg-transparent outline-none text-appBlack text-[16px] placeholder-gray"
          />
        </span>

        {/* If it's a password field, show toggle icon; otherwise show postfixIcon */}
        {isPassword ? (
          <div 
            className="cursor-pointer flex items-center justify-center" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} className="text-gray" /> : postfixIcon}
          </div>
        ) : (
          postfixIcon
        )}
      </div>
    </div>
  );
}

export default InputField;