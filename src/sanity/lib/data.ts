import { client } from './client'
import { PARTNERS_QUERY, CLIENTS_QUERY, PARTNER_BY_ID_QUERY, CLIENT_BY_ID_QUERY } from './queries'

// TypeScript interfaces for the data
export interface Partner {
  _id: string
  name: string
  order: number
  logo: string
  logoAlt: string
}

export interface Client {
  _id: string
  name: string
  order: number
  logo: string
  logoAlt: string
}

// Fetch all active partners
export async function getPartners(): Promise<Partner[]> {
  try {
    const partners = await client.fetch(PARTNERS_QUERY)
    return partners || []
  } catch (error) {
    console.error('Error fetching partners:', error)
    return []
  }
}

// Fetch all active clients
export async function getClients(): Promise<Client[]> {
  try {
    const clients = await client.fetch(CLIENTS_QUERY)
    return clients || []
  } catch (error) {
    console.error('Error fetching clients:', error)
    return []
  }
}

// Fetch a single partner by ID
export async function getPartnerById(id: string): Promise<Partner | null> {
  try {
    const partner = await client.fetch(PARTNER_BY_ID_QUERY, { id })
    return partner || null
  } catch (error) {
    console.error('Error fetching partner:', error)
    return null
  }
}

// Fetch a single client by ID
export async function getClientById(id: string): Promise<Client | null> {
  try {
    const client_data = await client.fetch(CLIENT_BY_ID_QUERY, { id })
    return client_data || null
  } catch (error) {
    console.error('Error fetching client:', error)
    return null
  }
}
