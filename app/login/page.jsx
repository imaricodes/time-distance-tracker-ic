"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import MessageList from "../components/MessageList";
import { useSession } from "next-auth/react";
import { Alexandria } from "next/font/google";

export default function LoginPage() {
  const [errMsgs, setErrMsgs] = useState(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result.error) {
        // Handle successful login
        router.push("/trips");
      } else {
        // Handle unsuccessful login
        setErrMsgs({ message: result.error });
      }
    } catch (error) {
      setErrMsgs({ message: error.message });
    }
  }

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center">
      <MessageList errMsgs={errMsgs} />
      <form
        onSubmit={handleSubmit}
        className="w-96 border rounded-lg bg-blue-500 shadow-xl p-5"
        name="loginFrm"
      >
        <h1
          id="login-header"
          className="text-4xl font-bold text-primary mb-4 text-center"
        >
          Login
        </h1>
        <div>
          <input
            className="w-full py-2 px-3 border rounded-lg mb-3"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            className="w-full py-2 px-3 border rounded-lg mb-3"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="btn-login">
          Login
        </button>
        <button
          type="submit"
          id="sub-btn-google"
          onClick={() => signIn("google")}
          className="btn-login"
        >
          Sign in with Google
        </button>
        <Link href="/register" className="mt-4">
          Go To Registration
        </Link>
      </form>
    </div>
  );
}
