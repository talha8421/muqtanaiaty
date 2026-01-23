"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Location } from "../app-icons/Icons";
import InputField from "../globals/InputField";
import AuthButton from "../auth/AuthButton";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";

function LocationSelection() {
  return (
    <div className="flex flex-col gap-2 w-full  items-center justify-center  ">
      <Dialog>
        <DialogTrigger className={"w-full flex items-center justify-center"}>
          {" "}
          <div
            className="w-[60%] flex  bg-moonstone p-2.75 text-white items-center justify-center rounded-[8px] font-medium text-[14px] h-10.25 border-2 border-moonstone gap-1"
            // onClick={handleSelectLocation}
          >
            <Location size={18} />{" "}
            <h2 className="whitespace-nowrap">Near Me</h2>
          </div>
        </DialogTrigger>
        <MapDetails />
      </Dialog>
      <Dialog>
        <DialogTrigger className={"w-full flex items-center justify-center"}>
          {" "}
          <div
            className="w-[60%] flex bg-white p-2.75 text-moonstone items-center justify-center rounded-[8px] font-medium text-[14px] border-2 border-moonstone box-border"
            // onClick={handleSelectLocation}
          >
            <Location />{" "}
            <h2 className="whitespace-nowrap">Enter a different address</h2>
          </div>
        </DialogTrigger>
        <MapDetails />
      </Dialog>
    </div>
  );
}

export default LocationSelection;

function MapDetails() {
  const position = [51.505, -0.09];

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <div className="flex flex-col gap-3 items-center justify-center ">
            <div className="w-[95%]  h-9.5 flex items-center justify-start gap-3 my-3">
              <h2 className="font-medium text-[14px] text-black">Location</h2>
              <div className="w-full">
                <InputField
                  placeholder={"Islamabad, Pakistan"}
                  className={"w-30000px"}
                />
              </div>
            </div>
            <div className=" h-80 md:h-120 w-full bg-red-100">
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height : "100%" ,width:"100%"}}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <AuthButton
              content={"Confirm"}
              className={
                "h-10 w-45 flex items-center justify-center text-[11px] text-white bg-moonstone rounded-full font-medium"
              }
              arrowsize={14}
            />
          </div>
        </DialogTitle>
        {/* <DialogDescription>
          <h3></h3>
        </DialogDescription> */}
      </DialogHeader>
    </DialogContent>
  );
}

