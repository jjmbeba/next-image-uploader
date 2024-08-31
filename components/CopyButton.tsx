import React from 'react'
import {Check, DownloadIcon, Files} from "lucide-react";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import fileDownload from 'js-file-download'
import axios from "axios";

type Props = {
    url:string;
    name:string;
}

const CopyButton = ({url, name}:Props) =>{
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            toast.success('Copied to clipboard');
        } catch (err) {
            toast.error('Failed to copy: ');
        }
    };

    const handleDownload = async (url:string, fileName:string) => {
        await axios.get(url, {responseType: 'blob'}).then((res) => {
            fileDownload(res.data, fileName);
        });
    }


    return (
        <>
            <Button onClick={() => {
                toast.promise(handleDownload(url, name), {
                    loading: 'Downloading...',
                    success: `${name} Downloaded`,
                    error: 'Failed to download'
                })
            }} className={'absolute top-2 right-14 opacity-30 hover:opacity-100 transition-all'} size={'icon'} variant={'outline'}>
                    <DownloadIcon className={'h-4 w-4'}/>
            </Button>
            <Button onClick={() => copyToClipboard(url)} className={'absolute right-2 top-2 opacity-30 hover:opacity-100 transition-all'} size={'icon'} variant={'outline'}>
                {!copied ? <Files className={'h-4 w-4'}/> : <Check className={'h-4 w-4 text-green-700'} />}
            </Button>
        </>
    )
}
export default CopyButton
