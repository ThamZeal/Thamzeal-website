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
