import { Icons } from "@/components/custom-ui/icons";
import { person } from "@/config/person";
import type { Navigation } from "@/types";

export const navigation: Navigation = {
  navbar: [],
  social: [
    {
      label: "GitHub",
      url: person.github,
      icon: Icons.github,
    },
    {
      label: "X",
      url: person.x,
      icon: Icons.x,
    },
    {
      label: "LinkedIn",
      url: person.linkedin,
      icon: Icons.linkedin,
    },
  ],
};
