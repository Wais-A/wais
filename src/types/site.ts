export type Navigation = {
  name: string;
  path: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type SiteConfig = {
  meta: {
    title: string;
    description: string;
    baseURL: string;
    ogImage: string;
  };
  navigation: Navigation[];
  projects: Project[];
};
