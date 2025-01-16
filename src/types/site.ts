export type IconProps = React.HTMLAttributes<SVGElement>;

export interface NavItem {
  href: string;
  icon: React.ComponentType<IconProps>;
  label: string;
}

export interface SocialItem {
  label: string;
  url: string;
  icon: React.ComponentType<IconProps>;
}

export interface Navigation {
  navbar: NavItem[];
  social: SocialItem[];
}

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    baseURL: string;
    ogImage: string;
  };
  navigation: NavItem[];
  projects: Project[];
}
