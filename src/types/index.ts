export interface Suggestion {
  id: number;
  title: string;
  description: string;
}

export interface BugData {
  name: string;
  probability: number;
}

export interface AnalysisData {
  optimizations: Suggestion[];
  bugProbability: BugData[];
}