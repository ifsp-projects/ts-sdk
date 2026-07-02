export const TEMPLATE_TYPES = ['primary', 'secondary', 'tertiary', 'quarternary'] as const

export type TemplateType = (typeof TEMPLATE_TYPES)[number]
