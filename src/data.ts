import type { Material, QuizRecord } from "./types";

export const starterMaterials: Material[] = [
  {
    id: "m1", title: "Introduction to Machine Learning", subject: "Artificial Intelligence",
    fileName: "machine-learning-notes.pdf", uploadedAt: "Today",
    summary: "Machine learning is a branch of AI that enables systems to learn patterns from data and make predictions without being explicitly programmed for every task. The main categories are supervised, unsupervised and reinforcement learning.",
    topics: ["Types of machine learning", "Training and testing data", "Overfitting and underfitting", "Model evaluation"],
    questions: 10
  },
  {
    id: "m2", title: "Database Management Systems", subject: "DBMS",
    fileName: "dbms-unit-2.pdf", uploadedAt: "Yesterday",
    summary: "A database management system stores, organizes and retrieves data. Relational databases organize information into tables and use SQL to query and update records.",
    topics: ["Relational model", "Primary and foreign keys", "Normalization", "SQL queries"],
    questions: 8
  },
  {
    id: "m3", title: "Computer Networks - Network Layer", subject: "Computer Networks",
    fileName: "network-layer.docx", uploadedAt: "2 days ago",
    summary: "The network layer is responsible for logical addressing, routing and forwarding packets between networks. IP is the core protocol used for packet delivery.",
    topics: ["IP addressing", "Routing", "Subnetting", "Congestion control"],
    questions: 12
  }
];

export const starterQuizzes: QuizRecord[] = [
  { id: "q1", title: "Machine Learning Basics", subject: "Artificial Intelligence", score: 8, total: 10, date: "Today" },
  { id: "q2", title: "DBMS Fundamentals", subject: "DBMS", score: 6, total: 10, date: "Yesterday" },
  { id: "q3", title: "Network Layer", subject: "Computer Networks", score: 9, total: 10, date: "Oct 28" }
];
