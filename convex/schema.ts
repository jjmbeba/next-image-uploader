import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    images: defineTable({
        customId: v.null(),
        key: v.string(),
        name: v.string(),
        serverData: v.object({ uploadedBy: v.string() }),
        size: v.float64(),
        type: v.string(),
        url: v.string(),
    }),
});