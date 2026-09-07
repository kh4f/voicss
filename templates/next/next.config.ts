import type { NextConfig } from 'next'
import { voicssTurboRule } from 'voicss/next'

export default {
	turbopack: { rules: { ...voicssTurboRule } },
} satisfies NextConfig