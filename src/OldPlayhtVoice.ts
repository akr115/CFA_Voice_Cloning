export type OldPlayhtVoice = {
  value: string;
  name: string;
  language: string;
  voiceType: "Standard" | "Neural";
  /**
   * e.g. en-US
   */
  languageCode: string;
  gender: "Male" | "Female";
  service: "polly" | "gc" | "watson" | "ms";
  sample: string;
  isKid?: boolean;
  isNew?: boolean;
  styles?: string[];
};
