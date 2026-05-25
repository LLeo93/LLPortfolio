export type GradientType = 'ai' | 'social' | 'enterprise' | 'creative';

const Gradients = {
  ai: 'var(--gradient-ultra-glass-blue)',
  social: 'var(--gradient-electric-night)',
  enterprise: 'var(--gradient-deep-space-glass)',
  creative: 'var(--gradient-holographic-blue)',
  //   'var(--gradient-holographic-blue)'
} as const;
export default Gradients;
