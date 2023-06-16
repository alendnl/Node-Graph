const users1 = [
	{
		id: "001",
		name: "John",
		age: 35,
		isMapped: true,
		address: {
			line1: "123 Main St",
			pin: 12345,
		},
		designationId: "005",
	},
	{
		id: "002",
		name: "Jane",
		age: 30,
		isMapped: false,
		address: {
			line1: "456 Elm St",
			pin: 67890,
		},
		designationId: "004",
	},
	{
		id: "003",
		name: "Tom",
		age: 20,
		isMapped: true,
		address: {
			line1: "789 yrk St",
			pin: 47620,
		},
		designationId: "002",
	},
	{
		id: "004",
		name: "Jerry",
		age: 20,
		isMapped: false,
		address: {
			line1: "258 cal St",
			pin: 64788,
		},
		designationId: "002",
	},
];

const designations = [
	{
		id: "001",
		role: "Junier Developer",
		salary: "1000",
	},
	{
		id: "002",
		role: "Senior Developer",
		salary: "2000",
	},
	{
		id: "003",
		role: "Tester",
		salary: "1500",
	},
	{
		id: "004",
		role: "Lead",
		salary: "4000",
	},
	{
		id: "005",
		role: "Manager",
		salary: "5000",
	},
];

const reviews = [
	{
		id: "b22",
		date: "2021-01-01",
		title: "This is bad review for user",
		comment: "when i bought this it broke the stove",
		rating: 1,
		userId: "001",
	},
	{
		id: "788",
		date: "2021-04-23",
		title: "This is good review for user",
		comment: "one of the most decent pots",
		rating: 3,
		userId: "001",
	},
	{
		id: "463",
		date: "2020-04-23",
		title: "is okay review for user",
		comment: "yes it is decent i guess",
		rating: 2,
		userId: "002",
	},
	{
		id: "ebd",
		date: "2020-07-23",
		title: "terrible review for user",
		comment: "why is it so expensive",
		rating: 1,
		userId: "002",
	},
	{
		id: "924",
		date: "2021-01-01",
		title: "best thing ever review for user",
		comment: "really good bowl",
		rating: 5,
		userId: "003",
	},
	{
		id: "f7c",
		date: "2021-04-23",
		title: "SUPER HAPPY review for user",
		comment: "this is amazing, only 4 stars tho... :)",
		rating: 4,
		userId: "003",
	},
	{
		id: "908",
		date: "2020-04-23",
		title: "life changing review for user",
		comment: "writing mock data is so boring...",
		rating: 5,
		userId: "004",
	},
	{
		id: "185",
		date: "2020-07-23",
		title: "This is coooooool! review for user",
		comment: "I would totally recommend",
		rating: 5,
		userId: "004",
	},
	{
		id: "d07",
		date: "2020-07-23",
		title: "idc review for user",
		comment: "It's a spoon...",
		rating: 3,
		userId: "001",
	},
	{
		id: "1b2",
		date: "2020-07-23",
		title: "terrible!!!!!! review for user",
		comment:
			"Not good at all!! used it once and got caught 2 days later. now im doing life without parole",
		rating: 1,
		userId: "002",
	},
	{
		id: "448",
		date: "2020-07-23",
		title: "great review for user",
		comment: "Great for planting",
		rating: 5,
		userId: "003",
	},
	{
		id: "578",
		date: "2020-07-23",
		title: "Made well review for user",
		comment: "Strong and firm",
		rating: 5,
		userId: "004",
	},
];

module.exports = { users1, designations, reviews };
