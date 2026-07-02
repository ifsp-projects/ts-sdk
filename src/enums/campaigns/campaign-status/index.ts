export const CampaignStatus = {
  draft: "draft",
  published: "published",
  active: "active",
  paused: "paused",
  finished: "finished",
  cancelled: "cancelled",
} as const;

export type CampaignStatus =
  (typeof CampaignStatus)[keyof typeof CampaignStatus];

export const isCampaignStatus = (value: unknown): value is CampaignStatus =>
  typeof value === "string" &&
  Object.values(CampaignStatus).includes(value as CampaignStatus);

export const CAMPAIGN_STATUS_LABELS = [
  "Rascunho",
  "Publicado",
  "Ativa",
  "Pausada",
  "Finalizada",
  "Cancelado",
] as const;

export type CampaignStatusLabel = (typeof CAMPAIGN_STATUS_LABELS)[number];

export const isCampaignStatusLabel = (
  value: unknown
): value is CampaignStatusLabel =>
  typeof value === "string" &&
  (CAMPAIGN_STATUS_LABELS as readonly string[]).includes(value);

export const CAMPAIGN_STATUS_TO_LABEL = {
  draft: "Rascunho",
  published: "Publicado",
  active: "Ativa",
  paused: "Pausada",
  finished: "Finalizada",
  cancelled: "Cancelado",
} as const satisfies Record<CampaignStatus, CampaignStatusLabel>;

const LABEL_TO_CAMPAIGN_STATUS = Object.fromEntries(
  Object.entries(CAMPAIGN_STATUS_TO_LABEL).map(([k, v]) => [v, k])
) as Record<CampaignStatusLabel, CampaignStatus>;

export const toCampaignStatus = (value: string): CampaignStatus | undefined => {
  if (isCampaignStatus(value)) return value;
  if (isCampaignStatusLabel(value)) return LABEL_TO_CAMPAIGN_STATUS[value];
  return undefined;
};

export const toCampaignStatusLabel = (
  value: CampaignStatus
): CampaignStatusLabel => CAMPAIGN_STATUS_TO_LABEL[value];
