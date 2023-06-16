exports.User = {
	designation: (parent, args, context) => {
		const { designations } = context.data;
		return designations.find(
			(designation) => designation.id === parent.designationId
		);
	},
	reviews: (parent, args, context) => {
		const { reviews } = context.data;
		return reviews.filter((review) => review.userId === parent.id);
	},
};
