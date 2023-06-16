exports.Designation = {
	users: (parent, args, context) => {
		const { users1, reviews } = context.data;
		const { filter } = args;

		const designationUsers = users1.filter(
			(user) => user.designationId === parent.id
		);

		let filteredDesignationUsers = designationUsers;
		if (filter) {
			const { isMapped, avgRating } = filter;
			if (isMapped) {
				filteredDesignationUsers = filteredDesignationUsers.filter(
					(user) => isMapped === user.isMapped
				);
			}
			if (avgRating && [1, 2, 3, 4, 5].includes(avgRating)) {
				filteredDesignationUsers = filteredDesignationUsers.filter(
					(user) => {
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
					}
				);
			}
		}
		return filteredDesignationUsers;
	},
};
