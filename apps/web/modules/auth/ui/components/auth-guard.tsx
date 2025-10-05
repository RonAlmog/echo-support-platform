"use client";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { AuthLayout } from "../layouts/auth-layout";
import { SignIn } from "@clerk/nextjs";
import SignInView from "../views/sign-in-view";

// A wrapper component to protect routes that require authentication
export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthLayout>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <SignInView />
      </Unauthenticated>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
    </AuthLayout>
  );
};
