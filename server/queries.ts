"use server"

import { auth } from "@clerk/nextjs/server";
import { Video, Videos, YouTubeChannels, YouTubeChannelType } from "./db/schema";
import { db } from "./db/drizzle";
import { eq } from "drizzle-orm";

export const getVideosForUser = async (): Promise<Video[]> => {
    // call clerk to make sure user is logged in
    const { userId } = await auth();

    if (!userId) {
        throw new Error("User not authenticated");
    }

    // use drizzle to create query 
    return db.select().from(Videos).where(eq(Videos.userId, userId));
}


export const getChannelsForUser = async (): Promise<YouTubeChannelType[]> => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("User not authenticated");
    }

    return db.select().from(YouTubeChannels).where(eq(YouTubeChannels.userId, userId));
}