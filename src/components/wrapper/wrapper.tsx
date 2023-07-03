import React, { ReactNode } from "react";
import "./wrapper.css";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps): React.ReactElement => (
  <main className="main__wrapper">{children}</main>
);

export default Wrapper;
