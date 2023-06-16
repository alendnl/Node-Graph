const { v4: uuid } = require("uuid");

exports.Mutation = {
	addDesignation: (parent, args, context) => {
		const { role, salary } = args.input;
		const { designations } = context.data;
		const designation = {
			id: uuid(),
			role,
			salary,
		};
		designations.push(designation);
		return designation;
	},
	addUser: (parent, args, context) => {
		const { name, age, isMapped, address, designationId } = args.input;
		const { users1 } = context.data;
		const user = {
			id: uuid(),
			name,
			age,
			isMapped,
			address,
			designationId,
		};

		users1.push(user);
		return user;
	},
	addReview: (parent, args, context) => {
		const { date, title, comment, rating, userId } = args.input;
		const { reviews } = context.data;
		const review = {
			id: uuid(),
			date,
			title,
			comment,
			rating,
			userId,
		};
		reviews.push(review);
		return review;
	},
};
