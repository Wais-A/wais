import { Icons } from "@/components/custom-ui/icons";
import { person } from "@/config/person";
import type { Navigation } from "@/types";

export const navigation: Navigation = {
  navbar: [
    { url: "/", icon: Icons.home, label: "Home" },
    { url: "/blog", icon: Icons.blog, label: "Blog" },
    { url: "/about", icon: Icons.about, label: "About" },
  ],
  social: [
    {
      label: "GitHub",
      url: person.github,
      icon: Icons.github,
    },
    {
      label: "BlueSky",
      url: person.bluesky,
      icon: Icons.blueSky,
    },
    {
      label: "LinkedIn",
      url: person.linkedin,
      icon: Icons.linkedin,
    },
  ],
};
