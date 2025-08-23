import profile from '../schemas/profile';
import project from '../schemas/project';
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project],
}
