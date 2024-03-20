import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios"
import { CHECK_USERS } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useAppStore } from "@/context/StateReducers";

function login() {
  const router = useRouter()
  const setNewUser = useAppStore(state => state.setNewUser);
  const setUserInfo = useAppStore(state => state.setUserInfo);
  
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage }
    } = await signInWithPopup(firebaseAuth, provider)
 
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USERS, {email});
        console.log({ data })
        if (data.status === 401) {
          setNewUser(true);
          setUserInfo({name, email, profileImage, status: ""});
          router.push('/onboarding')
        }
      }
    } catch (err) {
      console.log(err)
    }
  };
  return <div className = "flex justify-center h-screen w-full flex-col gap-6 items-center bg-panel-header-background">
    <div className="flex justify-center items-center text-white gap-2">
      <Image src={"/whatsapp.gif"} height={300} width={300}/>
      <span className="text-7xl">Whatsapp</span>
    </div>
    <button
    className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
    onClick={handleLogin}>
      <FcGoogle className="text-4xl"/>
      <span className="text-white text-2xl">Login with Google</span>
    </button>
  </div>;
}

export default login;
