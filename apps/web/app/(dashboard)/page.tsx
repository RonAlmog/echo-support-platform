"use client";
import { api } from "@workspace/backend/_generated/api";
import { addUser } from "@workspace/backend/users";
import { Button } from "@workspace/ui/components/button";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getAllUsers) || [];
  console.log(users);
  const AddUser = useMutation(api.users.addUser);
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="mt-4">
              <UserButton />
            </div>
            <h1 className="text-2xl font-bold">Apps/Web</h1>
            <Button size="sm" onClick={() => AddUser()}>
              Add user
            </Button>

            <div>
              {users.map((user) => (
                <div key={user._id} className="p-2 border-b">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Please sign in</h1>
            <SignInButton>
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </div>
        </div>
      </Unauthenticated>
    </>
  );
}
