"use client";

import React from 'react'
import {UploadedFilesCard} from "@/components/uploaded-files-card";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

const ImagesList = () => {
    const images = useQuery(api.images.getImages);

    return (
        <div>
            {images && images.length > 0 ? (
                <UploadedFilesCard uploadedFiles={images || []} />
            ) : null}
        </div>
    )
}
export default ImagesList
