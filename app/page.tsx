import { Button } from "@/components/ui/button";
import Image from "next/image";
import boy from "@/gifs/boy-hi.gif";

export default function Home() {
    return (
        <div className="w-full h-full flex items-center justify-evenly">
            <div className="text-5xl font-bold flex flex-col items-center justify-center space-y-16">
                <p>Fast Review</p>
                <Image src={boy} alt="hi" width="300" height="300" />
            </div>
            <div className="flex flex-col space-y-16">
                <Button variant="primary" size="primary">
                    Use Your Data
                </Button>
                <Button variant="primary" size="primary">
                    Data From Server
                </Button>
            </div>
        </div>
    );
}
