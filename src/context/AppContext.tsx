import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { starterMaterials, starterQuizzes } from "../data";
import type { Material, QuizRecord } from "../types";

type AppContextType = {
  materials: Material[];
  quizzes: QuizRecord[];
  addMaterial: (material: Material) => void;
  addQuiz: (quiz: QuizRecord) => void;
};
const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [materials, setMaterials] = useState<Material[]>(() => {
    try { return JSON.parse(localStorage.getItem("sm_materials") || "null") || starterMaterials; }
    catch { return starterMaterials; }
  });
  const [quizzes, setQuizzes] = useState<QuizRecord[]>(() => {
    try { return JSON.parse(localStorage.getItem("sm_quizzes") || "null") || starterQuizzes; }
    catch { return starterQuizzes; }
  });
  useEffect(() => localStorage.setItem("sm_materials", JSON.stringify(materials)), [materials]);
  useEffect(() => localStorage.setItem("sm_quizzes", JSON.stringify(quizzes)), [quizzes]);
  const value = useMemo(() => ({
    materials, quizzes,
    addMaterial: (material: Material) => setMaterials(current => [material, ...current]),
    addQuiz: (quiz: QuizRecord) => setQuizzes(current => [quiz, ...current])
  }), [materials, quizzes]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useStudyMate() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useStudyMate must be used inside AppProvider");
  return value;
}
