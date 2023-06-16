exports.Query = {
	hello: (parent, args, context) => "Hello GraphQL world!",
	getAllUsers: (parent, args, context) => {
		const { filter } = args;
		const { users1, reviews } = context.data;

		let filteredUsers = users1;
		if (filter) {
			const { isMapped, avgRating } = filter;
			if (isMapped) {
				filteredUsers = filteredUsers.filter(
					(user) => isMapped === user.isMapped
				);
			}
			if (avgRating && [1, 2, 3, 4, 5].includes(avgRating)) {
				filteredUsers = filteredUsers.filter((user) => {
					let totalReview = 0;
					let countOfReviews = 0;
					reviews.forEach((review) => {
						if (review.userId === user.id) {
							totalReview += review.rating;
							countOfReviews++;
						}
					});
					const avgUserRating = totalReview / countOfReviews;
					return avgUserRating >= avgRating;
				});
			}
		}
		return filteredUsers;
	},
	getUser: (parent, args, context) => {
		const { users1 } = context.data;
		return users1.find((user) => user.id === args.userId);
	},
	getAllDesignation: (parent, args, context) => {
		const { designations } = context.data;
		return designations;
	},
	getDesignation: (parent, args, context) => {
		const { designations } = context.data;
		return designations.find(
			(designation) => designation.id === args.designationId
		);
	},
};
