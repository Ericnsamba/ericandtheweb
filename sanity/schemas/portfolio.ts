import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
          }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            title: 'Stack',
            name: 'stack',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField(
            {
                title: 'Category',
                name: 'category',
                type: 'string',
            }
        ),
        defineField(
            {
                title: 'Year',
                name: 'year',
                type: 'string',
            }
        ),
        defineField(
            {
                title: 'Web Link',
                name: 'web_link',
                type: 'string',
            }
        ),
        defineField(
            {
                title: 'App Link',
                name: 'app_link',
                type: 'string',
            }
        ),
        defineField(
            {
                title: 'Brief',
                name: 'brief',
                type: 'string',
            }
        ),
        defineField(
            {
                title: 'Challenge',
                name: 'challenge',
                type: 'string',
            }
        ),
        defineField(
            {
                title: 'Solution',
                name: 'solution',
                type: 'string',
            }
        ),
        defineField(
            {
                title: 'Images gallery',
                name: 'imagesGallery',
                type: 'array',
                of: [{ type: 'image' }]
               }
        ),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
