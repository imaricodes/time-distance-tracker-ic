"use client";

import { useRouter } from "next/navigation";
import RegisterForm from "./RegisterForm";
import MessageList from "../components/MessageList";
import { useState } from "react";

// export const metadata = {
//   title: "Register User",
// };

export default function RegisterUserPage() {
  const [errMsgs, setErrMsgs] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { firstName, lastName, email, password, password2 } =
      Object.fromEntries(formData);

    try {
      const res = await fetch("/api/auth/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          password2,
        }),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        const errData = await res.json();
        setErrMsgs(errData);
      }
    } catch (err) {
      console.log(`Error in app/register-user ${err}`);
      router.push("/error-page");
    }
  }

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center">
      <MessageList errMsgs={errMsgs} />
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
}
