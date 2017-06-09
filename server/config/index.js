const commonConfig = {
	database: {
		connectionString: 'mongodb://localhost:27017/reactseeddb'
	},
	port: process.env.PORT || 3000,
	sslPort: 4443
	// Add here settings shared by all the environments
};

const appConfigurations = {
	development: Object.assign(
		{},
		commonConfig,
		{
			// Add development configurations here
		}
	),
	stage: Object.assign(
		{},
		commonConfig,
		{
			// Add stage configurations here
		}
	),
	production: Object.assign(
		{},
		commonConfig,
		{
			// Add production configurations here
		}
	)
};

module.exports = appConfigurations[process.env.NODE_ENV || 'development'];
