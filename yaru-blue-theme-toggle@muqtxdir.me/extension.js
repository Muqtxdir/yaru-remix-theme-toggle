const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const Ornament = imports.ui.popupMenu.Ornament;
const Util = imports.misc.util;
const St = imports.gi.St;

function init() {}

function enable() {
    this.mainMenu = Main.panel.statusArea['aggregateMenu'].menu;

    this.themeMenu = new PopupMenu.PopupSubMenuMenuItem("Appearance", true);
    this.mainMenu.addMenuItem(themeMenu, 8);
    this.themeMenu.icon.icon_name = "preferences-ubuntu-panel-symbolic";

    this.standard = new PopupMenu.PopupMenuItem("Yaru blue");
    this.standard.connect('activate', (item, event) => {
        this.reset_ornament();
        this.set_theme("Yaru-blue");
        item.setOrnament(Ornament.DOT);
    });
    this.themeMenu.menu.addMenuItem(this.standard, 0);

    this.light = new PopupMenu.PopupMenuItem("Yaru blue light");
    this.light.connect('activate', (item, event) => {
        this.reset_ornament();
        this.set_theme("Yaru-blue-light");
        item.setOrnament(Ornament.DOT);
    });
    this.themeMenu.menu.addMenuItem(this.light, 1);

    this.dark = new PopupMenu.PopupMenuItem("Yaru blue dark");
    this.dark.connect('activate', (item, event) => {
        this.reset_ornament();
        this.set_theme("Yaru-blue-dark");
        item.setOrnament(Ornament.DOT);
    });
    this.themeMenu.menu.addMenuItem(this.dark, 2);

    this.reset_ornament();
}

function set_theme(theme) {
    set_gtk_theme(theme);
    set_user_theme(theme);
    set_user_icon_theme(theme);
    set_theme_label(theme);
}

function set_theme_label(theme){
    if(theme == "Yaru-blue") {
        this.themeMenu.label.text = "Standard Theme";
    } else if (theme == "Yaru-blue-light") {
        this.themeMenu.label.text = "Light Theme";
    }
    else if (theme == "Yaru-blue-dark") {
        this.themeMenu.label.text = "Dark Theme"
    }
}

function set_gtk_theme(theme) {
    Main.setThemeStylesheet("/usr/share/themes/"+theme+"/gnome-shell/gnome-shell.css");
    Main.loadTheme();
    Util.trySpawn(["dconf", "write", "/org/gnome/shell/extensions/user-theme/name", "'" + theme +"'"]);
}

function set_user_theme(theme) {
    Util.trySpawn(["dconf", "write", "/org/gnome/desktop/interface/gtk-theme", "'" + theme +"'"]);
}

function set_user_icon_theme(theme) {
    Util.trySpawn(["dconf", "write", "/org/gnome/desktop/interface/icon-theme", "'" + theme +"'"]);
}

function reset_ornament() {
    this.standard.setOrnament(Ornament.NONE);
    this.light.setOrnament(Ornament.NONE);
    this.dark.setOrnament(Ornament.NONE);
}

function disable() {
    if (this.standard) {
        this.standard.destroy();
        this.standard = 0;
    }
    if (this.light) {
        this.light.destroy();
        this.light = 0;
    }

    if (this.dark) {
        this.dark.destroy();
        this.dark = 0;
    }

    if (this.themeMenu) {
        this.themeMenu.destroy();
        this.themeMenu = 0;
    }
}
