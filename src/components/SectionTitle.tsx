import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  prePreTitle?: string;
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
      {props.preTitle && (
        <div className="text-4xl font-Amithen tracking-wider text-black dark:text-yellow-400  uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className=" mt-3 font-bold leading-snug tracking-tight text-gray-400 lg:leading-tight text-base dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}

      {props.prePreTitle && (
        <div className="text-xl font-Pockota_Boldltalic font-bold tracking-wider text-heroMont uppercase">
          {props.prePreTitle}
        </div>
      )}
    </Container>
  );
}

