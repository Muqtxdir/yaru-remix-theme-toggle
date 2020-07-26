### install yaru-blue-theme-toggle:

The extension can be installed directly from source, either for the convenience of using git or to test the latest development version.

### Prerequisite:
- Install Git and Meson
```bash
  # sudo apt install git meson
```
- Install the User-themes extension from [here](https://extensions.gnome.org/extension/19/user-themes/).

- Install [Yaru-blue](https://github.com/Muqtxdir/yaru-blue) 

### Installation:
```
git clone https://github.com/Muqtxdir/yaru-blue-theme-toggle.git
```

```
cd yaru-blue-theme-toggle
```

```
meson build

cd build

sudo ninja install
```

- After install, a logout  or shell-restart is required

- Enable *Yaru-blue-theme-toogle* with **GNOME-Tweaks** or  **extensions** or **dconf**

