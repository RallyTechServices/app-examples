Ext.override(Rally.ui.menu.DefaultRecordMenu, {
    //Override the getMenuItems function to return only the menu items that we are interested in.
    _getMenuItems: function() {
        var record = this.getRecord(),
            items = [],
            popoverPlacement = this.popoverPlacement || Rally.ui.popover.Popover.DEFAULT_PLACEMENT;

        items.push({
            xtype: 'examplerecordmenuitem',
            view: this.view,
            record: record
        });

        return items;
    }
});