import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Address } from "@/components/Address";

import { benefitOne, benefitTwo, personajesInfo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Nuestras Botanas"
        title="Desde papas fritas hasta palomitas de maíz, cada una de nuestras botanas está elaborada con ingredientes de la más alta calidad. Explora nuestras líneas de productos y encuentra tu sabor favorito."
      >
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={personajesInfo} />

      <SectionTitle
        preTitle="(Papas fritas, chicharrones, churros, totopos, nachos y mas)"
        title="37 𝑨𝑵𝑰𝑽𝑬𝑹𝑺𝑨𝑹𝑰𝑶"
      >
        En Botanas Rancho Coyotes estamos muy felices de cumplir 37 años junto a ti, compartiendo buenos momentos en todas tus reuniones  😁 gracias por ser parte de este esta gran familia botanera y elegirnos siempre
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonios"
        title="Esto es lo que dicen nuestros clientes"
      >
        ¿Qué sabor crees que tenemos para ti?🤭
        Déjanos tu respuesta en los comentarios
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Preguntas frecuentes, aquí se muestran las preguntas más comunes que hacen nuestros clientes.
      </SectionTitle>

      <Faq />
      <Cta />
      <SectionTitle preTitle="Dirección" title="Visítanos en nuestra ubicación:"> 
        Nos encontramos en Arandas, Rancho los Coyotes Sn, Lagunillas, 47180 Arandas, Jal.
      </SectionTitle>

      <Address/>
    </Container>
  );
}
