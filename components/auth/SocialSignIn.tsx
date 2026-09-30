import Image from "next/image";

const providers = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

export function SocialSignIn() {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full items-center gap-[11px]">
        <span className="h-px flex-1 bg-black-200" />
        <span className="text-lg leading-[1.6] text-black-400">or</span>
        <span className="h-px flex-1 bg-black-200" />
      </div>
      <div className="flex items-center gap-4">
        {providers.map((provider) => (
          <button
            key={provider.name}
            type="button"
            aria-label={`Continue with ${provider.name}`}
            className="flex size-[72px] items-center justify-center rounded-3xl border border-black-200 transition-colors hover:border-primary"
          >
            <Image src={provider.icon} alt="" width={40} height={40} />
          </button>
        ))}
      </div>
    </div>
  );
}
