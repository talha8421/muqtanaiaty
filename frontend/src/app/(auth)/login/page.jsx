"use client";
import {
  EmailIcon,
  LockIcon,
  HidePasswordIcon,
  CheckboxEmpty,
  CheckboxFilled,
} from "@/components/app-icons/Icons";
import AuthButton from "@/components/auth/AuthButton";
import InputField from "@/components/globals/InputField";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";


function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  function handleKeepLoggedIn() {
    console.log(keepLoggedIn);
    setKeepLoggedIn(!keepLoggedIn);
  }
  function handleCreateAccount() {
    router.push('/sign-up')
  }
  function handleForgetPassword() {
    router.push('/forget-password')
  }
  function handleLogin() {
    console.log("i am talha");
    console.log({
      email,
      password,
      keepLoggedIn,
    });
    //baad ma idhar sa data bhejna ha
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:gap-16.5 px-4 pt-35 pb-8 md:py-20">
      <div className="flex flex-col items-start  ">
        <h2 className="text-supportiveBlue font-normal text-[33px]">
          Welcome back
        </h2>
        <p className="font-normal text-supportiveBlue/50 text-[19px] max-w-sm text-start">
          Log in to explore exciting auctions and unique finds.
        </p>
      </div>

      <form action="" className=" w-full flex flex-col gap-2.5">
        <div className="flex flex-col gap-5">
          <InputField
            title={"Email"}
            prefixIcon={<EmailIcon />}
            placeholder={"Enter your email, username or phone"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            title={"Password"}
            prefixIcon={<LockIcon />}
            postfixIcon={<HidePasswordIcon />}
            placeholder={"Enter your password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center">
          <div
            onClick={handleKeepLoggedIn}
            className="flex gap-2.5 items-center"
          >
            {keepLoggedIn ? <CheckboxFilled /> : <CheckboxEmpty />}
            <p className="text-[14px] cursor-pointer">Keep me logged in</p>
          </div>
          <p className="text-[14px] font-medium text-moonstone cursor-pointer" onClick={handleForgetPassword}> 
            Forgot password ?
          </p>
        </div>
      </form>
      <div className="flex flex-col gap-7">
        <AuthButton content={"Log into your account"} onClick={handleLogin} />
        <div className="text-[12px] font-medium text-delftBlue flex flex-col justify-center items-center gap-2.5">
          <h3>
            New to Mumtlikaty?
            <span className="text-moonstone cursor-pointer text-[14px]" onClick={handleCreateAccount}> Create Account</span>{" "}
          </h3>
          <p>or</p>
          <p className="text-[14px] font-medium text-moonstone cursor-pointer">
            Continue as Guest ?
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
