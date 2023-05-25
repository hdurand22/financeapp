import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema(
    {
        buyer: {
            name: String,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        amount: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        productIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }],
    },
    { toJSON: { getters: true }, timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;