// GROQ queries for fetching partners and clients data

export const PARTNERS_QUERY = `*[_type == "partner" && isActive != false] | order(order asc, name asc) {
  _id,
  name,
  order,
  "logo": logo.asset->url,
  "logoAlt": logo.alt
}`

export const CLIENTS_QUERY = `*[_type == "client" && isActive != false] | order(order asc, name asc) {
  _id,
  name,
  order,
  "logo": logo.asset->url,
  "logoAlt": logo.alt
}`

export const SUCCESS_METRICS_QUERY = `
  *[_type == "successMetric" && isActive == true] | order(_createdAt asc) {
    _id,
    title,
    number,
    description
  }
`

// Query for a single partner
export const PARTNER_BY_ID_QUERY = `*[_type == "partner" && _id == $id][0] {
  _id,
  name,
  order,
  isActive,
  "logo": logo.asset->url,
  "logoAlt": logo.alt
}`

// Query for a single client
export const CLIENT_BY_ID_QUERY = `*[_type == "client" && _id == $id][0] {
  _id,
  name,
  order,
  isActive,
  "logo": logo.asset->url,
  "logoAlt": logo.alt
}`

// Query for all active projects
export const PROJECTS_QUERY = `*[_type == "project" && isActive == true] | order(category asc, order asc) {
  _id,
  codename,
  teaser,
  guessIt,
  category,
  order,
  isActive
}`
