import { client } from './client'
import { PARTNERS_QUERY, CLIENTS_QUERY, PARTNER_BY_ID_QUERY, CLIENT_BY_ID_QUERY, SUCCESS_METRICS_QUERY, PROJECTS_QUERY, RECOGNITIONS_QUERY, RECOGNITION_BY_ID_QUERY } from './queries'

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

export interface Recognition {
  _id: string
  name: string
  order: number
  description?: string
  logo: string
  logoAlt: string
}

export interface SuccessMetric {
  _id: string
  title: string
  number: string
  description: string
  order: number
  bgColor?: string
  borderColor?: string
}

export interface Project {
  _id: string
  codename: string
  teaser: string
  guessIt: string
  category: 'ongoing' | 'incubation' | 'future'
  order: number
  isActive: boolean
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

// Fetch all active success metrics
export async function getSuccessMetrics(): Promise<SuccessMetric[]> {
  try {
    const metrics = await client.fetch(SUCCESS_METRICS_QUERY)
    return metrics || []
  } catch (error) {
    console.error('Error fetching success metrics:', error)
    return []
  }
}

// Fetch all active projects
export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(PROJECTS_QUERY)
    return projects || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Fetch all active recognitions
export async function getRecognitions(): Promise<Recognition[]> {
  try {
    const recognitions = await client.fetch(RECOGNITIONS_QUERY)
    return recognitions || []
  } catch (error) {
    console.error('Error fetching recognitions:', error)
    return []
  }
}

// Fetch a single recognition by ID
export async function getRecognitionById(id: string): Promise<Recognition | null> {
  try {
    const recognition = await client.fetch(RECOGNITION_BY_ID_QUERY, { id })
    return recognition || null
  } catch (error) {
    console.error('Error fetching recognition:', error)
    return null
  }
}
