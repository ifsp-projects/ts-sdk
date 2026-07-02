export const CampaignGoalType = {
  money: "money",
  items: "items",
  volunteers: "volunteers",
  signatures: "signatures",
  other: "other",
} as const;

export type CampaignGoalType =
  (typeof CampaignGoalType)[keyof typeof CampaignGoalType];

export const isCampaignGoalType = (value: unknown): value is CampaignGoalType =>
  typeof value === "string" &&
  Object.values(CampaignGoalType).includes(value as CampaignGoalType);

export const CAMPAIGN_GOAL_TYPE_LABELS = [
  "Financeiro",
  "Itens",
  "Voluntários",
  "Abaixo-assinado",
  "Outro",
] as const;

export type CampaignGoalTypeLabel = (typeof CAMPAIGN_GOAL_TYPE_LABELS)[number];

export const isCampaignGoalTypeLabel = (
  value: unknown,
): value is CampaignGoalTypeLabel =>
  typeof value === "string" &&
  (CAMPAIGN_GOAL_TYPE_LABELS as readonly string[]).includes(value);

export const CAMPAIGN_GOAL_TYPE_TO_LABEL = {
  money: "Financeiro",
  items: "Itens",
  volunteers: "Voluntários",
  signatures: "Abaixo-assinado",
  other: "Outro",
} as const satisfies Record<CampaignGoalType, CampaignGoalTypeLabel>;

const LABEL_TO_CAMPAIGN_GOAL_TYPE = Object.fromEntries(
  Object.entries(CAMPAIGN_GOAL_TYPE_TO_LABEL).map(([k, v]) => [v, k]),
) as Record<CampaignGoalTypeLabel, CampaignGoalType>;

export const toCampaignGoalType = (
  value: string,
): CampaignGoalType | undefined => {
  if (isCampaignGoalType(value)) return value;
  if (isCampaignGoalTypeLabel(value)) return LABEL_TO_CAMPAIGN_GOAL_TYPE[value];
  return undefined;
};

export const toCampaignGoalTypeLabel = (
  value: CampaignGoalType,
): CampaignGoalTypeLabel => CAMPAIGN_GOAL_TYPE_TO_LABEL[value];
