import { defineType, defineField } from 'sanity';

const quote = defineType({
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
        defineField({
            name: 'technology',
            title: 'Technology',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
        })
    ],
});

export default quote;