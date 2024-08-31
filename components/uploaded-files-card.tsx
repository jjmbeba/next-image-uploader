import Image from "next/image"
import type { UploadedFile } from "@/types"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { EmptyCard } from "@/components/emprt-card"
import {Button} from "@/components/ui/button";
import {FileIcon, Files} from "lucide-react";
import CopyButton from "@/components/CopyButton";

interface UploadedFilesCardProps {
    uploadedFiles: UploadedFile[]
}

export function UploadedFilesCard({ uploadedFiles }: UploadedFilesCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Uploaded files</CardTitle>
                <CardDescription>View the uploaded files here</CardDescription>
            </CardHeader>
            <CardContent>
                {uploadedFiles.length > 0 ? (
                    <ScrollArea className="pb-4 h-[200px]">
                        <div className="flex w-max space-x-2.5">
                            {uploadedFiles.map((file) => (
                                <div key={file.key} className="relative aspect-video w-64">
                                    <Image
                                        src={file.url}
                                        alt={file.name}
                                        fill
                                        sizes="(min-width: 640px) 640px, 100vw"
                                        loading="lazy"
                                        className="rounded-md object-cover"
                                    />
                                    <CopyButton url={file.url} name={file.name} />
                                    <p className={'absolute -bottom-10 text-xs z-10'}>
                                        {file.name} ({file.size})
                                    </p>
                                </div>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                ) : (
                    <EmptyCard
                        title="No files uploaded"
                        description="Upload some files to see them here"
                        className="w-full"
                    />
                )}
            </CardContent>
        </Card>
    )
}