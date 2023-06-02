import React, { FC } from "react";
import { FiArrowRight } from "react-icons/fi";

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  link: string;
}

const Card: FC<CardProps> = ({ imageSrc, title, subtitle, link }) => {
  return (
    <a
      href={link !== "#" ? link : undefined}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 md:w-96 mx-auto">
        <div className="relative">
          <img
            src={imageSrc}
            alt={title}
            className="h-48 w-full object-cover"
          />
          {link !== "#" && (
            <div className="absolute bottom-0 right-0 p-2">
              <FiArrowRight size={24} color="white" />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
