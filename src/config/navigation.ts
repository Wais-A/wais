import { Icons } from "@/components/icons";
import { person } from "@/config/person";

import type { Navigation } from "@/types";

export const navigation: Navigation = {
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "/blog", icon: Icons.blog, label: "Blog" },
    { href: "/contact", icon: Icons.email, label: "Contact" },
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
