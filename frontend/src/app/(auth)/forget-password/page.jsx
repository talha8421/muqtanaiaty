"use client";
import { ArrowBack } from "@/components/app-icons/Icons";
import AuthButton from "@/components/auth/AuthButton";
import InputField from "@/components/globals/InputField";
import { useRouter } from "next/navigation";
import React from "react";

function ForgetPassword() {
  const router = useRouter();
  function handleBackButton() {
    router.push(`/login`)
  }
  function handleVerifyAndContinue() {}
  function handleSendResetLink() {
    router.push(`/forget-password/email-verification`);
  }
  return (
    <div className="flex h-screen w-screen  items-center justify-center">
      <div className="flex flex-col items-center justify-center  gap-17.5  px-4  pb-8  h-190  max-w-sm pt-15 md:pt-0 font-medium md:font-normal">
        <div
          className="absolute top-34 left-10 cursor-pointer gap-1 hidden items-center justify-center text-supportiveBlue text-[24px] md:flex"
            onClick={handleBackButton}
        >
          <ArrowBack />
          <h2>Back</h2>
        </div>

        <div className="flex flex-col items-start gap-2  ">
          <h2
            className={`text-supportiveBlue text-[24px] md:text-[33px] flex items-center gap-3`}
          >
            <span
                onClick={handleBackButton}
              className="cursor-pointer md:hidden"
            >
              <ArrowBack />
            </span>
            Forgot Password?
          </h2>

          <p className="text-battleshipGray">
            Don’t worry! Enter your registered email address or Phone Number,
            and we’ll help you reset your password.{" "}
          </p>
        </div>

        <form action="" className="w-full">
          <InputField
            title={"Email or Phone"}
            placeholder={"alexjhons@mumtlkaty.com"}

            // onChange={(e) => setEmail(e.target.value)}
          />
        </form>

        <AuthButton content={`Send Reset Link`} onClick={handleSendResetLink} />
      </div>
    </div>
  );
}

export default ForgetPassword;
