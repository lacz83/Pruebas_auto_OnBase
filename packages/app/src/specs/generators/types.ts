import type { TestingType } from '@packages/types'
import type { Component } from 'vue'

export type GeneratorId = 'vueComponent' | 'reactComponent' | 'empty' | 'scaffold'

type CurrentProject = {
  readonly __typename?: 'CurrentProject' | undefined
  readonly id: string
  readonly codeGenGlobs?: {
    readonly component: string
  }
  readonly codeGenFramework?: string
}

export interface SpecGenerator {
  card: Component
  entry: Component
  matches: (testingType?: TestingType | null) => boolean
  show: (currentProject?: CurrentProject) => boolean
  id: GeneratorId
}
