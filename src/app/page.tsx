import GridPattern from "@ycorp.co.th/components/animated/GridPattern";
import SparklesText from "@ycorp.co.th/components/animated/SparklesText";

import { cn } from "@ycorp.co.th/libraries/classname";

export default function RootPage() {
    return (
        <div className="relative w-full h-[100dvh] flex justify-center items-center overflow-hidden">
            <GridPattern
                numSquares={64}
                maxOpacity={0.2}
                duration={3}
                className={cn(
                    "absolute top-0 left-0 w-full h-full",
                    "[mask-image:radial-gradient(720px_circle_at_center,white,transparent)]"
                )}
            />

            <div className="flex flex-col justify-center items-center space-y-4">
                <SparklesText
                    text="เว็บไซต์กำลังอยู่ในระหว่างการพัฒนา"
                    className="text-5xl"
                    sparklesCount={24}
                />
                <span className="text-2xl text-neutral-500">&quot;เตรียมพบกับเว็บไซต์ใหม่อย่างเป็นทางการของเรา ที่จะเปิดตัวเร็วๆ นี้&quot;</span>
            </div>
        </div>
    );
}
