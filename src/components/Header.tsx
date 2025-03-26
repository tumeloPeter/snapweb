
import React from "react";

interface HeaderProps {
  name: string;
  date: string;
}

const Header: React.FC<HeaderProps> = ({ name, date }) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold mb-1">Ola, {name}</h1>
      <p className="text-sm opacity-80">{date}</p>
    </div>
  );
};

export default Header;
