# alexbarr.com.au

## Tasks/Todo

- [x] Nav Bar
      -- [x] Add Links
- [ ] Hero
      -- [x] Create GitHub like animation background
      -- [x] Add Header Text
      -- [x] Add Profile Avatar
      -- [x] Make it responsive

- [ ] Body
      -- [ ] Create interactive tiles
      --- [] Tile should grab data from JSON
      --- [ ] When tile is clicked open dialog
      -- [x] Create body dialog
      --- [] Body dialog should grab data from JSON
      --- [] Body dialog should include tech used as icons

## Thoughts

- TypeError: a.default.detectStore(...) is undefinedh1-check.js:1:1301

- Establish git naming conventions (https://www.conventionalcommits.org/en/v1.0.0/)
- Use git add -p to review changes before commit

# ✅ Conventional Commits – Title → Meaning

- 'fix' → A bug fix. This correlates with a **PATCH** in Semantic Versioning.
- 'feat' → A new feature. This correlates with a **MINOR** in Semantic Versioning.
- 'BREAKING CHANGE' → Introduces a breaking API change.

  - Can appear in the commit footer: `BREAKING CHANGE: description`
  - Or as a `!` after the type/scope: `feat!: description`
  - Correlates with a **MAJOR** version in Semantic Versioning.

- 'build' → Changes that affect the build system or external dependencies (e.g., npm, webpack).
- 'chore' → Routine tasks or maintenance (e.g., bumping version, updating configs).
- 'ci' → Changes to CI configuration files and scripts (e.g., GitHub Actions, Travis).
- 'docs' → Documentation only changes.
- 'style' → Code style changes (formatting, missing semicolons, etc.) that don't affect meaning.
- 'refactor' → Code changes that neither fix a bug nor add a feature.
- 'perf' → Code changes that improve performance.
- 'test' → Adding or updating tests.

- 'Footers (other than BREAKING CHANGE)' → Optional metadata at the end of a commit, following [git trailer format](https://git-scm.com/docs/git-interpret-trailers), such as `Co-authored-by`, `Reviewed-by`, etc.

✨ Quick Reference
Functional Rendering static UI like headers, footers
Functional + Hooks State, effects, API calls
Class Component Maintaining old code
Presentational Stateless, reusable UI like Button, Card
Container Logic-heavy, data fetching, passing props down
HOC Auth protection, feature flags, cross-cutting logic
PureComponent Performance in legacy class-based UIs
