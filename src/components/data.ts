import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/SLIDER_Empresa.webp";
import benefitTwoImg from "../../public/img/Courier_.png";
import personajesImgInfo from "../../public/img/personajes.webp"
import { dataProps } from "./Benefits";

const benefitOne: dataProps = {
  prePreTitle: "",
  preTitle: "Más de",
  title: "30 Años de Tradición",
  desc: "En Botanas Rancho Los Coyotes, nos dedicamos a crear botanas que deleitan a toda la familia. Con raíces en Jalisco, hemos crecido gracias a la pasión por la calidad y el sabor auténtico que nos caracteriza.",
  image: benefitOneImg,
  bullets: [
  ],
};

const benefitTwo: dataProps = {
  prePreTitle: "",
  preTitle:"",
  title: "Auténtico Sabor Natural",
  desc: "En Botanas Rancho Los Coyotes, nos enorgullece elaborar nuestras botanas con ingredientes 100% naturales, seleccionados cuidadosamente para garantizar frescura y calidad en cada bocado. Nuestros productos son hechos mediante procesos caseros que  preservan el sabor auténtico de nuestras raíces mexicanas, ofreciendo  a nuestros consumidores una experiencia de sabor genuina y  saludable, como hecha en casa",
  image: benefitTwoImg,
  bullets: [
  ],
};

const personajesInfo: dataProps = {
  prePreTitle: "",
  preTitle: "",
  title: "Solicita más información",
  desc: "¿Tienes alguna pregunta o comentario? Rellena el formulario y nos pondremos en contacto contigo lo antes posible.",
  image: personajesImgInfo,
  bullets: [
  ],
};


export { benefitOne, benefitTwo, personajesInfo };
