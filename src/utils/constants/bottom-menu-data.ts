export interface MenuItemsInterface {
  id: number;
  icon: string;
  activeColor: string;
  inactiveColor: string;
  isActive: boolean;
  isFloating?: boolean;
}

export const MENU_ITEMS: MenuItemsInterface[] = [
  {
    id: 1,
    icon: "bitcoin-icons:home-outline",
    activeColor: "#F82C17",
    inactiveColor: "text-primary",
    isActive: true,
  },
  {
    id: 2,
    icon: "lets-icons:search-alt-light",
    activeColor: "#F82C17",
    inactiveColor: "text-primary",
    isActive: false,
  },
  {
    id: 3,
    icon: "qlementine-icons:plus-12",
    activeColor: "#F82C17",
    inactiveColor: "text-primary",
    isActive: false,
    isFloating: true,
  },
  {
    id: 4,
    icon: "material-symbols-light:ecg-heart-outline-sharp",
    activeColor: "#F82C17",
    inactiveColor: "text-primary",
    isActive: false,
  },
  {
    id: 5,
    icon: "basil:user-outline",
    activeColor: "#F82C17",
    inactiveColor: "text-primary",
    isActive: false,
  },
];
