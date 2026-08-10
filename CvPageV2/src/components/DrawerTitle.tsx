
import { cn } from '../lib/utils'

type DrawerMedia =
    | {
        type: 'image'
        src: string
        alt: string
    }
    | {
        type: 'video'
        src: string
        poster?: string
    }

type DrawerTitleProps = {
    title: string
    media?: DrawerMedia
    titleClassName?: string
    titleWrapperClassName?: string
}

export function DrawerTitle({
    title,
    media,
    titleClassName,
    titleWrapperClassName,
}: DrawerTitleProps) {
    return (
        <header className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-zinc-950">
            {media?.type === 'image' && (
                <img
                    src={media.src}
                    alt={media.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}

            {media?.type === 'video' && (
                <video
                    src={media.src}
                    poster={media.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}

            {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10" /> */}
            {/* <div className="absolute inset-0 z-10 grid place-items-center "></div> */}
            <div className="absolute -inset-1 bg-black/75" />
            <div
                aria-hidden="true"
                className="
                    absolute inset-x-0 bottom-0 z-[1]
                    h-[clamp(2.5rem,6vw,4.5rem)]
                    bg-linear-to-b
                    from-transparent
                    to-zinc-800
                "
            />

            <h1
                className={cn(
                    `
            relative z-10
            -translate-y-2.5
            px-16
            text-center
            font-matisse
            text-[clamp(3rem,12vw,4.5rem)]
            leading-none
            font-semibold
            tracking-wider
            uppercase
            `,
                    titleWrapperClassName,
                )}
            >

                {/* text-[clamp(2.25rem,8vw,4.5rem)] */}
                <span
                    className={cn(
                        `
              inline-block
              origin-center
              scale-x-[1.4]
              scale-y-[4.7]
              tracking-tight
              text-white/95
              sm:scale-x-[1.3]
              sm:scale-y-[4.5]
            `,
                        titleClassName,
                    )}
                >
                    {title}
                </span>



            </h1>


        </header>
    )
}