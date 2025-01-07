"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const PublicKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={PublicKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
