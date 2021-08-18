import shortid from "shortid";

import { ReactComponent as ExitIcon } from "../icons/exit.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as TablesIcon } from "../icons/tables.svg";
import { ReactComponent as MarkerIcon } from "../icons/marker.svg";
import { ReactComponent as WidgetsIcon } from "../icons/widgets.svg";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";

const menuList = [
  {
    icon: <HomeIcon />,
    text: "Главная",
    path: "/",
    id: shortid.generate(),
  },
  {
    icon: <SearchIcon />,
    text: "Поиск адресов",
    path: "/address",
    id: shortid.generate(),
  },
  {
    icon: <TablesIcon />,
    text: "Таблицы",
    id: shortid.generate(),
  },
  {
    icon: <CalendarIcon />,
    text: "Календарь",
    id: shortid.generate(),
  },
  {
    icon: <MarkerIcon />,
    text: "Карты",
    id: shortid.generate(),
  },
  {
    icon: <WidgetsIcon />,
    text: "Виджеты",
    id: shortid.generate(),
  },
  {
    type: "settings",
    id: shortid.generate(),
  },
  {
    icon: <ExitIcon />,
    text: "Выход",
    id: shortid.generate(),
  },
];

export default menuList;
