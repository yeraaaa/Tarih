import Image from "next/image"
import Link from 'next/link'


export default function Header() {
    return (
        <>
            <div className="flex px-6 py-4 items-center justify-between w-full backdrop-blur-lg">
                <div className="flex items-center text-center gap-4 md:gap-10">
                    <Link href="./" className="font-bold">
                        <Image width={75} height={45}  src="/logosmall.png" alt='logo'/>
                    </Link>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium">
                        <Link className="hover:text-[#3d52a0]" href='./chat'>KazChat</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium">
                        <Link className="hover:text-[#3d52a0]" href='./chronology'>Chronology</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium">
                        <Link className="hover:text-[#3d52a0]" href='./figures'>Key Figures</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium">
                        <Link className="hover:text-[#3d52a0]" href='./symbols'>Symbols</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
