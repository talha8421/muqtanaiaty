"use client";
import { ArrowBack, Location } from "@/components/app-icons/Icons";
import AuthButton from "@/components/auth/AuthButton";
import LocationSelection from "@/components/location-selection/LocationSelection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function LocationSelectionScreen() {
  const [opendialog, setOpendialog] = useState(true);

  const router = useRouter();
  function handleBackButton() {
    history.back();
  }
  function handleSelectLocation() {
    setOpendialog(true);
  }
  return (
    <div className="flex flex-col min-h-screen items-center  font-sans">
      <div className="flex flex-col items-center justify-center  gap-25  px-4  pb-8  h-190  max-w-sm">
        <div
          className="absolute top-34 left-10 cursor-pointer gap-1  items-center justify-center text-supportiveBlue text-[24px] flex"
          onClick={handleBackButton}
        >
          <ArrowBack />
          <h2>Back</h2>
        </div>

        <div className="w-full flex items-center justify-center flex-col">
          <Image
            src="/location_image.png"
            alt="Location illustration"
            width={300}
            height={300}
            className="hidden md:flex"
          />

          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-[22px] text-black/80">
              Where do you want to explore and shop?
            </h2>
            <p className="text-[15px]  text-black/50">
              To provide you with the best experience, let us know your
              preferred location for buying or selling.
            </p>
          </div>
        </div>


      <LocationSelection/>  
        {/* <div className="flex flex-col gap-2 w-full  items-center justify-center  ">
          <Dialog>
            <DialogTrigger
              className={"w-full flex items-center justify-center"}
            >
              {" "}
              <div
                className="w-[60%] flex  bg-moonstone p-2.75 text-white items-center justify-center rounded-[8px] font-medium text-[14px] h-10.25 border-2 border-moonstone"
                onClick={handleSelectLocation}
              >
                <Location /> <h2 className="whitespace-nowrap">Near Me</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger
              className={"w-full flex items-center justify-center"}
            >
              {" "}
              <div
                className="w-[60%] flex bg-white p-2.75 text-moonstone items-center justify-center rounded-[8px] font-medium text-[14px] border-2 border-moonstone box-border"
                onClick={handleSelectLocation}
              >
                <Location />{" "}
                <h2 className="whitespace-nowrap">Enter a different address</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div> */}

        {/* <div className="flex flex-col gap-2 w-full  items-center justify-center ">
          <div
            className="w-[60%] flex  bg-moonstone p-2.75 text-white items-center justify-center rounded-[8px] font-medium text-[14px] h-10.25 border-2 border-moonstone"
            onClick={handleSelectLocation}
          >
            <Location /> <h2 className="whitespace-nowrap">Near Me</h2>
          </div>

          <div
            className="w-[60%] flex bg-white p-2.75 text-moonstone items-center justify-center rounded-[8px] font-medium text-[14px] border-2 border-moonstone box-border"
            onClick={handleSelectLocation}
          >
            <Location />{" "}
            <h2 className="whitespace-nowrap">Enter a different address</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default LocationSelectionScreen;
