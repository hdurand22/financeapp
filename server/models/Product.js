import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema(
    {
        price: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        expense: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // This is necessary to convert Currency value coming back from mongoose.currency
        },
        transactions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
        }],
    },
    { toJSON: { getters: true }, timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;