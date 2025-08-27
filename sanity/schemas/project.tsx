import { defineField, defineType } from "sanity";

const Project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What would you call the project?'
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'array',
      description: 'What role did you have on this project?',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: "Developer", value: "Developer" },
          { title: "Design", value: "Design" },
          { title: "Tester", value: "Tester" }
        ]
      }
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      description: 'What role did you have on this project?',
      options: {
        list: [
          { title: "Personal", value: "Personal" },
          { title: "Crayon", value: "Crayon" },
        ]
      }
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      description: 'Write short something descriptive about the project.'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Think of this as the thumbnail.'
    }),
    defineField({
      name: 'github',
      title: 'GitHub Link',
      type: 'string',
      description: 'Copy the url from the github repo.'
    }),
    defineField({
      name: 'site',
      title: 'Site Link',
      type: 'string',
      description: 'If the site is live, put the url here.'
    })
  ],
});

export default Project;