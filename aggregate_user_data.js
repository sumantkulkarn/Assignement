db.users.aggregate([
    {
        $group: {
            _id: null,
            total_users: { $sum: 1 }, // Calculate total number of users
            average_age: { $avg: "$age" }, // Calculate average age
            users_by_country: { // Group users by country
                $push: {
                    country: "$country",
                    count: 1
                }
            }
        }
    },
    {
        $unwind: "$users_by_country" // Unwind the array to get individual documents for each country
    },
    {
        $group: {
            _id: "$users_by_country.country",
            total_users: { $sum: "$users_by_country.count" } // Calculate the number of users in each country
        }
    }
])
