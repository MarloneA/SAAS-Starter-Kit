export type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

export const content: FAQItem[] = [
  {
    question: "Is starter Kit a no code template?",
    answer:
      "Starter kit is more than a template, You need to have experience with Typescript, React and Tailwind to make the most use out of this kit. Knowledge of backend and deployment tools is also necessary",
    link: "https://www.coursera.org/articles/full-stack-developer",
  },
  {
    question: "How do I get access to the code?",
    answer:
      "The free version is readily available on github but the paid version will require a subscription after which you will recieve an invite to the private repository on github.",
  },
  {
    question: "Do you Provide Long term support for buyers?",
    answer:
      "Only for Plus and Enterprise customers.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Unfortunately not at this time due to the nature of software development once you have access to the repo, the service is considered delivered. it would be hard to give refunds since the customer will already have access to the code and we cannot control what the client dose with it",
  },
];