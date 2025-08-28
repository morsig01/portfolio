import profile from '../schemas/profile';
import project from '../schemas/project';
import quote from '../schemas/quote';
import technologies from '../schemas/technologies';

import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project, quote, technologies],
}
