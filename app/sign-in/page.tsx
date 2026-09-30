import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignInForm } from "@/components/auth/SignInForm";
import { SocialSignIn } from "@/components/auth/SocialSignIn";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex h-full flex-col items-center justify-between gap-10">
        <div className="flex w-full flex-col gap-10">
          <hgroup>
            <p className="text-lg leading-[1.6] text-primary">Sign In</p>
            <h1 className="text-heading-m text-shuttle-950 max-sm:text-[36px]">Welcome Back</h1>
          </hgroup>
          <SignInForm />
        </div>

        <SocialSignIn />

        <p className="flex gap-1 text-base leading-[1.6]">
          <span className="text-black-400">New user?</span>
          <Link href="/sign-up" className="text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
