"use client";
import ReCaptchaProvider from "@/components/reCaptchaProvider/ReCaptchaProvider";
import { Providers } from "@/lib/state-management/providers";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children, session }) {
  return (
    <ReCaptchaProvider>
      <SessionProvider session={session}>
        <Providers>{children}</Providers>
        <Toaster position="bottom-right" reverseOrder={false} />
      </SessionProvider>
    </ReCaptchaProvider>
  );
}
