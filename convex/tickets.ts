import { v, ConvexError } from "convex/values";
import { query } from "./_generated/server";
import { getCurrentUserOrThrow } from "./users";

export const getUserTicketForEvent = query({
  args: { eventId: v.id("events") },

  handler: async (ctx, { eventId }) => {
    const currentUser = await getCurrentUserOrThrow(ctx);
    if (!currentUser) throw new ConvexError("User not found");

    const ticket = await ctx.db
      .query("tickets")
      .withIndex("by_user_event", q =>
        q.eq("userId", currentUser.userId).eq("eventId", eventId)
      )
      .first();

    return ticket;
  },
});
