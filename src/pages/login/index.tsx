import LoginModal from "@/src/components/loginModal";
import { useSession } from "next-auth/react";
import router from "next/router";
import React from "react";

const LoginPage = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    router.push("/app");
  }
  return (
    <div>
      <div className="mt-24 text-center text-3xl">
        You must be logged in to use that page
      </div>
      <LoginModal onClose={undefined} loginRef={undefined} />
    </div>
  );
};

export default LoginPage;
