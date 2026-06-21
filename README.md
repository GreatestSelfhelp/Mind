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

## 🚀 Open it

### 👉 Live app: **https://greatestselfhelp.github.io/Mind/**

That link **is** the app — just open it in your browser and start using it. No download, no sign-up. Want it as a proper app with its own icon? Install it (free) using the steps below.

## 💻 Install on PC (Windows / Mac — Chrome or Edge)
1. Open **https://greatestselfhelp.github.io/Mind/** in **Chrome** or **Edge**.
2. Look at the **right end of the address bar** (where the URL is) for a small **install icon** — a monitor with a ⊕, or a ⬇️ inside a box. Click it.
   - Don't see it? Open the **⋮** menu (top-right) → **Cast, save, and share → Install page as app…** (Chrome), or **Apps → Install this site as an app** (Edge).
3. Click **Install** in the little popup.
4. Done — Mind now opens in its **own window** with a **desktop / Start-menu / taskbar** icon, like a normal program. It runs full-screen and **works offline**.

> *To uninstall later:* open Mind → **⋮ menu → Uninstall**, or right-click its taskbar/Start icon → **Uninstall**.

## 📱 Install on iPhone / iPad
1. Open **https://greatestselfhelp.github.io/Mind/** in **Safari** (it must be Safari — not Chrome).
2. Tap the **Share** button (the square with an ↑ arrow, at the bottom or top of Safari).
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add** (top-right). The **Mind** icon appears on your home screen — tap it to open full-screen.

## 🤖 Install on Android
1. Open **https://greatestselfhelp.github.io/Mind/** in **Chrome**.
2. Tap the **⋮** menu (top-right).
3. Tap **Add to Home screen** (or **Install app**) → **Install / Add**.
4. The **Mind** icon lands on your home screen.

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

## 🛠️ Run your own copy (developers)
- **Locally:** download the files and open `index.html` in Chrome/Edge.
- **Host it free** on GitHub Pages: fork/push this folder → repo **Settings → Pages → Deploy from branch → `main` → / (root)**. Your copy will be live at `https://<your-username>.github.io/<repo>/`. All paths are relative, so it works from the root *or* a subfolder.

## License
MIT — see [LICENSE](LICENSE). Built with Claude.
