import Navbar from "@/components/Navbar";
import {UploadZone} from "@/components/UploadZone";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import ImagesList from "@/components/images-list";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
                <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="flex mb-4">
                        <TabsTrigger value="upload" className="w-full md:w-auto">Upload</TabsTrigger>
                        <TabsTrigger value="images" className="w-full md:w-auto">View Images</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload">
                        <UploadZone/>
                    </TabsContent>
                    <TabsContent value="images">
                        <ImagesList/>
                    </TabsContent>
                </Tabs>
            </main>
        </>
    );
}