"use client";

import { CircularTick } from "@/components/app-icons/Icons";
import AuthButton from "@/components/auth/AuthButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function OnBoarding() {
  const [role, setRole] = useState(null);
  const router = useRouter();

  const handleContinue = () => {
    if (!role) return;
    router.push(`/login?role=${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:gap-16.5 px-4 pt-35 pb-8 md:py-20">
      <div className="flex flex-col items-start  ">
        <h2 className={`text-eerieBlack font-medium text-[24px] `}>
          Are you here to buy or sell?
        </h2>
        <p className="font-normal text-supportiveBlue/50 text-[19px] max-w-sm text-start">
          Choose your role to get the most tailored experience.
        </p>
      </div>

      <div className="flex gap-4.75">
        <UserTypeCard
          role="Buyer"
          label="Buyer"
          isSelected={role === "Buyer"}
          onClick={() => setRole("Buyer")}
        />
        <UserTypeCard
          role="Seller"
          label="Seller"
          isSelected={role === "Seller"}
          onClick={() => setRole("Seller")}
        />
      </div>

      <AuthButton
        isDisabled={!role}
        content={`Continue${role ? ` as ${role}` : ""}`}
        onClick={handleContinue}
      />
    </div>
  );
}

export default OnBoarding;

function UserTypeCard({ role, label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center gap-8.5 p-[14.5px] pt-11 bg-white rounded-[24px] shadow-[0_0_30px_2.4px_rgba(0,0,0,0.1)]
      ${
        isSelected ? "border-2 border-moonstone" : "border-2 border-transparent"
      }
      `}
    >
      <div className="h-41 sm:35 md:w-41 min-w-auto">
        <Image
          src={role === "Buyer" ? "/choose_buyer.png" : "/choose_seller.png"}
          alt={label}
          width={160}
          height={160}
        />
      </div>

      <h2
        className={` text-[24px] font-medium ${
          isSelected
            ? "text-russionViolt"
            : "text-eerieBlack"
        }`}
      >
        {label}
      </h2>

      {isSelected && <CircularTick className="absolute top-2 left-2" />}
    </button>
  );
}
