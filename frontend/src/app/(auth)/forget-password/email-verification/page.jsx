"use client";
import React from "react";
import { ArrowBack } from "@/components/app-icons/Icons";
import AuthButton from "@/components/auth/AuthButton";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function EmailVerificationScreen() {
  const router = useRouter();

  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  function handleChange(value, index) {
    if (!/^\d?$/.test(value)) return; // allow only digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  }
  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  const userEmail = "alexjhons@mumtlkaty.com";
  function handleBackButton() {
    history.back();
  }
  function handleVerifyAndContinue() {
    router.push(`/forget-password/reset-password`);
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

        <div className="flex flex-col items-start gap-3  w-fit">

          <h2
            className={`text-supportiveBlue text-[24px]  md:text-[33px] flex items-center gap-3`}
          >
            <span
              onClick={handleBackButton}
              className="cursor-pointer md:hidden"
            >
              <ArrowBack />
            </span>
            Verification Required
          </h2>

          <p className="text-battleshipGray">
            We’ve sent a password reset link to{" "}
            <span className="text-eerieBlack whitespace-nowrap">
              {userEmail}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-eerieBlack text-[16.5px] font-medium ">
            Enter OTP
          </h2>
          <div className="flex items-center justify-center gap-2">
            {
            
            code.map((digit, index) => (
                
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="
                        w-18.75 h-18.75
                        text-center
                        text-3xl
                        text-delftBlue
                        rounded-[10px]
                        bg-fbGray

                        border-2 border-fbGray
                        focus:border-moonstone
                        active:border-moonstone

                        outline-none
                        focus:outline-none
                        focus:ring-0
                      "
              />
              
            ))
            
            
        }
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6.75 ">
          <AuthButton
            content={`Verify Code`}
            onClick={handleVerifyAndContinue}
          />
          <p className="font-medium text-[12px] text-davysGray">
            Didn’t receive the code?
            <span className="text-moonstone text-[14px] cursor-pointer ">
              {" "}
              Resend Code
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailVerificationScreen;
