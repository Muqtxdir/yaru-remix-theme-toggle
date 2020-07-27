### install yaru-remix-theme-toggle:

The extension can be installed directly from source, either for the convenience of using git or to test the latest development version.

### Prerequisite:
- Install Git and Meson
```bash
  sudo apt install git meson
```
- Install the User-themes extension from [here](https://extensions.gnome.org/extension/19/user-themes/).

- Install [Yaru-remix](https://github.com/Muqtxdir/yaru-remix) 

### Install:

- To install all yaru-remix-theme-toggle, simply run the following.

```
git clone https://github.com/Muqtxdir/yaru-remix-theme-toggle.git
```

```
cd yaru-remix-theme-toggle
```

```
meson build

cd build

sudo ninja install
```

- After install, a logout  or shell-restart (ALt+F2 => r) is required

- Enable *Yaru-remix-theme-toogle* with **GNOME-Tweaks** or  **extensions** or **dconf**

### Uninstall:

- To uninstall all yaru-remix-theme-toggle, simply run the following.

```bash
 cd yaru-remix-theme-toggle

 cd build

 sudo ninja uninstall
```
- After uninstall, a logout  or shell-restart (ALt+F2 => r) is required



