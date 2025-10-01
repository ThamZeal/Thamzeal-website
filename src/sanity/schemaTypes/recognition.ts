import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'recognition',
  title: 'Recognitions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Recognition Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Recognition Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of what this recognition represents',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Recognition',
      type: 'boolean',
      description: 'Toggle to show/hide this recognition on the website',
      initialValue: true
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this recognition should appear (lower numbers first)',
      initialValue: 0
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'description'
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      return {
        title,
        media,
        subtitle: subtitle?.substring(0, 60) + '...' || 'No description'
      }
    }
  },
  orderings: [
    {
      title: 'By Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'By Name',
      name: 'nameAsc', 
      by: [{ field: 'name', direction: 'asc' }]
    }
  ]
})
