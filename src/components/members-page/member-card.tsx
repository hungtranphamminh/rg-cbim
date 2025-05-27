import Image from "next/image";

interface Person {
  id: string;
  name: string;
  personalPageUrl: string;
  position:
    | "Faculty"
    | "PhD Students"
    | "MS/PhD Students"
    | "MS Students"
    | "Alumni"
    | "Postdoctoral Research Associate";
  enrollYear: number;
  profileImage: string;
}

interface ProfileCardProps {
  readonly person: Person;
}

export default function ProfileCard({ person }: ProfileCardProps) {
  return (
    <div
      className="hover:shadow-md transition-shadow duration-200 
    w-fit
    bg-white relative profile-container"
    >
      <div className="flex flex-col items-center text-center group relative z-10 overflow-hidden">
        {/* Profile image */}
        <div className="relative w-[260px] h-[300px] cursor-pointer">
          <Image
            src={person.profileImage}
            alt={`${person.name} profile picture`}
            fill
            className="object-cover
            transition-all duration-500 ease-in-out
            profile-image-group "
          />

          {/* White circle decorator */}
          <div
            className=" z-50 absolute top-[35%] left-1/2 -translate-y-1/2 -translate-x-1/2 
            group-hover:size-[220px] size-[400px] duration-300 ease-in-out 
            rounded-full bg-transparent border border-white"
          ></div>

          {/* Darken overlay */}
          <div
            className="w-full h-full absolute top-0 left-0 z-10 
            group-hover:opacity-100 opacity-0 duration-100 ease-in-out
          bg-gradient-to-t from-[#003153]/90 via-[#003153]/10 to-transparent
          

          "
          >
            {/* Noise overlay */}
            <div
              className="w-full h-full 
          group-hover:opacity-100 opacity-0 transition-all duration-100 ease-in-out
          bg-[url('/images/shared/nnnoise.svg')] 
          "
            ></div>
          </div>

          {/* Link to personal page */}
          {/* <div
            className="rounded-full size-16 bg-white absolute z-[99] top-[140px] left-[150px]
          group-hover:size-[72px] transition-all duration-300 ease-in-out
          flex items-center justify-center hover:shadow-lg
          "
          >
            <Link
              href={person.personalPageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                width={40}
                height={40}
                className="-ml-1 group-hover:ml-1 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div> */}
        </div>

        {/* Profile info */}
        <div
          className="absolute bottom-2 sm:left-2 flex flex-col items-start justify-end z-[99] 
        group-hover:scale-105 group-hover:bottom-4 group-hover:left-4 transition-all duration-300 ease-in-out
        
        "
        >
          {/* Name */}
          <h3
            className="text-lg font-semibold text-gray-900 mb-2 leading-none 
          group-hover:text-white transition-all duration-300 ease-in-out
          "
          >
            {person.name}
          </h3>
          {/* Position */}
          <div
            className="text-sm text-gray-600 mb-1 leading-none 
          group-hover:text-gray-100 transition-all duration-300 ease-in-out"
          >
            {person.position}
          </div>
        </div>
      </div>
    </div>
  );
}
