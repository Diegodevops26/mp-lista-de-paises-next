import PaisInfo from "./components/paisesinfo/page";

export type Country = {
  name: {
    common: string;
  };
  nativeName: {
    eng: {
      official: string;
    };
  };

  translations: {
    por: {
      common: string;
    };
  };

  flags: {
    svg: string;
    alt: string;
  };

  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages?: {
    [key: string]: string;
  };

  borders?: string[];
  cca3: string;
};

async function getDadosBandeiras(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const bandeira = await getDadosBandeiras();

  return (
  
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16 ">
        {bandeira.map((value,index) => (
          <PaisInfo
            key={index}
            name={value.name.common}
            ptName={value.translations.por.common}
            flag={value.flags.svg}
            flagAlt={value.flags.alt} 
          
          />
         
        ))}
      </section>
    
  );
}