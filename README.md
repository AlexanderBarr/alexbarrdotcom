# alexbarr.com.au

## Tasks/Todo

### Navigation

- [x] Implement Navigation Bar
  - [ ] Add Navigation Links

### Hero Section

- [x] Create Hero Section
  - [x] Implement GitHub-like Animation Background
  - [x] Add Header Text
  - [x] Add Profile Avatar
  - [x] Make Hero Section Responsive
  - [ ] Improve lightmode visuals

### Project Showcase

- [ ] Interactive Project Tiles
  - [x] Implement Data-Driven Tiles from JSON
  - [x] Create Project Dialog Component
  - [x] Implement JSON Data Integration for Dialog Content
  - [x] Add Technology Stack Icons in Dialog
  - [ ] Fix Dialog Mobile Responsiveness
  - [ ] Add accordian to organise information
  - [ ] add dialog border animation
  - [ ] fix shadow effect on project tiles
  - [ ] remove dummy text from project information

### Mobile Optimisation

- [ ] Improve Mobile Layout
  - [ ] Optimise Padding for Mobile Devices
  - [ ] Enhance Dialog Responsiveness on Mobile

### Future Enhancements

- [x] Add Dark/Light Theme Toggle
- [ ] Implement Contact Form

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
