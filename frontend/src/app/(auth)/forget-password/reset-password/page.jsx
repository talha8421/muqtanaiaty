"use client";
import {
  ArrowBack,
  HidePasswordIcon,
  LockIcon,
} from "@/components/app-icons/Icons";
import AuthButton from "@/components/auth/AuthButton";
import InputField from "@/components/globals/InputField";
import { useRouter } from "next/navigation";
import React from "react";

function ResetPassword() {
  const router = useRouter();
  function handleBackButton() {
    console.log(history);

    history.back();
  }
  function handleResetPassword() {
    router.push(`/login`)
  }
  return (
    <div className="flex h-screen w-screen  items-center justify-center">
      <div className="flex flex-col items-center justify-center  gap-12.5  px-4  pb-8  h-190  max-w-sm pt-15 md:pt-0 font-medium md:font-normal">
        <div
          className="absolute top-34 left-10 cursor-pointer gap-1 hidden items-center justify-center text-supportiveBlue text-[24px] md:flex"
          onClick={handleBackButton}
        >
          <ArrowBack />
          <h2>Back</h2>
        </div>

        <div className="flex flex-col items-start gap-3  ">
          <h2
            className={`text-supportiveBlue text-[24px]  md:text-[33px] flex items-center gap-3`}
          >
            <span
              onClick={handleBackButton}
              className="cursor-pointer md:hidden"
            >
              <ArrowBack />
            </span>
            Reset Your Password
          </h2>

          <p className="text-battleshipGray">
            Enter a new password below to reset your account access.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
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

        <div className="flex flex-col items-center justify-center gap-6.75 ">
          <AuthButton
            content={`Reset Password`}
            forwardIcon={false}
            onClick={handleResetPassword}
          />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
