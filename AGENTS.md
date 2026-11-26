
# SkillHub Academy - Project Guidelines

## 1. Project Overview

SkillHub Academy is a multi-domain educational platform for three main fields:

- Network Technology and IT
- Law
- Management

The project is being developed incrementally in phases.

The current scope is Phase 1: Frontend UI and UX using static/mock data.

The goal is to build a professional, responsive, accessible, SEO-friendly educational website that can later be extended with a backend, authentication, database, admin panel, and payment integrations.

Do not implement future phases unless explicitly requested.

---

## 2. Development Principles

- Act as a senior frontend engineer with strong Next.js expertise.
- Prioritize maintainable, readable, production-oriented code.
- Avoid unnecessary abstractions, overengineering, and premature architecture.
- Implement only what is requested.
- Do not add extra features without approval.
- Prefer simple and practical solutions.
- Before modifying code, inspect the existing project structure and relevant files.
- Reuse existing components, styles, conventions, and dependencies whenever possible.
- Do not replace existing implementation patterns without a valid reason.
- Do not make unrelated changes.
- Explain important architectural decisions briefly.
- If a requirement is ambiguous and significantly affects architecture or scope, ask before making assumptions.

---

## 3. Project Scope and Phases

### Phase 1 - Frontend

Phase 1 includes:

- Domain selection page.
- Shared layout for three educational domains.
- Domain-specific homepage content and styling.
- Login and registration UI.
- User profile form UI.
- Homepage sections.
- Course listing and filtering.
- Course detail pages.
- Course calendar.
- Knowledge base and article pages.
- Educational services.
- Internal exams and certificates UI.
- Responsive design.
- Basic technical SEO.
- Performance optimization.
- Browser compatibility.
- Deployment to the production hosting environment.

Phase 1 uses static or mock data.

Forms must not pretend to perform real authentication, registration, payment, or data persistence.

### Phase 2 - Backend and Authentication

Future scope:

- Database design.
- Backend implementation.
- Real authentication.
- User registration and login.
- Database-driven courses and instructors.
- Basic security.
- Backup strategy.

Do not implement Phase 2 functionality during Phase 1 unless explicitly requested.

### Phase 3 - Admin Panel

Future scope:

- Course management.
- Instructor management.
- Article management.
- Domain-specific permissions.
- Content management for authorized personnel.

Do not implement admin functionality during Phase 1 unless explicitly requested.

### Out-of-scope features

These features require separate planning:

- Online payments.
- Student dashboard.
- Certificate issuance.
- Certificate verification.
- Production authentication.
- Real registration persistence.

Do not simulate these as functional systems.

---

## 4. Technology Stack

Use the existing project stack:

- Next.js with App Router.
- React.
- TypeScript.
- SCSS.
- SCSS Modules.
- Lucide React for icons.

Do not introduce additional frameworks, UI libraries, state-management libraries, or dependencies without a clear need and approval.

Tailwind CSS must not be introduced.

Use the existing Next.js version and project configuration.

Do not downgrade or upgrade major dependencies without explicit approval.

---

## 5. Next.js Rules

- Use the App Router.
- Prefer Server Components by default.
- Use Client Components only when browser-side interactivity is necessary.
- Avoid adding "use client" to entire pages unnecessarily.
- Keep interactive components as small and isolated as possible.
- Use Next.js navigation APIs.
- Use next/link for internal navigation.
- Use next/image for local or remote images when appropriate.
- Do not use plain anchor tags for internal page navigation unless there is a specific reason.
- Avoid unnecessary useEffect.
- Avoid unnecessary useState.
- Avoid fetching data in Client Components when the page can be implemented as a Server Component.
- Avoid unnecessary client-side data fetching for static mock data.
- Do not use dynamic rendering unnecessarily.
- Use the appropriate rendering strategy for the page.
- Avoid hydration mismatches.
- Do not use browser APIs during Server Component rendering.
- Use layouts to share common UI across pages.
- Use route groups when they provide a clear architectural benefit.
- Do not introduce route groups or abstractions without a real need.
- Use loading.tsx, error.tsx, and not-found.tsx when appropriate.
- Keep route files focused on their responsibility.

---

## 6. TypeScript Rules

- Use TypeScript consistently.
- Avoid any whenever possible.
- Prefer explicit types for component props, function arguments, and structured data.
- Use type inference when it improves readability.
- Define reusable types when the same structure is used in multiple places.
- Avoid unnecessary type assertions.
- Do not suppress TypeScript errors with @ts-ignore.
- Use @ts-expect-error only when justified and documented.
- Handle nullable and optional values safely.
- Avoid duplicating type definitions.

---

## 7. Component Design

- Build reusable components when they are genuinely reused.
- Do not create components for every small element.
- Keep components focused on one responsibility.
- Avoid overly large components.
- Extract shared components when duplication becomes meaningful.
- Keep component APIs simple.
- Prefer composition over complicated component abstractions.
- Avoid deeply nested component structures.
- Keep page-specific components close to their page when they are not shared.
- Move components into shared directories only when reuse is justified.

Suggested component locations:

- src/components: shared components.
- src/app: pages, layouts, route-specific components.
- src/data: mock data when it needs to be shared.
- src/types: shared TypeScript types when necessary.

Do not create these directories prematurely.

---

## 8. Styling Rules

- Use SCSS Modules for component and page-specific styles.
- Use globals.scss only for global styles, resets, typography, and shared CSS variables.
- Avoid global styling for page-specific elements.
- Avoid inline styles unless they are necessary for dynamic values.
- Avoid style duplication.
- Use CSS variables for shared colors, spacing, typography, and design tokens when appropriate.
- Keep styling consistent across the platform.
- Maintain RTL support.
- Use logical CSS properties when appropriate:
  - margin-inline
  - padding-inline
  - inset-inline
  - border-inline
- Avoid unnecessary absolute positioning.
- Avoid excessive specificity.
- Avoid !important unless justified.
- Do not use Tailwind.
- Do not introduce another styling system.

---

## 9. UI and Design Guidelines

SkillHub should have a modern, professional educational platform design.

Design priorities:

- Clean and minimal interface.
- Professional typography.
- Consistent spacing.
- Consistent border radii.
- Consistent colors.
- Clear visual hierarchy.
- Appropriate whitespace.
- Responsive layouts.
- Accessible contrast.
- Meaningful hover and focus states.
- Consistent buttons, inputs, cards, and navigation.
- Avoid unnecessary animations and decorative effects.
- Avoid generic template-like layouts whenever possible.
- Do not make every section look identical.
- Use visual hierarchy to guide users.

Use a consistent design system across all three domains.

Domain-specific branding may change colors, titles, descriptions, and content, but the overall layout should remain consistent.

The initial demo branding is temporary and must not be treated as final branding.

---

## 10. Responsive Design

All pages must support:

- Mobile.
- Tablet.
- Desktop.

Rules:

- Use responsive CSS rather than separate duplicated page implementations.
- Avoid fixed widths that cause horizontal overflow.
- Test navigation, forms, cards, grids, and typography at different viewport sizes.
- Pay attention to RTL layouts.
- Ensure touch targets are sufficiently large.
- Ensure mobile navigation remains usable.
- Do not hide important functionality on mobile without a valid reason.

---

## 11. Accessibility

- Use semantic HTML.
- Use appropriate heading hierarchy.
- Use buttons for actions.
- Use links for navigation.
- Avoid clickable divs when a button or link is appropriate.
- Provide accessible labels for form controls.
- Provide alt text for meaningful images.
- Decorative images should not unnecessarily expose redundant text to screen readers.
- Ensure keyboard navigation works.
- Provide visible focus states.
- Do not rely only on color to convey information.
- Use accessible contrast.
- Use aria attributes only when necessary and correctly.

---

## 12. RTL and Persian Language

The primary interface language is Persian.

Rules:

- Support RTL layouts correctly.
- Use Persian UI labels and descriptions.
- Avoid mixing RTL and LTR content incorrectly.
- Use dir="rtl" where appropriate.
- Use dir="ltr" for content such as technical identifiers, URLs, email addresses, code, and English-specific elements when needed.
- Use appropriate text alignment.
- Handle numbers, dates, and currency consistently.
- Technical terms may remain in English when appropriate.
- Do not use half-spaces in Persian UI text unless specifically requested.

---

## 13. SEO

SEO is a priority for the project.

Rules:

- Use Next.js Metadata API.
- Provide meaningful page titles and descriptions.
- Avoid duplicate metadata.
- Use semantic HTML.
- Use a proper heading hierarchy.
- Use descriptive URLs.
- Avoid unnecessary client-side rendering for content-heavy pages.
- Prefer Server Components for content that should be indexed.
- Use next/image where appropriate.
- Avoid unnecessary JavaScript.
- Keep pages lightweight.
- Ensure internal navigation is crawlable.
- Use appropriate canonical URLs when the production domain is known.
- Add Open Graph metadata where appropriate.
- Use robots.ts and sitemap.ts when appropriate.
- Add structured data only when the information is accurate and supported by the actual content.
- Do not invent reviews, ratings, instructor credentials, student counts, or course information for production SEO.
- Demo content must not be presented as verified real-world information.
- SEO must not be treated as a guarantee of ranking.

During demo development, search indexing may be disabled.

Before production deployment, review robots, metadata, sitemap, canonical URLs, and indexing configuration.

---

## 14. Performance

- Avoid unnecessary dependencies.
- Avoid unnecessary client-side JavaScript.
- Prefer Server Components.
- Optimize images.
- Avoid loading large assets unnecessarily.
- Avoid unnecessary re-renders.
- Use memoization only when it provides a real benefit.
- Avoid unnecessary effects.
- Keep bundle size reasonable.
- Avoid unnecessary animations.
- Do not optimize prematurely.
- Investigate actual performance issues before introducing complex optimization techniques.

---

## 15. Data and Mock Data

During Phase 1:

- Use mock data.
- Keep mock data realistic enough for UI demonstration.
- Avoid pretending mock data is real.
- Do not hardcode shared data in multiple locations when it is already reused.
- Extract shared mock data when multiple pages need it.
- Define appropriate types for shared data.
- Keep data separate from UI when doing so improves readability and maintainability.
- Avoid creating a complicated data layer for static demo data.
- Do not introduce a database during Phase 1.

---

## 16. Forms

During Phase 1, forms are UI-only unless explicitly requested otherwise.

Rules:

- Implement appropriate input fields.
- Use accessible labels.
- Use sensible input types.
- Provide basic client-side UI feedback when appropriate.
- Do not claim successful registration, authentication, or payment.
- Do not persist sensitive user information.
- Do not store national ID numbers or authentication codes.
- Avoid collecting real user data during demonstrations.
- Clearly communicate that demo forms are not functional when necessary.

---

## 17. Security

- Do not expose secrets.
- Do not hardcode API keys, credentials, or passwords.
- Do not add real authentication mechanisms during Phase 1.
- Do not collect or persist sensitive personal information.
- Avoid unsafe HTML rendering.
- Do not use dangerouslySetInnerHTML unless explicitly justified and properly sanitized.
- Avoid introducing security-sensitive functionality without discussing its implications.
- Do not implement payment integrations in Phase 1.

---

## 18. Dependencies and Package Management

- Use npm if the existing project uses npm.
- Do not switch package managers.
- Avoid installing packages for functionality that can be implemented simply with the existing stack.
- Before installing a dependency, determine whether it is actually necessary.
- Do not install multiple libraries that solve the same problem.
- Do not remove existing dependencies without justification.
- Do not update dependencies as part of unrelated tasks.

---

## 19. Git and Change Management

- Do not revert user changes.
- Do not overwrite files without inspecting their current contents.
- Avoid modifying unrelated files.
- Do not run destructive Git commands.
- Do not delete existing functionality without approval.
- Keep changes focused.
- Do not commit unless explicitly requested.
- Provide meaningful commit message suggestions when requested.

---

## 20. Validation

After implementing a feature:

- Run the relevant checks when possible.
- Run TypeScript checks.
- Run ESLint.
- Run the build when appropriate.
- Check for broken imports.
- Check for broken navigation.
- Check for responsive layout issues when possible.
- Verify that existing functionality remains intact.
- Report checks that were not run.
- Do not claim a check passed unless it actually ran successfully.

---

## 21. Working Workflow

For each task:

1. Inspect the relevant files.
2. Understand the existing implementation.
3. Identify the smallest reasonable solution.
4. Implement the requested functionality.
5. Avoid unrelated changes.
6. Verify the implementation.
7. Summarize what changed.
8. Mention any limitations or remaining tasks.

Do not implement an entire future phase when asked to work on a small feature.

If a task involves multiple pages or significant architecture, propose a plan before making large changes.

For small tasks, proceed directly without unnecessary planning.

---

## 22. Communication

- Explain changes concisely.
- Use Persian for explanations.
- Keep code, filenames, technical identifiers, and commit messages in English.
- Do not unnecessarily explain basic concepts unless asked.
- Do not claim functionality exists when it is only a UI mockup.
- Mention important trade-offs.
- Ask for clarification only when necessary.
- Do not overwhelm the user with unnecessary architecture.




## 23. Git Workflow and Branch Management

Follow a branch-based workflow for every development stage, feature, bug fix, or independent task.

### Branch Rules

- Keep `main` as the stable branch.
- Never implement features or make development changes directly on `main`.
- Before starting any new task, switch to `main` and ensure it is up to date with the latest available changes.
- Create a new branch from `main` for each independent task or development stage.
- Use descriptive branch names with the following conventions:
  - `feat/feature-name` for new features.
  - `fix/issue-name` for bug fixes.
  - `refactor/feature-name` for refactoring.
  - `docs/document-name` for documentation.
  - `style/component-name` for UI or styling changes that do not affect functionality.
- Use lowercase names and hyphens in branch names.
- Keep each branch focused on a single task or stage.
- Do not combine unrelated features in one branch.

### Development Workflow

For every task, follow these steps:

1. Switch to `main`.
2. Ensure `main` is up to date before starting.
3. Create a new branch from `main` using an appropriate branch name.
4. Implement only the requested task on that branch.
5. Run relevant validation checks, including ESLint, TypeScript checks, and build when appropriate.
6. Review the changes and ensure there are no unrelated modifications.
7. Commit the completed and verified changes with a meaningful commit message.
8. Switch back to `main`.
9. Merge the completed branch into `main`.
10. Verify the merge result.
11. Return to `main` and ensure it is ready for the next stage.

### Merge Rules

- Only merge branches containing completed and verified work.
- Do not merge if relevant validation checks fail.
- Prefer fast-forward merges when possible. If fast-forward is not possible, use a regular merge commit.
- Preserve the development history when merging.
- Resolve merge conflicts carefully without discarding existing changes.
- Never force-push, hard-reset, or perform destructive Git operations.
- Never delete a branch before confirming that its changes have been successfully merged.
- Do not automatically push branches or commits to a remote repository unless explicitly requested.

### Safety

- Before executing Git commands, inspect the current branch and working tree.
- Never discard, overwrite, or revert uncommitted user changes.
- If uncommitted changes exist on `main`, do not automatically move, stash, commit, or discard them. Inform the user and wait for instructions when necessary.
- Do not modify Git configuration without explicit approval.
- Do not execute destructive Git commands.
- If a Git operation could risk losing work, stop and ask for confirmation.

### Task Scope

- Create a new branch for every approved roadmap stage.
- If a stage contains several tightly related tasks, they may share the same branch.
- For independent features, use separate branches.
- Do not create branches during project assessment or roadmap planning.
- Do not merge into `main` until the user-requested stage is completed and verified.
- Do not begin the next stage until the previous stage has been successfully merged into `main`.
