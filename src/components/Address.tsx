import { Container } from "@/components/Container";

export const Address = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 rounded-2xl py-4 dark:bg-trueGray-800">
            <div className="relative w-full h-[100px] sm:h-[400px] md:h-[470px] max-w-4xl mx-auto overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5276.984045245188!2d-102.45223624375225!3d20.734932240861646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84294c7876ad4ac1%3A0xb23899e841fd4e35!2sGrupo%20Botanero%20Alte%C3%B1o%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1731136998590!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};