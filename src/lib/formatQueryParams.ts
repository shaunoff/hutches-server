import queryString from 'query-string'
import { Maybe } from '@models'

type Params = {
  [key: string]: string | number | string[] | null | undefined | Maybe<string>[]
}

const formatQueryParams = (params: Params): string => {
  const queryParams = queryString.stringify(params, {
    arrayFormat: 'bracket',
  })

  if (queryParams) {
    return `?${queryParams}`
  } else {
    return ''
  }
}

export default formatQueryParams
