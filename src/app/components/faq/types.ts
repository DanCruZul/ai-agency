import type { ButtonProps } from '../ui/Button';

export type QuestionProps = {
  title: string;
  answer: string;
};

export type FaqProps = {
  heading: string;
  description: string;
  questions: QuestionProps[];
};

export type FaqComponentProps = React.ComponentPropsWithoutRef<"section"> & Partial<FaqProps>;