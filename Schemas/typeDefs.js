const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		hello: String
		getAllUsers(filter: UsersFilterInput): [User]
		getUser(userId: String!): User
		getAllDesignation: [Designation]
		getDesignation(designationId: String!): Designation
	}

	type Mutation {
		addDesignation(input: AddDesignationInput!): Designation!
		addUser(input: AddUserInput!): User!
		addReview(input: AddReviewInput!): Review!
	}

	type User {
		id: ID!
		name: String!
		age: Int!
		isMapped: Boolean
		address: Address
		designation: Designation
		reviews: [Review]
	}

	type Designation {
		id: ID!
		role: String!
		salary: String
		users(filter: UsersFilterInput): [User]
	}

	type Review {
		id: ID!
		date: String!
		title: String!
		comment: String!
		rating: Int!
	}

	type Address {
		line1: String!
		pin: Int!
	}

	input UsersFilterInput {
		isMapped: Boolean
		avgRating: Int
	}

	input AddDesignationInput {
		role: String!
		salary: String!
	}

	input AddUserInput {
		name: String!
		age: Int!
		isMapped: Boolean!
		address: AddressInput!
		designationId: String!
	}

	input AddReviewInput {
		date: String!
		title: String!
		comment: String!
		rating: Int!
		userId: String!
	}

	input AddressInput {
		line1: String!
		pin: Int!
	}
`;

module.exports = { typeDefs };
