"use client"
import Image from 'next/image';
import Link from 'next/link';


export default function Error() {
const logoerror = "/arrow-back.svg" 
const descalt = "Icone seta de volta"
    return (

        <>
        <section className='flex flex-col container'>
        <h1 className='text-5xl text-center font-bold  text-gray-800 my-16'>
            Ops, ocorreu um error ao exibir pais!
        </h1>
        <Link className='"flex items-center py-2 ' href={"/"}>
            <Image  src={logoerror}
            alt={descalt}
            width={24}
            height={24}
            />

           Voltar
        </Link>
        </section>
        
        </>
    )
}