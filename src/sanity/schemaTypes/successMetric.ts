import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'successMetric',
  title: 'Success Metric',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Metric Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'number',
      title: 'Metric Number/Value',
      type: 'string',
      description: 'e.g., "3+", "85%", "20+"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this metric should be displayed',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number'
    },
    prepare(selection) {
      const { title, number } = selection
      return {
        title: `${title} (${number})`,
        subtitle: 'Success Metric'
      }
    }
  }
})