module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.{html,js}',
  ],
  css: [
    './dist/_astro/*.css', // Built CSS files from SCSS compilation
  ],
  safelist: [
    // Bootstrap dynamic classes
    /^btn-/,
    /^text-/,
    /^bg-/,
    /^border-/,
    /^alert-/,
    /^card-/,
    /^nav-/,
    /^navbar-/,
    /^dropdown-/,
    /^form-/,
    /^input-/,
    /^modal-/,
    /^tooltip-/,
    /^popover-/,
    /^carousel-/,
    /^accordion-/,
    /^offcanvas-/,
    /^toast-/,
    /^spinner-/,
    /^progress-/,
    /^badge-/,
    /^pagination-/,
    /^breadcrumb-/,
    /^list-group-/,
    /^table-/,

    // Bootstrap icons
    /^bi-/,

    // Custom classes that might be added dynamically
    'particles-fallback',
    'toggle-btn',
    'active',
    'show',
    'hide',
    'fade',
    'collapse',
    'collapsing',

    // Hover states
    /^hover-/,

    // Animation classes
    /^animate-/,
    /^animation-/,
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  fontFace: true,
  keyframes: true,
  variables: true,
};
