import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'codename',
      title: 'Codename',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
      description: 'A cryptic teaser description of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'guessIt',
      title: 'Guess It',
      type: 'text',
      description: 'An additional cryptic hint about the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Ongoing Projects', value: 'ongoing' },
          { title: 'Coming Soon / Incubation', value: 'incubation' },
          { title: 'Future Concepts', value: 'future' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the project should appear within its category',
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this project should be displayed on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'codename',
      subtitle: 'category',
      description: 'teaser',
    },
    prepare(selection) {
      const { title, subtitle, description } = selection;
      const categoryLabels = {
        ongoing: 'Ongoing Projects',
        incubation: 'Coming Soon / Incubation',
        future: 'Future Concepts',
      };
      
      return {
        title,
        subtitle: categoryLabels[subtitle as keyof typeof categoryLabels] || subtitle,
        description: description?.substring(0, 100) + '...',
      };
    },
  },
  orderings: [
    {
      title: 'By Category and Order',
      name: 'categoryAndOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'By Codename',
      name: 'codename',
      by: [{ field: 'codename', direction: 'asc' }],
    },
  ],
})
