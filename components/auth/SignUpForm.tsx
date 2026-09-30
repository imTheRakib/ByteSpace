"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export function SignUpForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect to the registration API
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
      <TextField
        id="full-name"
        name="fullName"
        label="Full Name"
        placeholder="Jamie Davis"
        autoComplete="name"
        required
        className="w-full"
      />
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
        autoComplete="new-password"
        minLength={8}
        required
        className="w-full"
      />
      <Button type="submit">Continue</Button>
    </form>
  );
}
