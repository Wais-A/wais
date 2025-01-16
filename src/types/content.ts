export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
};

export type HomeContent = {
  title: string;
  subtitle: string;
  description: string;
  projects: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
  }[];
};

export type BlogContent = {
  title: string;
  description: string;
  postsPerPage: number;
};

export type ContactContent = {
  title: string;
  description: string;
  email: string;
  form: {
    endpoint: string;
    fields: FormField[];
  };
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type Content = {
  home: HomeContent;
  blog: BlogContent;
  contact: ContactContent;
  social: SocialLink[];
};
