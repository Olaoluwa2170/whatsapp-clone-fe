import React from "react";
import Image from "next/image";
import { useAppStore } from "@/context/StateReducers";
import Input from "@/components/common/Input";
import { useState } from "react";

function onboarding() {
  const userInfo = useAppStore(state => state.userInfo);
  const [name, setName] = useState(userInfo?.name | "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png")
  return <div className="h-screen w-screen flex flex-col text-white justify-center items-center">
    <div className="flex justify-between w-screen">
      <div className="flex bg-incoming-background px-20 w-[50%] h-screen items-center justify-center">
              <Image src={"/whatsapp.gif"} width={300} height={300}/>
              <span className="ml-5 text-3xl text-white font-bold">Whatsapp</span>
      </div>
              <div className=" w-[50%] flex flex-col gap-10 h-screen bg-teal-500 justify-center items-center">
                <p className="text-panel-header-background text-3xl font-bold">Create your Profile</p>
                <div className="space-y-7">
                  <Input title="Display Name" state={name} setState={setName} label/>
                  <Input title="About" state={about} setState={setAbout} label/>
                </div>
              </div>
    </div>
  </div>;
}

export default onboarding;
