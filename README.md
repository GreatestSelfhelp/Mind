# ◈ Mind — your mind, mapped

A fast, beautiful, **offline** mind-map app in a single HTML file. No install, no accounts, no servers, no tracking. **All your data stays on your device.**

![icon](icon-192.png)

## ✨ Features
- **Drag-free thinking** — `Tab` adds a sub-point, `Enter` adds a node at the same level; **✨ Tidy** auto-arranges the whole tree.
- **Node types** — 💡 idea · ✅ task (checkable) · 📝 note · 🌙 journal, plus per-node emoji icons, colors, and notes.
- **⚡ Quick capture** (press `/`) drops a thought into an Inbox without losing your place.
- **📋 Today** gathers every task across all your maps into one checklist.
- **🎨 Themes** — 6 backgrounds (incl. light mode), accent colors, branch styles.
- **Multiple maps**, search, undo/redo, pinch-zoom, and **PNG / Markdown / JSON export**.
- **📁 Folder auto-save** — keep a live copy of everything in a folder on your disk (survives browser cache resets).
- **Installable** — add it to your home screen (phone) or install it (desktop) for a full-screen, offline app.

## 🔒 Privacy
There is **no login and no server**. Nothing ever leaves your device. Data is saved two ways:

1. **Browser storage (always on).** Maps live in your browser's `localStorage`, tied to the site address. Per-browser, per-device. *Caveat: clearing your browser data — or using private/incognito mode — erases it.* So for anything important, also use the folder backup below.
2. **📁 Folder auto-save (Chrome/Edge desktop).** Click **📁 Folder** once and pick a folder — the app writes **all** your maps + settings to a single `mind-backup.json` there and keeps it updated automatically:
   - saves a few seconds after each edit, **every 5 minutes**, and when you close/hide the tab;
   - **auto-reloads** that folder the next time you open the app;
   - **survives a cache reset** — your data is safe in the file and merges back in.
   - After a full cache wipe the browser forgets *which* folder it was → just click **📁 Reconnect** once and pick the same folder.

You can also grab a one-off backup anytime with **⤓ JSON**, or move maps between devices via **🗂 Maps → import**.

## 🚀 Use it
- **Just open `index.html`** in any modern browser (Chrome / Edge / Safari).
- Or host the folder anywhere static — e.g. **GitHub Pages**:
  1. Push this folder to a repo.
  2. Repo → **Settings → Pages** → deploy from the `main` branch.
  3. Open the Pages URL → on mobile, **Share → Add to Home Screen** for an app icon.

All paths are relative, so it works from the root *or* a subfolder.

## 💻 Install as an app (PC)
Open the site in **Chrome** or **Edge**, then:
1. Look at the right end of the address bar for the **install icon** (a small monitor with a ⊕, or a ⬇️ in a box). *Or* open the **⋮** menu → **Cast, save, and share → Install this page as an app** (Chrome) / **Apps → Install this site as an app** (Edge).
2. Click **Install**.
3. Mind opens in its own window and gets a **Start-menu / desktop / taskbar** shortcut — launch it like any normal program.

It runs full-screen, **works offline**, and updates automatically when the hosted version changes. To remove it: open the app → **⋮ menu → Uninstall** (or right-click the taskbar/Start icon → Uninstall).

> No install icon? Make sure you opened the **hosted URL** (e.g. your GitHub Pages link) over `https://`, not a local `file://` — browsers only offer install on a served page.

## 📱 Install as an app (iPhone / iPad / Android)
- **iPhone / iPad:** open in **Safari** → **Share** → **Add to Home Screen**.
- **Android:** open in **Chrome** → **⋮ menu** → **Add to Home screen / Install app**.

## ⌨️ Controls
| Action | How |
|---|---|
| Add sub-point / same-level | `Tab` / `Enter` (or the ＋ buttons on a node) |
| Edit text | double-click, `F2`, or the name field in the panel |
| Check off a task | tap the ✅ box |
| Undo / redo | `Ctrl+Z` / `Ctrl+Shift+Z` |
| Pan / zoom | drag empty space / scroll · pinch on touch |
| Fit to screen | ⤢ Fit |
| Save to a folder | 📁 Folder (then it auto-saves) |

## License
MIT — see [LICENSE](LICENSE). Built with Claude.
