import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'BusyBee',

  projectId: 'nmvafbin',
  dataset: 'production',
  apiVersion: "2024-03-04",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
