import { HidePasswordIcon, LockIcon } from "@/components/app-icons/Icons";
import InputField from "@/components/globals/InputField";
import React from "react";

function PasswordForm() {
  return (
    <div className="w-full h-fit flex flex-col gap-9.25">
      <h2 className=" text-[22px] text-supportiveBlue"> Secure Your Account</h2>
      <form action="" className="flex flex-col gap-4.25">
        <InputField
          title={"Password"}
          prefixIcon={<LockIcon />}
          postfixIcon={<HidePasswordIcon />}
          placeholder={"Enter your password"}
          type="password"
       // value={password}
       // onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          title={"Confirm Password"}
          prefixIcon={<LockIcon />}
          postfixIcon={<HidePasswordIcon />}
          placeholder={"Re-enter your password"}
          type="password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}

export default PasswordForm;
