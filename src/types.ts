export type Material = {
  id: string;
  title: string;
  subject: string;
  fileName: string;
  uploadedAt: string;
  summary: string;
  topics: string[];
  questions: number;
};

export type QuizRecord = {
  id: string;
  title: string;
  subject: string;
  score: number;
  total: number;
  date: string;
};
