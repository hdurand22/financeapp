import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
    },
    { toJSON: { getters: true }}
)

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
    },
    { toJSON: { getters: true }}
)

const KPISchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema],
    },
    { toJSON: { getters: true }, timestamps: true }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;