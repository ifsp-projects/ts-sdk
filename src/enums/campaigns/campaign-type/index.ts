export const CampaignType = {
  donation: "donation",
  volunteering: "volunteering",
  event: "event",
  awareness: "awareness",
  project: "project",
  other: "other",
} as const;

export type CampaignType = (typeof CampaignType)[keyof typeof CampaignType];

export const isCampaignType = (value: unknown): value is CampaignType =>
  typeof value === "string" &&
  Object.values(CampaignType).includes(value as CampaignType);

export const CAMPAIGN_TYPE_LABELS = [
  "Doação",
  "Voluntariado",
  "Evento",
  "Conscientização",
  "Projeto",
  "Outro",
] as const;

export type CampaignTypeLabel = (typeof CAMPAIGN_TYPE_LABELS)[number];

export const isCampaignTypeLabel = (
  value: unknown
): value is CampaignTypeLabel =>
  typeof value === "string" &&
  (CAMPAIGN_TYPE_LABELS as readonly string[]).includes(value);

export const CAMPAIGN_TYPE_TO_LABEL = {
  donation: "Doação",
  volunteering: "Voluntariado",
  event: "Evento",
  awareness: "Conscientização",
  project: "Projeto",
  other: "Outro",
} as const satisfies Record<CampaignType, CampaignTypeLabel>;

const LABEL_TO_CAMPAIGN_TYPE = Object.fromEntries(
  Object.entries(CAMPAIGN_TYPE_TO_LABEL).map(([k, v]) => [v, k])
) as Record<CampaignTypeLabel, CampaignType>;

export const toCampaignType = (value: string): CampaignType | undefined => {
  if (isCampaignType(value)) return value;
  if (isCampaignTypeLabel(value)) return LABEL_TO_CAMPAIGN_TYPE[value];
  return undefined;
};

export const toCampaignTypeLabel = (value: CampaignType): CampaignTypeLabel =>
  CAMPAIGN_TYPE_TO_LABEL[value];
