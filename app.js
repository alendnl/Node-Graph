const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const { typeDefs } = require("./Schemas/typeDefs");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { User } = require("./resolvers/User");
const { Designation } = require("./resolvers/Designation");
const { users1, designations, reviews } = require("./data");

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json(), cors());

let apolloServer = null;
async function startApolloServer() {
	apolloServer = new ApolloServer({
		typeDefs,
		resolvers: {
			Query,
			Mutation,
			User,
			Designation,
		},
		context: {
			data: { users1, designations, reviews },
		},
	});
	await apolloServer.start();
	apolloServer.applyMiddleware({ app });
}
startApolloServer();

// Listening to the Express App
app.listen({ port }, () => {
	console.log(`server is up and running at http://localhost:${port}`);
	console.log(
		`Default ApolloGQL server path http://localhost:${port}${apolloServer.graphqlPath}`
	);
});
