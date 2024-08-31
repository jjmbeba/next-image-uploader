import {query} from './_generated/server'

export const getImages = query({
    args:{},
    handler: async (ctx) => {
        return await ctx.db.query("images").collect()
    }
})