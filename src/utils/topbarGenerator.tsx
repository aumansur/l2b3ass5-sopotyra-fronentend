import { NavLink } from "react-router-dom";
import { ReactElement } from "react";
import { TUserPath } from "../types";

type TSidebarItem = {
  key: string;
  label: ReactElement; // Updated type to ReactElement
  children?: TSidebarItem[] | undefined;
};

// Public Sidebar Generator
export const publicSidebarGenerator = (items: TUserPath[], role?: string) => {
  const SideBarItems = items.reduce((acc: TSidebarItem[], item) => {
    let path;
    if (item.name === "Home") {
      path = "/";
    } else {
      path = role ? `/${role}/${item.path}` : item.path;
    }

    if (item.path && item.element && item.name !== "") {
      acc.push({
        key: item.path,
        label: (
          <NavLink to={role ? `/${role}/${item.path}` : item.path}>
            {item.name}
          </NavLink>
        ),
      });
    }

    if (item.children) {
      acc.push({
        key: item.name!,
        label: <>{item.name}</>, // Wrap label in a fragment to ensure it's a ReactElement
        children: item.children
          .map((child) => {
            if (child.name && child.path) {
              return {
                key: child.path!,
                label: (
                  <NavLink to={`/${role ? `${role}/` : ""}${child.path}`}>
                    {child.name}
                  </NavLink>
                ),
              };
            }
            return undefined; // Ensure that we return undefined for non-matching items
          })
          .filter((child): child is TSidebarItem => child !== undefined), // Filter out undefined values
      });
    }

    return acc;
  }, []);

  return SideBarItems;
};
