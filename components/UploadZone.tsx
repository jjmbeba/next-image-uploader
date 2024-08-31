"use client"

import * as React from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {z} from "zod"

import {getErrorMessage} from "@/lib/handle-error"
import {useUploadFile} from "@/hooks/use-upload-file"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {FileUploader} from "@/components/file-uploader"
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

const schema = z.object({
    images: z.array(z.instanceof(File)),
})

type Schema = z.infer<typeof schema>

export function UploadZone() {
    const [loading, setLoading] = React.useState(false)
    const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile(
        "imageUploader",
        { defaultUploadedFiles: [] }
    )
    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            images: [],
        },
    })

    function onSubmit(input: Schema) {
        setLoading(true)

        toast.promise(onUpload(input.images), {
            loading: "Uploading images...",
            success: () => {
                form.reset()
                setLoading(false)
                return "Images uploaded"
            },
            error: (err) => {
                setLoading(false)
                return getErrorMessage(err)
            },
        })
    }

    const images = useQuery(api.images.getImages);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-6"
            >
                <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                        <div className="space-y-6">
                            <FormItem className="w-full">
                                <FormLabel>Upload an image</FormLabel>
                                <FormControl>
                                    <FileUploader
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        maxFileCount={4}
                                        maxSize={4 * 1024 * 1024}
                                        progresses={progresses}
                                        // pass the onUpload function here for direct upload
                                        // onUpload={uploadFiles}
                                        disabled={isUploading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </div>
                    )}
                />
                <Button className="w-fit" disabled={loading}>
                    Save
                </Button>
            </form>
        </Form>
    )
}