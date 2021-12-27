module.exports = {
  content: [
    "./app/**/*.{ts,tsx}"
  ],
  corePlugins: {
    fontFamily: false,
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          'primary': '#00963A',
          'primary-focus': '#00963A',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#F7F8F7',
          'base-300': '#E5F8E2',
          'base-content': '#133825',
          'info': '#2094f3',
          'success': '#00963A',
          'warning': '#ff9900',
          'error': '#ff5724',
        }
      }
    ]
  }
}
