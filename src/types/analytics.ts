export type VisitorsRange = '7d' | '30d'

export type VisitorsRequest = {
  slug: string
  range: VisitorsRange
  date?: string
}

export type VisitorsDailyPoint = {
  date: string
  visitors: number
  pageviews: number
}

export type VisitorsHourlyPoint = {
  hour: number
  visitors: number
  pageviews: number
}

export type VisitorsSource = {
  kind: 'external' | 'internal' | 'other' | 'unknown'
  domain: string | null
  pageviews: number
  share_pct: number
}

export type VisitorsDevice = {
  type: 'mobile' | 'desktop' | 'tablet' | 'unknown'
  pageviews: number
  share_pct: number
}

export type VisitorsPeriodHighlights = {
  best_day: string | null
  average_daily_pageviews: number
}

type VisitorsResponseBase = {
  range: VisitorsRange
  timezone: 'America/Sao_Paulo'
  period_start: string
  period_end: string
  updated_at: string
  unique_visitors: number
  pageviews: number
  change_pct: number | null
  views_per_visitor: number
  previous_unique_visitors: number
  daily: VisitorsDailyPoint[]
  period_highlights: VisitorsPeriodHighlights
  sources: VisitorsSource[]
  devices: VisitorsDevice[]
}

export type VisitorsResponse = VisitorsResponseBase &
  (
    | {
        selected_date: null
        hourly: null
        peak_hour: null
      }
    | {
        selected_date: string
        hourly: VisitorsHourlyPoint[]
        peak_hour: number | null
      }
  )

export type VisitorsErrorResponse = { error: string }
