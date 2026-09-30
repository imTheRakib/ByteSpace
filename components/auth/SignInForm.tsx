"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export function SignInForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect to the authentication API
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
      <TextField
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="designer@example.com"
        autoComplete="email"
        required
        className="w-full"
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="********"
        autoComplete="current-password"
        required
        className="w-full"
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
}
