import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col items-center gap-16 sm:gap-[122px]">
        <div className="flex w-full flex-col gap-10">
          <hgroup>
            <p className="text-lg leading-[1.6] text-primary">Create an Account</p>
            <h1 className="text-heading-m text-shuttle-950 max-sm:text-[36px]">Welcome to ByteSpace</h1>
          </hgroup>
          <SignUpForm />
        </div>

        <p className="flex gap-1 text-base leading-[1.6]">
          <span className="text-shuttle-700">Already have an account?</span>
          <Link href="/sign-in" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
