Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
        this._buildStore();
    },
    _buildStore: function(){

        Ext.create('Rally.data.wsapi.TreeStoreBuilder').build({
            models: this._getModels(),
            enableHierarchy: true,
            autoLoad: true
        }).then({
            success: this._createTreeGrid,
            scope: this
        });
    },
    _getModels: function(){
        return ['portfolioitem/feature'];
    },
    _createTreeGrid: function(store){

        //If we don't destroy a grid that already exists, then a duplicate grid will
        //be created.
        if (this.down('rallygridboard')){
            this.down('rallygridboard').destroy();
        }

        this.add({
            xtype: 'rallygridboard',
            context: this.getContext(),
            modelNames: this._getModels(),
            toggleState: 'grid',
            gridConfig: {
                store: store,
                storeConfig: {
                    pageSize: 200
                },
                enableBulkEdit: true,
                columnCfgs: [
                    'Name',
                    'Project'
                ],
                bulkEditConfig: {
                    items: [{
                        xtype: 'examplebulkrecordmenuitem'
                    }]
                }
            },
            height: this.getHeight()
        });
    }
});
