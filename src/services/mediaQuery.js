import { useMediaQuery } from "react-responsive";

const logicMediaQuery = (children, device) => {
  return device ? children : null;
};

export const isDesktop = (cb) => cb({ minWidth: 1440 });
export const isMobile = (cb) => cb({ maxWidth: 1439 });
// export const isNotMobile = cb => cb({ minWidth: 1440 });

export const Desktop = ({ children }) => {
  return logicMediaQuery(children, isDesktop(useMediaQuery));
};

export const Mobile = ({ children }) => {
  return logicMediaQuery(children, isMobile(useMediaQuery));
};

// export const Default = ({ children }) => {
//   return logicMediaQuery(children, isNotMobile(useMediaQuery));
// };
