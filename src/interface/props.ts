export interface PropsType {
  image: string | any;
  h1: string;
  p: string;
  h2?: string;
  id?: string;
}

export interface NavbarMobileType {
  data: string[];
  color: string;
  fontColor: string;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavbarType {
  data: string[];
  color: string;
  fontColor: string;
}
