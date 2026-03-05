# AGENTS.md - Agentic Coding Guidelines for al-folio

This is a Jekyll-based academic website theme. Most code is Liquid templates, Markdown content, YAML configuration, and SCSS styles.

---

## 1. Build / Lint / Test Commands

### Local Development

```bash
# Install dependencies
bundle install

# Serve site locally (watch for changes)
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

### Using Docker (Recommended)

```bash
# Pull and run pre-built image
docker compose up

# Build custom image and run
docker compose up --build

# Run slim version (<100MB)
docker compose -f docker-compose-slim.yml up
```

### Linting / Formatting

```bash
# Format Liquid, Markdown, YAML, HTML (Prettier)
npx prettier . --write

# Check formatting without writing
npx prettier . --check

# Pre-commit hooks (trailing whitespace, YAML validation)
pre-commit run --all-files
```

### CI/CD Workflows

The project uses GitHub Actions. Key workflows:

- `prettier.yml` - Code formatting checks
- `deploy.yml` - Site deployment to GitHub Pages
- `broken-links.yml` - Link validation
- `lighthouse-badger.yml` - Performance testing

---

## 2. Code Style Guidelines

### General Principles

- **Keep changes minimal** - Only modify what's necessary
- **Test locally before committing** - Run `bundle exec jekyll serve` to verify
- **Use semantic commits** - Clear, concise commit messages

### Markdown (Posts, Pages)

- Use standard Jekyll frontmatter:

```yaml
---
layout: post
title: "Your Title"
date: 2025-01-22 10:00:00
inline: false
related_posts: false
tags: [Tag1, Tag2]
categories: [Category]
---
```

- Use ATX-style headers (`#`, `##`, `###`)
- Use fenced code blocks with language identifiers
- Use Prettier's 150-character line width
- Use trailing commas in YAML lists (es5 style)

### YAML Configuration (\_config.yml)

- Use 2-space indentation
- Quote strings with special characters
- Use lowercase with underscores for keys
- Example:

```yaml
blog_name: My Blog
blog_description: A personal blog
permalink: /blog/:year/:title/
```

### Liquid Templates (\_includes, \_layouts)

- Use whitespace control (`{% raw %}{%-{% endraw %}`, `{% raw %}-%}{% endraw %}`) to prevent extra newlines
- Use descriptive variable names
- Keep templates simple and modular
- Use filters for data transformation
- Example:
  {% raw %}

```liquid
{%- if site.blog_name -%}
  <h1>{{ site.blog_name }}</h1>
{%- endif -%}
```

{% endraw %}

### SCSS Styles (\_sass)

- Follow existing naming conventions (BEM-like with dashes)
- Use variables from `_variables.scss`
- Keep specificity low
- Mobile-first responsive design

### Git Workflow

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes and test locally
3. Run prettier: `npx prettier . --write`
4. Commit with descriptive message
5. Push and create PR

---

## 3. Project Structure

```
├── _config.yml          # Main configuration
├── _data/               # YAML data files
├── _includes/           # Reusable Liquid components
├── _layouts/            # Page layouts
├── _news/               # Blog/news posts (Markdown)
├── _pages/              # Website pages
├── _posts/              # Blog posts (alternative location)
├── _projects/           # Project collections
├── _sass/               # SCSS stylesheets
├── assets/              # CSS, JS, images, fonts
├── bin/                 # Utility scripts
└── docker-compose.yml   # Docker configuration
```

---

## 4. Frontmatter Standards

### News/Blog Posts

```yaml
---
layout: post
title: "Descriptive Title"
date: 2025-01-22 10:00:00
inline: false # true for short inline posts
related_posts: false
tags: [tag1, tag2]
categories: [category1]
---
```

### Pages

```yaml
---
layout: default
permalink: /custom-path/
title: Page Title
nav: true
nav_order: 1
---
```

---

## 5. Adding New Content

### News Post

Create file in `_news/` with format `YYYY-MM-DD-title.md`

### Blog Post

Create file in `_posts/` with format `YYYY-MM-DD-title.md`

### Page

Create file in `_pages/` as `pagename.md`

### Project

Add to `_projects/` directory with appropriate YAML frontmatter

---

## 6. Testing Checklist

Before submitting changes:

- [ ] Site builds without errors: `bundle exec jekyll build`
- [ ] Prettier passes: `npx prettier . --check`
- [ ] No broken links (run locally and check)
- [ ] Site renders correctly in browser at localhost:4000

---

## 7. Common Issues

- **Build failures**: Run `bundle exec jekyll clean` then rebuild
- **Plugin errors**: Check Gemfile matches \_config.yml plugins
- **Docker issues**: Rebuild with `docker compose up --build --force-recreate`
- **Prettier errors**: Run `npx prettier . --write` to auto-fix
