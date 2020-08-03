import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type MyProps = {
  children: ReactNode;
};

export type MyOffSet = {
  landing: number | undefined;
  project: number | undefined;
  about: number | undefined;
  contact: number | undefined;
  resume: number | undefined;
};

export type MyStoreOffset = {
  offset: MyOffSet;
  setOffSet: Dispatch<SetStateAction<MyOffSet>>;
};

export const OffSetContext = createContext<MyStoreOffset | {}>({});

export const OffSetContextProvider = ({
  children,
}: MyProps): React.ReactElement => {
  const [offset, setOffSet] = useState({
    landing: 0,
    project: 0,
    about: 0,
    contact: 0,
    resume: 0,
  });

  const store = {
    offset,
    setOffSet,
  };

  return (
    <OffSetContext.Provider value={store}>{children}</OffSetContext.Provider>
  );
};
