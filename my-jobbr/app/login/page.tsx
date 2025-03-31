import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.png";
import LoginForm from "@/components/forms/loginForm";

const Login = () => {
  return (
    <div className=" h-[100vh]  flex items-center justify-center">
      <div className="flex w-full max-w-sm  flex-col gap-6 ">
        <Link href={"/"} className="flex self-center items-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10" />
          <h1 className="text-2xl font-bold">JobMarshal</h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
