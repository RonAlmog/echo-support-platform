import { mutation, query } from "./_generated/server";

export const getAllUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    console.log("User identity:", identity);

    const user = await ctx.db.insert("users", {
      name: "John Doe",
      email: "john.doe@example.com",
    });
    return user;
  },
});
