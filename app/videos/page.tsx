import VideoList from "@/components/VideoList";
import {getVideosForUser} from "@/server/queries";


export default async function VideosPage() {
    const videos = await getVideosForUser();

    return (
        <main className="p-9">
            <VideoList initialVideos={videos} />
        </main>
    );
}