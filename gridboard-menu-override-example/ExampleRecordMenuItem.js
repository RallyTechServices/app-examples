    Ext.define('ExampleRecordMenuItem', {
        extend: 'Rally.ui.menu.item.RecordMenuItem',
        alias: 'widget.examplerecordmenuitem',

        clickHideDelay: 1,

        config: {

            /**
             * @cfg {Rally.data.wsapi.Model}
             * The record of the menu
             */
            record: undefined,

            /**
             * @cfg {Function}
             * This is called when a menu item is clicked
             */
            handler: function () {
                console.log('click example record menu item');
            },

            /**
             * @cfg {Function}
             *
             * A function that should return true if this menu item should show.
             * @param record {Rally.data.wsapi.Model}
             * @return {Boolean}
             */
            predicate: function (record) {
                return true;
            },

            /**
             * @cfg {String}
             * The display string
             */
            text: 'Example Record Menu Item...'

        },

        constructor:function (config) {
            this.initConfig(config);
            this.callParent(arguments);
        }
    });
