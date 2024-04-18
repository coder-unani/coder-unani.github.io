import React, { useState, useEffect } from "react";

// components
import Main from "components/templates/main";

type typeMenus = {
  id: string;
  name: string;
  path: string;
  icon: string;
  children?: {
    id: string;
    name: string;
    path: string;
    icon: string;
  }[];
};

const app: React.FC = () => {
  const [menus, setMenus] = useState<typeMenus[]>([]);

  useEffect(() => {
    fetch("config/menus.json")
      .then((res) => res.json())
      .then((data) => {
        // setMenus(data);
      });
    return () => {
      console.log("cleanup");
    };
  }, []);

  return <Main />;
};

export default app;
