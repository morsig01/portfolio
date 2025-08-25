import { defineType, defineField } from 'sanity';

const quote = defineType({
    name: 'quote',
    title: 'Quotes',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'string',
            description: 'This will be quoted like einstein said it.'
        }),
        defineField({
            name: 'origin',
            title: 'Origin',
            type: 'string',
            description: 'Where is this from?'
        })
    ],
});

export default quote;