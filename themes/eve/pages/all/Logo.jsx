import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/eve.svg" alt="eve" width={60} height={60} />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
