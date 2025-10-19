export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
};

export type Tech = {
  name: string;
  icon?: React.ComponentType<any>;
  color?: string;
};
