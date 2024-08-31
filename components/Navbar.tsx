import {Separator} from "@/components/ui/separator";
import Image from 'next/image';
import logo from '@/public/logo.svg';
import {ThemeToggle} from "@/components/ThemeToggle";

const Navbar = () => {
    return (
        <>
            <div className={'flex items-center justify-between px-12 py-5'}>
                <Image src={logo} width={140} height={200} alt={'Logo'}/>
                <ThemeToggle/>
            </div>
            <Separator className={'w-full h-[1px]'} />
        </>
    )
}
export default Navbar
