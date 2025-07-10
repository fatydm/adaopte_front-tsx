"use client";

import { useState } from "react";
import axios from "axios";
import Button from "./UI/Button";
import { useRouter } from "next/navigation";
import Input from "./UI/Input";
import Link from "next/link";

export default function FormSignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register/", form);
      console.log(res);

      setMessage("Compte créé avec succès !");
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setMessage("Erreur : " + JSON.stringify(err.response?.data));
      } else {
        setMessage("Erreur inconnue");
      }
    }
  };

  return (
    <main className="flex flex-col items-center gap-1 mt-[22px] border-1 p-5 rounded-md">
      <h2>Se connecter</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center"
      >
        <div className="flex flex-row gap-1">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          label="Se connecter"
          classes=" mt-[20px] bg-[#333] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8e8d8d]"
        />
      </form>
      <Link href="/signUp">
        <p>Je n&apos;ai pas encore de compte</p>
      </Link>
      <p>{message}</p>
    </main>
  );
}
