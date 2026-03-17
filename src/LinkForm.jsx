import React from 'react';

export const LinkForm = ({ toggle }) => {
  return (
    <a
      onClick={() => toggle(true)} // ouvre le formulaire
      className="text-sky-600 cursor-pointer"
    >
      formulaire
    </a>
  );
};
