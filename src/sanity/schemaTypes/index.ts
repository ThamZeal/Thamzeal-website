import { type SchemaTypeDefinition } from 'sanity'
import partner from './partner'
import client from './client'
import successMetric from './successMetric'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [partner, client, successMetric, project],
}
