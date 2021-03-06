const initialState = {
    user: {
        errors: {
            email: null,
            password: null
        }
    },
    categories: {
        results: []
    },
    transactions: {
        results: [],
        count: 0,
        current: 0,
        totalPages: 0,
        next: null,
        previous: null,
        errors: {
            date: null,
            category: null,
            name: null,
            type: null,
            amount: null
        },
        last4monthsReport: [],
        expenseReports: {
            data: [],
            totalExpense: 0,
            budget: 0,
            reminder: 0
        }
    }
}

export default initialState;