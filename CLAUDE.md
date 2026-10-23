@AGENTS.md

# Claude Code specifics

- Follow the Hard rules in AGENTS.md: never commit or push unless explicitly asked; never change the production database.
- Follow the Documentation rules in AGENTS.md on every task — update `docs/ai/` before saying you're done.
- **Typecheck with `npm run lint`** (it is `tsc --noEmit`). This works inside the Bash sandbox.
- **`next build` does NOT work inside the Bash sandbox.** Turbopack's PostCSS loader spawns a worker that binds a port, which the sandbox refuses with `binding to a port / Operation not permitted (os error 1)`. Worse, the failed attempt poisons `.next`, so later attempts keep failing until you `rm -rf .next`. Run builds with `dangerouslyDisableSandbox: true`, or ask the user to set `sandbox.network.allowLocalBinding: true`.
- **`next dev` has the same port-binding restriction.** Start it with `dangerouslyDisableSandbox: true`.
- Piping a build through `| tail` masks its exit code — check the output text for `✓ Compiled successfully`, not just the exit status.
- **Verify layout changes in the browser**, not by reasoning about CSS. Use the in-app browser at http://localhost:3000, and check for overflow with `document.documentElement.scrollWidth` against `clientWidth` at 375px.
- The browser pane is only permitted on **port 3000**. If something else holds it, free that port rather than letting Next fall back to 3001.
