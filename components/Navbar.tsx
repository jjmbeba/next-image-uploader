import {Separator} from "@/components/ui/separator";
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <div className={'flex items-center justify-between px-12 py-5'}>
                <Image src={'/logo.svg'} alt={'Logo'}/>
                {/*<ThemeToggle/>*/}
            </div>
            <Separator className={'w-full h-[1px]'} />
        </>
    )
}
export default Navbar
