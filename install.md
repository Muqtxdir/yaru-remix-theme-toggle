### install yaru-blue-theme-toggle:

The extension can be installed directly from source, either for the convenience of using git or to test the latest development version.

### Prerequisite:
- Install Git and Meson
```bash
  sudo apt install git meson
```
- Install the User-themes extension from [here](https://extensions.gnome.org/extension/19/user-themes/).

- Install [Yaru-blue](https://github.com/Muqtxdir/yaru-blue) 

### Install:

- To install all yaru-blue-theme-toggle, simply run the following.

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

- After install, a logout  or shell-restart (ALt+F2 => r) is required

- Enable *Yaru-blue-theme-toogle* with **GNOME-Tweaks** or  **extensions** or **dconf**

### Uninstall:

- To uninstall all yaru-blue-theme-toggle, simply run the following.

```bash
 cd yaru-blue-theme-toggle

 cd build

 sudo ninja uninstall
```
- After uninstall, a logout  or shell-restart (ALt+F2 => r) is required



