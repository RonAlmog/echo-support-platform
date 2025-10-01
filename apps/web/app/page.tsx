"use client";
import { api } from "@workspace/backend/_generated/api";
import { add } from "@workspace/math/add";
import { Button } from "@workspace/ui/components/button";
import { useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getAllUsers) || [];
  console.log(users);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Apps/Web</h1>
        <Button size="sm">Button</Button>
        <p>{`2 + 3 = ${add(2, 3)}`}</p>
      </div>
    </div>
  );
}
