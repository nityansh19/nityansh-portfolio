# Portfolio Architecture

## Goal

Keep the portfolio easy to understand at first glance while allowing deeper project and background information to live on dedicated pages.

The homepage should answer three questions quickly:

1. Who is Nityansh?
2. What does he build?
3. Where should a recruiter or collaborator go next?

## Information architecture

```text
/
├── /about
├── /projects
│   ├── /projects/careerupai
│   └── /projects/personal-ai
├── /terminal
└── /contact
```

## Responsibility by layer

### `app/`

Owns routes, layouts, metadata, and page-level composition.

### `components/`

Contains reusable visual sections and interactive UI. Components should stay focused and avoid carrying unrelated page data.

### `lib/`

Contains shared helpers, content utilities, and logic that does not belong directly inside a page or UI component.

### `public/`

Contains static assets that can be served directly.

## Content flow

The preferred visitor journey is:

```text
Hero / identity
    ↓
Selected work
    ↓
Capabilities and context
    ↓
Detailed project pages
    ↓
CV / terminal / contact
```

Important information should never be available only through an animation or hover state.

## Design principles

- Keep the homepage selective rather than exhaustive.
- Use dedicated pages for deeper project context.
- Prioritize recruiter-relevant information over decorative copy.
- Keep motion supportive, not required for navigation.
- Preserve strong mobile usability.
- Reuse visual patterns instead of creating a different interaction model for every section.

## Change rule

When adding a new section, decide first whether it belongs on the homepage or should live on a dedicated route. If it does not improve the first-minute understanding of the portfolio, it probably belongs deeper in the site.
