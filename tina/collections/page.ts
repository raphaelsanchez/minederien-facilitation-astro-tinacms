import type { Collection } from 'tinacms'

export const PageCollection: Collection = {
    name: 'page',
    label: 'Pages',
    path: 'src/content/page',
    format: 'mdx',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`
        },
    },
    fields: [
        {
            name: 'seoTitle',
            type: 'string',
            required: true,
        },
        {
            name: 'body',
            type: 'rich-text',
            isBody: true,
            required: true,
            templates: [
                {
                    name: 'cta',
                    label: 'CTA',
                    fields: [
                        {
                            name: 'heading',
                            label: 'Heading',
                            type: 'string',
                            required: true,
                        },
                        {
                            name: 'description',
                            label: 'Description',
                            type: 'string',
                            required: true,
                            ui: {
                                component: 'textarea',
                            },
                        },
                        {
                            name: 'align',
                            label: 'Alignement',
                            type: 'string',
                            required: true,
                            options: ['content', 'wide'],
                            ui: {
                                component: 'select',
                            },
                        },
                    ],
                    ui: {
                        itemProps(item) {
                            console.log('Item dans itemProps:', item)
                            return {
                                label: `CTA ${item.heading}`,
                            }
                        },
                    },
                },
            ],
        },
    ],
}
