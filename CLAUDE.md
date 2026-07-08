# CLAUDE.md

Guidance for AI assistants (and humans) working in this repository.

## What this repository is

This is **not a conventional software project**. It is a **Beckhoff TwinCAT 3 industrial automation demo project** — a "Musterkoffer" (demo suitcase) that pairs a real/simulated PLC with a touchscreen HMI. It has four sub-projects tied together by a single Visual Studio solution, `HMI_SampleCase_small.sln`:

| Sub-project | Directory | What it is |
|---|---|---|
| PLC program | `HMI_Musterkoffer_klein/` | IEC 61131-3 Structured Text program (TwinCAT System Manager project) |
| HMI web app | `Musterkoffer_klein_HMI/` | TwinCAT HMI (TypeScript/JS + declarative XML/JSON UI) served by TcHmiSrv |
| Scope project | `SampleCase_Scope/` | Data-logging / oscilloscope configuration |
| Drive Manager 2 | `SampleCase_DM2/` | Servo drive configuration, tied to a specific EtherCAT terminal |

There is **no npm/CLI build, no automated test suite, no linter, and no CI/CD** anywhere in this repo. Everything is built, deployed, and verified through the **TwinCAT XAE Shell (Visual Studio)** and real or simulated hardware. Do not assume `npm test`, `make`, `pytest`, or similar commands exist — they don't. Don't propose adding them unless the user asks; TwinCAT projects aren't built or tested that way.

## Repository structure

```
HMI_SampleCase_small.sln              VS solution linking all four sub-projects

HMI_Musterkoffer_klein/               PLC project
  HMI_SampleCase_small.tsproj           TwinCAT system project (I/O config, tasks, PLC1 link)
  PLC1/
    PLC1.plcproj
    POUs/                              Program Organization Units (MAIN, function blocks) — .TcPOU
    DUTs/                              Data Unit Types (I/O structs) — .TcDUT
    PlcTask.TcTTO                      Task configuration

Musterkoffer_klein_HMI/               HMI web app
  SampleCase_small_HMI.hmiproj          MSBuild project file
  Properties/                           tchmiconfig.json, tchmimanifest.json, publish config, JSON schemas
  Pages/                                .content files (declarative UI pages) — Desktop/ and Smartphone/ variants
  Desktop.view                          Top-level view
  UserControls/                         Reusable HMI controls, one per hardware module (.usercontrol + .usercontrol.json)
  Functions/                            Custom JS functions registered into the HMI
  Themes/                               Base and Base-Dark CSS/theme resources
  Localization/                         de/en .localization JSON string tables
  Server/                               Server-extension config: ADS, TcHmiScope, TcHmiLua, TcHmiUserManagement, TcHmiSqliteLogger
  backup_*.Server/                      Timestamped auto-backups of Server config (see Quirks below)
  bin/                                  BUILD OUTPUT — committed to git
  tsconfig.json, packages.config

Packages/                             Vendored NuGet packages for the HMI framework/controls (committed in full)
  Beckhoff.TwinCAT.HMI.Controls.14.4.1/
  Beckhoff.TwinCAT.HMI.Framework.14.3.360/  (+ an older 14.2.110 also present — see Quirks)
  Beckhoff.TwinCAT.HMI.Functions.14.3.340/
  Beckhoff.TwinCAT.HMI.Motion.14.3.342/
  Beckhoff.TwinCAT.HMI.ResponsiveNavigation.14.3.341/
  Beckhoff.TwinCAT.HMI.Scope.14.2.7563/ , ScopeControl.14.3.340/
  Beckhoff.TwinCAT.HMI.EcDiagnostics.22.0.7563/ , EcDiagnosticsControl.14.3.340/
  Beckhoff.TwinCAT.HMI.Server.Engineering.22.0.7563/
  Microsoft.TypeScript.MSBuild.5.9.3/

SampleCase_DM2/                       Drive Manager 2 project (references EtherCAT Term 7, MO7221-0000-1114)
SampleCase_Scope/                     Scope project (SampleCase_Scope.tcmproj, YT Scope Project.tcscopex)
```

## Tech stack

- **PLC**: IEC 61131-3 Structured Text, compiled through TwinCAT XAE (TwinCAT ProgramVersion `3.1.4026.20`). No package manager — POUs/DUTs are files referenced by `PLC1.plcproj`.
- **HMI**: TypeScript (`tsconfig.json`: target `ES2022`, `module: "none"`, `strictNullChecks: true`, `noImplicitAny: false`) compiled via the `Microsoft.TypeScript.MSBuild` package, plus hand-written JS registered into the `TcHmi.Functions` namespace, plus declarative `.content`/`.view`/`.usercontrol` XML/JSON files authored by the TwinCAT HMI Designer.
- **Packages**: NuGet, declared in the legacy-style `Musterkoffer_klein_HMI/packages.config`, but all 11 packages are **vendored directly into `Packages/`** rather than restored from a feed at build time. The repo is self-contained — no network/NuGet-feed access is required to build.
- **Build system**: MSBuild via Visual Studio / TwinCAT XAE Shell. The `.hmiproj` imports Beckhoff's HMI Engineering tasks/targets (from TE2000) plus the TypeScript MSBuild targets. There is no build step outside the IDE.

## Build / deploy workflow

1. Open `HMI_SampleCase_small.sln` in Visual Studio with **TwinCAT XAE Shell** and the **TE2000 HMI Engineering** extension installed.
2. Build Solution — MSBuild compiles the PLC, TypeScript, and packages the HMI into `bin/`.
3. Deploy the PLC to a TwinCAT runtime target and **Activate Configuration**.
4. Publish the HMI to a TcHmiSrv host using one of the profiles in `Musterkoffer_klein_HMI/Properties/tchmipublish.config.json`:
   - `local` — `127.0.0.1:2010`
   - `remote` — `192.168.7.207:2010`
   - `Musterkoffer_Test` — `169.254.41.39:2020` (TLS enabled)

**Verification is manual** — there is no test suite. Verify PLC logic via TwinCAT's online monitoring/debugging, and verify the HMI by publishing and exercising it in the browser client against real or simulated I/O.

## Conventions

**PLC (Structured Text)** uses Hungarian-notation-style prefixes throughout:
- `st` = struct instance, `fb` = function block instance, `b` = BOOL, `n` = INT/BYTE, `t` = TIME
- DUTs (structs) are named `ST_<Name>`, function blocks `FB_<Name>`

```
PROGRAM MAIN
VAR
    stPSUSlot3      :   ST_PSUInputsMX;
    fbRunOutputs    :   FB_RunOutputs;
    bEnableBluetoothDiagnosis AT%Q* : BOOL := TRUE;
END_VAR
```

**HMI JavaScript functions** (`Functions/*.js`) follow a fixed Beckhoff boilerplate:
- An IIFE wrapping `TcHmi.Functions.<ProjectNamespace>.<FunctionName>`
- Ends with `TcHmi.Functions.registerFunctionEx(...)`
- A `/// <reference path=".../TcHmi.d.ts" />` comment pointing at the vendored Framework package, for IntelliSense
- Comments are a mix of German and English (e.g. `ResolutionChange.js`)

**HMI pages and controls**:
- `.content` files are declarative, HTML-like XML with `data-tchmi-*` attributes and embedded `<script type="application/json">` blocks encoding event/action bindings (`WriteToSymbol`, `Condition`, `JavaScript`, etc.). They are designer-generated/edited — treat them as low-code UI definitions, not freehand source, and prefer editing via the TwinCAT HMI Designer where possible.
- `UserControls/` are paired files: a `.usercontrol` (markup) and a `.usercontrol.json` (parameter schema binding control parameters to PLC types, e.g. `data-tchmi-stms4208` → `PLC1.ST_MS4208`).
- Hardware-module naming follows Beckhoff part numbers (`MO1008`, `MO2008`, `MO2338`, `MS4208`, `MS1010-1002`, `MC6015`, etc.) consistently across DUTs, UserControls, and Page content files. When adding a new hardware module, follow the existing DUT ↔ UserControl ↔ Page naming pattern for that part number.

## Config and secrets — handle with care

- `Musterkoffer_klein_HMI/Properties/tchmipublish.config.json` contains **real target IPs and "encrypted" HMI server passwords/salts** for three environments (`local`, `remote`, `Musterkoffer_Test`). The encryption scheme is weak/reversible — treat this file as sensitive. Do not add real credentials to it, and don't paste its contents into logs, issues, or external tools.
- `Musterkoffer_klein_HMI/Server/ADS/ADS.Config.default.json` and `.remote.json` define AMS Net IDs for real hardware targets (`NC`/`NC-Task1` on loopback, `PLC1` at `172.17.32.12.1.1:851`).

## Known repo quirks (informational — don't "fix" unless asked)

- **`bin/` (build output) and `Packages/` (vendored NuGet) are intentionally committed to git**, not gitignored. This keeps the repo self-contained and buildable offline; don't treat these as accidental bloat to clean up.
- **`backup_*.Server/` folders are partially/inconsistently tracked** — these are auto-generated by the HMI publish/save tooling each time server config changes, and only one timestamped backup is currently committed while newer ones exist untracked locally. Likely accidental inclusion, but leave as-is unless the user asks for `.gitignore` cleanup.
- **Two Beckhoff Framework package versions coexist**: `14.2.110` and `14.3.360`. The active `packages.config`/`.hmiproj`/`tsconfig.json` reference `14.3.360`, but some JS/JSON files (e.g. `ResolutionChange.js`, `UpdateLanguageIcon.js`, `en.localization`) still have stale `$schema`/reference paths pointing at `14.2.110`. This can cause IntelliSense to resolve against the wrong package version — worth flagging if you touch those files.
- No `.github/` directory exists — no PR template, no CI workflows, no documented branching convention beyond `master` plus feature branches. Commit messages are terse and imperative (e.g. "Added DM2 Project", "REMOVED IOLINK").

## Working in this repo

- Changes to PLC DUTs/POUs represent real I/O wiring on physical hardware — keep them consistent with the EtherCAT terminal references in `SampleCase_DM2` and the ADS Net IDs in `Server/ADS/`, not just internally consistent PLC code.
- The Desktop/Smartphone page split in `Pages/` exists because the HMI serves both a desktop touchscreen and a paired smartphone/tablet interface against the same PLC symbols (see `ResolutionChange()` in `Functions/`) — changes to one page variant usually need a corresponding update to the other.
- There's no way to "run the tests" here. If asked to verify a change, describe the manual TwinCAT build/activate/online-monitor (PLC) or build/publish/browser-check (HMI) steps rather than inventing a CLI command.
