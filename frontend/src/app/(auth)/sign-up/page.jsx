"use client";
import { ArrowBack } from "@/components/app-icons/Icons";
import AuthButton from "@/components/auth/AuthButton";
import IdProofForm from "@/components/auth/sign-up/ID-ProofForm";
import PasswordForm from "@/components/auth/sign-up/PasswordForm";
import PersonalDetailsForm from "@/components/auth/sign-up/PersonalDetailsForm";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignUp() {
  // const [formNumber, setFormNumber] = useState();
  const router = useRouter();

  const [currentFormNo, setCurrentFormNo] = useState(1);

  function handleNexButton() {
    currentFormNo !== 3
      ? setCurrentFormNo(currentFormNo + 1)
      : router.push("/sign-up/verify-email");
  }
  function handleSignIn() {
    router.push(`/login`);
  }
  function handleBackButton() {
    currentFormNo !== 1 && setCurrentFormNo(currentFormNo - 1);
  }
  const formMap = {
    1: <PersonalDetailsForm />,
    2: <IdProofForm />,
    3: <PasswordForm />,
  };

  return (
    <div className="flex flex-col items-center justify-between gap-10 md:gap-16.5 px-4 pt-35 pb-8 md:py-20 h-190  ">
      {currentFormNo !== 1 && (
        <div
          className="absolute top-34 left-10 cursor-pointer gap-1 hidden items-center justify-center text-supportiveBlue text-[24px] md:flex"
          onClick={handleBackButton}
        >
          <ArrowBack />
          <h2>Back</h2>
        </div>
      )}

      <div className="flex flex-col items-center gap-7.5 ">
        <h2
          className={`text-eerieBlack font-medium text-[24px] flex items-center gap-3`}
        >
          {currentFormNo !== 1 && (
            <span
              onClick={handleBackButton}
              className="cursor-pointer md:hidden"
            >
              <ArrowBack />
            </span>
          )}{" "}
          Create Your Account
        </h2>
        <FormTitle
          currentFormNo={currentFormNo}
          setCurrentFormNo={setCurrentFormNo}
        />
        {formMap[currentFormNo]}
      </div>

      <div className="flex flex-col items-center justify-center gap-6.5 ">
        <AuthButton
          content={`${currentFormNo !== 3 ? "Next" : "Create Account"}`}
          onClick={handleNexButton}
        />
        <p className="font-medium text-[12px] text-davysGray">
          Already have an account?
          <span
            className="text-moonstone text-[14px] cursor-pointer "
            onClick={handleSignIn}
          >
            {" "}
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

function FormTitle({ currentFormNo, setCurrentFormNo }) {
  const titles = ["Personal Detials", "ID Proof", "Password"];

  return (
    <div className="w-full">
      <div className="flex  flex-row">
        <div className=" grid grid-cols-3 gap-2 w-full ">
          {titles.map((title, idx) => {
            return (
              <div
                className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                key={idx}
                onClick={() => {
                  setCurrentFormNo(idx + 1);
                }}
              >
                <h3
                  key={idx}
                  className={`text-[13px] ${idx + 1 <= currentFormNo ? "text-moonstone " : "text-silver"}`}
                >
                  {title}
                </h3>
                <div
                  className={` h-1.25 w-full rounded-full ${idx + 1 <= currentFormNo ? "bg-moonstone " : "bg-silver"}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
