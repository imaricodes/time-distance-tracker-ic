"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm({ handleSubmit }) {
  return (
    <div className="mt-5 flex flex-row justify-center">
      <form
        method="POST"
        className="w-96 border rounded-lg bg-blue-500 shadow-xl p-5"
        id="register-frm"
        name="register-frm"
        onSubmit={handleSubmit}
      >
        <h1
          id="register-header"
          className="text-4xl font-bold text-primary mb-4 text-center"
        >
          Registration
        </h1>
        <div>
          <input
            type="text"
            name="firstName"
            id="first-name"
            placeholder="First Name"
            className="w-full py-2 px-3 border rounded-lg mb-3"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            id="last-name"
            placeholder="Last Name"
            className="w-full py-2 px-3 border rounded-lg mb-3"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="reg-email"
            placeholder="my-name@coolmail.com"
            className="w-full py-2 px-3 border rounded-lg mb-3"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="reg-password"
            maxLength="50"
            placeholder="Password Min 8 Characters"
            className="w-full py-2 px-3 border rounded-lg mb-3"
          />
        </div>
        <div>
          <input
            type="password"
            name="password2"
            id="reg-confirm"
            placeholder="Confirm Password"
            className="w-full py-2 px-3 border rounded-lg mb-3"
          />
        </div>
        <input
          type="submit"
          name="reg-sub-btn"
          id="reg-sub-btn"
          value="Register"
          className="btn-login"
        />
        <Link href="/login" className="mt-4 text-primary">
          Go to Login
        </Link>
      </form>
    </div>
  );
}
