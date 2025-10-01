import { type SchemaTypeDefinition } from 'sanity'
import partner from './partner'
import client from './client'
import successMetric from './successMetric'
import project from './project'
import recognition from './recognition'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [partner, client, successMetric, project, recognition],
}
