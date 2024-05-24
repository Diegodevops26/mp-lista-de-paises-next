import Link from "next/link";
import Image from "next/image";

export default function PaisInfo({

    name,
    ptName,
    flag,
    flagAlt,
    
}: {
 
  name: string;
  ptName: string;
  flag: string;
  flagAlt: string;
}) {
  const rez = 'fill'
  return (
    <Link href={`/pais/${name}`}>
      <article  key={name} className="h-64 min-w-full p-2 bg-slate-300 border-2 rounded-xl hover:border-red-600 transition-all hover:shadow-xl">
        <div
          className="relative w-full h-40 p-2 overflow-hidden rounded-xl"
        >
          <Image src={flag} alt={flagAlt}  fill className="object-cover" />
        </div>
       

        <p className="font-bold text-lx text-center m-1">{ptName}</p>
      </article>
    </Link>
  );
}
