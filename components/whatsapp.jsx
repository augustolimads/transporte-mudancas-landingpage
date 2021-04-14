import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const url = 'https://wa.me/5581973166700?text=Gostaria de uma orçamento sobre mudanças'

export default function Whatsapp() {
  return (
    <a 
        className="fixed bottom-0 right-0 m-8 bg-secondary text-white py-4 px-8 rounded-full flex items-center z-50"
        href={url}
        target='_blank'
    >
      <i className="mr-3 text-2xl">
        <FaWhatsapp />
      </i>
      <span>Pedir orçamento no WhatsApp</span>
    </a>
  );
}
