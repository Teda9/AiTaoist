export type CompatibilityRelationship = "intimate" | "friendship" | "cooperation";

export type CompatibilityRelationshipOption = {
  id: CompatibilityRelationship;
  label: string;
};

export const DEFAULT_COMPATIBILITY_RELATIONSHIP: CompatibilityRelationship = "intimate";

export const COMPATIBILITY_RELATIONSHIP_OPTIONS: CompatibilityRelationshipOption[] = [
  { id: "intimate", label: "亲密" },
  { id: "friendship", label: "友情" },
  { id: "cooperation", label: "合作" },
];

const COMPATIBILITY_RELATIONSHIP_PROMPTS: Record<CompatibilityRelationship, string> = {
  intimate:
    "本次关系类型：亲密关系。请重点分析情感连接、亲密吸引、承诺稳定性、长期相处、伴侣议题与现实磨合。",
  friendship:
    "本次关系类型：友情。请重点分析朋友缘分、信任基础、价值观互补、日常支持、边界感与容易产生误会的相处点。",
  cooperation:
    "本次关系类型：合作。请重点分析协作默契、资源互补、决策节奏、权责边界、利益分配与长期合作风险。",
};

export const COMPATIBILITY_RESULT_TITLES: Record<
  CompatibilityRelationship,
  {
    emotionAnalysis: string;
    interactionPattern: string;
    futureDirection: string;
    suggestions: string;
    scoreLabel: string;
  }
> = {
  intimate: {
    emotionAnalysis: "情感深层分析",
    interactionPattern: "相处模式",
    futureDirection: "未来方向",
    suggestions: "改善建议",
    scoreLabel: "契合度",
  },
  friendship: {
    emotionAnalysis: "友情基础分析",
    interactionPattern: "相处模式",
    futureDirection: "关系走向",
    suggestions: "相处建议",
    scoreLabel: "契合度",
  },
  cooperation: {
    emotionAnalysis: "合作基础分析",
    interactionPattern: "协作模式",
    futureDirection: "合作走向",
    suggestions: "合作建议",
    scoreLabel: "适配度",
  },
};

export function getCompatibilityRelationshipLabel(
  relationship: CompatibilityRelationship = DEFAULT_COMPATIBILITY_RELATIONSHIP
): string {
  return (
    COMPATIBILITY_RELATIONSHIP_OPTIONS.find((option) => option.id === relationship)?.label ||
    COMPATIBILITY_RELATIONSHIP_OPTIONS[0].label
  );
}

export function buildCompatibilityRelationshipPrompt(
  relationship: CompatibilityRelationship = DEFAULT_COMPATIBILITY_RELATIONSHIP
): string {
  return COMPATIBILITY_RELATIONSHIP_PROMPTS[relationship] || COMPATIBILITY_RELATIONSHIP_PROMPTS.intimate;
}
