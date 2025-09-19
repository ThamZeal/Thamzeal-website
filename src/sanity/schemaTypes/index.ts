import { type SchemaTypeDefinition } from 'sanity'
import partner from './partner'
import client from './client'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [partner, client],
}
