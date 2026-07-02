export const OngCategory = {
  animais: 'animais',
  meioAmbiente: 'meioAmbiente',
  educacao: 'educacao',
  saude: 'saude',
  direitosHumanos: 'direitosHumanos',
  combateAFome: 'combateAFome',
  criancasEAdolescentes: 'criancasEAdolescentes',
  idosos: 'idosos',
  pessoasComDeficiencia: 'pessoasComDeficiencia',
  moradoresDeRua: 'moradoresDeRua',
  igualdadeDeGenero: 'igualdadeDeGenero',
  refugiadosEImigrantes: 'refugiadosEImigrantes',
  protecaoAnimal: 'protecaoAnimal',
  desenvolvimentoComunitario: 'desenvolvimentoComunitario',
  culturaEArte: 'culturaEArte',
  esporteEInclusao: 'esporteEInclusao',
  voluntariadoEDoacoes: 'voluntariadoEDoacoes',
  tecnologiaSocial: 'tecnologiaSocial',
  direitosDasMulheres: 'direitosDasMulheres',
  outros: 'outros'
} as const

export type OngCategory = (typeof OngCategory)[keyof typeof OngCategory]

export const isOngCategory = (value: unknown): value is OngCategory =>
  typeof value === 'string' &&
  Object.values(OngCategory).includes(value as OngCategory)

export const HUBSPOT_ONG_VALUES = [
  'Animais', 'Meio Ambiente', 'Educação', 'Saúde', 'Direitos Humanos',
  'Combate à Fome', 'Crianças e Adolescentes', 'Idosos',
  'Pessoas com Deficiência', 'Moradores de Rua', 'Igualdade de Gênero',
  'Refugiados e Imigrantes', 'Proteção Animal',
  'Desenvolvimento Comunitário', 'Cultura e Arte', 'Esporte e Inclusão',
  'Voluntariado e Doações', 'Tecnologia Social', 'Direitos das Mulheres',
  'Outros'
] as const

export type HubspotOngValue = (typeof HUBSPOT_ONG_VALUES)[number]

export const isHubspotOngValue = (value: unknown): value is HubspotOngValue =>
  typeof value === 'string' &&
  (HUBSPOT_ONG_VALUES as readonly string[]).includes(value)

export const ONG_CATEGORY_TO_HUBSPOT = {
  animais: 'Animais',
  meioAmbiente: 'Meio Ambiente',
  educacao: 'Educação',
  saude: 'Saúde',
  direitosHumanos: 'Direitos Humanos',
  combateAFome: 'Combate à Fome',
  criancasEAdolescentes: 'Crianças e Adolescentes',
  idosos: 'Idosos',
  pessoasComDeficiencia: 'Pessoas com Deficiência',
  moradoresDeRua: 'Moradores de Rua',
  igualdadeDeGenero: 'Igualdade de Gênero',
  refugiadosEImigrantes: 'Refugiados e Imigrantes',
  protecaoAnimal: 'Proteção Animal',
  desenvolvimentoComunitario: 'Desenvolvimento Comunitário',
  culturaEArte: 'Cultura e Arte',
  esporteEInclusao: 'Esporte e Inclusão',
  voluntariadoEDoacoes: 'Voluntariado e Doações',
  tecnologiaSocial: 'Tecnologia Social',
  direitosDasMulheres: 'Direitos das Mulheres',
  outros: 'Outros'
} as const satisfies Record<OngCategory, HubspotOngValue>;

const HUBSPOT_TO_ONG_CATEGORY = Object.fromEntries(
  Object.entries(ONG_CATEGORY_TO_HUBSPOT).map(([k, v]) => [v, k])
) as Record<HubspotOngValue, OngCategory>

export const toOngCategory = (value: string): OngCategory | undefined => {
  if (isOngCategory(value)) return value
  if (isHubspotOngValue(value)) return HUBSPOT_TO_ONG_CATEGORY[value]
  return undefined
}

export const toHubspotOngValue = (value: OngCategory): HubspotOngValue =>
  ONG_CATEGORY_TO_HUBSPOT[value]