import { defineType, defineField } from 'sanity';

const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Individual names should be 10 characters or less for best look.'
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Whats you position at work.'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Pick a good one ;)'
    }),
  ],
});

export default profile;