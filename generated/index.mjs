// NOTE During development imports from `.mjs` files to improve HMR speeds.
// During (production) builds it imports from `.json` files to improve build performance.
import { allPages } from './Page/_index.mjs'
import { allDocs } from './Doc/_index.mjs'
import { allGuides } from './Guide/_index.mjs'
import { allPosts } from './Post/_index.mjs'
import { allAuthors } from './Author/_index.mjs'

export { allPages, allDocs, allGuides, allPosts, allAuthors }

export const allDocuments = [...allPages, ...allDocs, ...allGuides, ...allPosts, ...allAuthors]


