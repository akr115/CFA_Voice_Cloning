export type PlayhtVoice = {
  name: string;
  sample: string;
  value: string;
  voiceId: string;
  age: "old" | "adult" | "youth";
  accent: "canadian" | "american" | "british";
  gender: "male" | "female";
  loudness: "low" | "neutral" | "high" | "whisper";
  style: "narrative" | "videos" | "training" | "advertising";
  tempo: "slow" | "neutral" | "fast";
  texture: "round" | "thick" | "gravelly" | "smooth";
  hq: boolean;
  isExperimental: boolean;
  isNew: boolean;
  isPopular: boolean;
  language: string;
  languageCode: string;
};
