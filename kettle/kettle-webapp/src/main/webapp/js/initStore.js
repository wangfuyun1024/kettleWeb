Ext.onReady(function() {
	
	new Ext.data.JsonStore({
		storeId: 'valueMetaStore',
		fields: ['id', 'name'],
		proxy: new Ext.data.HttpProxy({
			url: 'system/valueMeta.do',
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'valueFormatStore',
		fields: ['name'],
		proxy: new Ext.data.HttpProxy({
			url: 'system/valueFormat.do',
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'systemDataTypesStore',
		fields: ['code', 'descrp'],
		proxy: new Ext.data.HttpProxy({
			url: 'system/systemDataTypes.do',
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'databaseAccessData',
		fields: ['value','text'],
		proxy: new Ext.data.HttpProxy({
			url: GetUrl('database/accessData.do'),
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'datetimeFormatStore',
		fields: ['name'],
		proxy: new Ext.data.HttpProxy({
			url: GetUrl('system/datetimeformat.do'),
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'formatMapperLineTerminatorStore',
		fields: ['name'],
		proxy: new Ext.data.HttpProxy({
			url: GetUrl('system/formatMapperLineTerminator.do'),
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'compressionProviderNamesStore',
		fields: ['name'],
		proxy: new Ext.data.HttpProxy({
			url: GetUrl('system/compressionProviderNames.do'),
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'availableCharsetsStore',
		fields: ['name'],
		proxy: new Ext.data.HttpProxy({
			url: GetUrl('system/availableCharsets.do'),
			method: 'POST'
		})
	}).load();
	
	new Ext.data.JsonStore({
		storeId: 'databaseAccessMethod',
		fields: ['value','text'],
		proxy: new Ext.data.HttpProxy({
			url: 'database/accessMethod.do',
			method: 'POST'
		})
	});
});