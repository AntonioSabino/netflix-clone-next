import Image from 'next/image'

import { BsFillPlayFill } from 'react-icons/bs'

interface MovieCardProps {
  data: Record<string, any>
}

export default function MovieCard({ data }: MovieCardProps) {
  return (
    <div
      className="
        group
        bg-zinc-900
        col-span
        relative
        h-[12vw]
        rounded-md
      "
    >
      <div
        className="
          relative
          cursor-pointer
          object-cover
          transition
          shadow-xl
          rounded-md
          overflow-hidden
          group-hover:opacity-90
          sm:group-hover:opacity-0
          delay-300
          h-full
          w-full
        "
      >
        <Image src={data.thumbnailUrl} alt="Poster" fill />
      </div>
      <div
        className="
          opacity-0
          absolute
          top-0
          transition
          duration-200
          z-10
          invisible
          sm:visible
          delay-300
          w-full
          scale-0
          group-hover:scale-110
          group-hover:-translate-y-[6vw]
          group-hover:translate-x-[2vw]
          group-hover:opacity-100
        "
      >
        <div
          className="
            relative
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            overflow-hidden
            w-full
            h-[12vw]
          "
        >
          <Image src={data.thumbnailUrl} alt="Thumbnail" fill />
        </div>
        <div
          className="
            z-10
            bg-zinc-800
            p-2
            lg:p-4
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
          "
        >
          <div
            className="
                flex
                flex-row
                items-center
                gap-3
              "
          >
            <div
              className="
                  cursor-pointer
                  w-6
                  h-6
                  lg:w-10
                  lg:h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition
                  hover:bg-neutral-300
                "
              onClick={() => {}}
            >
              <BsFillPlayFill size={30} />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>

          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div
            className="
                flex 
                flex-row 
                items-center 
                gap-2 
                mt-4 
                text-[8px] 
                text-white 
                lg:text-sm
              "
          >
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
