import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/Papas_bolsa.webp";
import heroPapas from "../../public/img/potato (1).webp"

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-4xl mb-8">
            <div className="text-start">
              <h1 className="px-4 sm:px-16 lg:px-32 text-2xl sm:text-3xl md:text-4xl xl:text-center font-Pockota_bold leading-snug tracking-tight text-gray-800 dark:text-white">
                Somos La
              </h1>
              <p className="px-4 sm:px-8 lg:px-8 py-1 text-5xl sm:text-7xl md:text-9xl lg:text-10xl xl:text-11xl xl:text-center leading-normal text-red-600 font-myfonts dark:text-red-600">
                Botana
              </p>
              <h1 className="px-4 sm:px-16 lg:px-24 text-2xl sm:text-3xl md:text-4xl xl:text-center font-Pockota_bold leading-snug tracking-tight text-gray-800 dark:text-white">
                Más Mexicana
              </h1>
            </div>

            <h1 className="px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-4 font-Montserrat leading-snug tracking-tight text-heroMont dark:text-white">
              Desde 1987, llevando el auténtico sabor de México a cada rincón.
            </h1>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-4 py-1 text-sm font-medium text-center text-white bg-red-600 rounded-full"
              >
                Descubre Nuestros Productos
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={heroImg}
              width="800"
              height="685"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
            <div className="flex items-center w-full h-16">
              <div className="pr-44 pb-20">
                <Image
                  src={heroPapas}
                  width="150"
                  height="150"
                  className="object-cover"
                  alt="Hero papas"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
