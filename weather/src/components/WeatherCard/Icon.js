import React from "react";
import styled from "@emotion/styled";

const Icon = props => {
  const Icon = styled.img`
    .icon {
      width: 40%;
    }
  `;

  return <Icon src="./img/cloudy.png" alt="cloudy" />;
};

export default Icon;
