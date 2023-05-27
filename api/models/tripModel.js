"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema(
  {
    ticker: {
      type: String,
      unique: true,
      validate: {
        validator: function(v) {
          return /^\d{6}-[A-Z]{4}$/.test(v);
        },
        message: 'ticker is not valid, Pattern is: "YYMMDD-XXXX"'
      }
    },
    title: {
      type: String,

      maxlength: 40,
      minlength: 5,
      required: 'Kindly enter the title'
    },
    description: {
      type: String,
      required: 'Kindly enter the description'
    },
    price: {

      type: Number,
      min: 0, 
      required: true
    
    },
    requirements: {
      type: [String],
      default: [],
      required: 'Kindly enter the requirements'
    },
    start_date: {
      type: Date,
      min: Date.now(),
      default: Date.now(),
      required: 'Kindly enter the start date'
    },
    end_date: {
      type: Date,
      min: Date.now() + 1,
      default: Date.now() + 1,
      required: 'Kindly enter the end date',
    },
    pictures: [{
      type: Schema.Types.ObjectId,
      ref: 'Picture',
    }],
    is_cancelled: {
      type: Boolean,
      default: false
    },
    cancel_reason: {
      type: String,
    },
    is_published: {
      type: Boolean,
      default: true
    },
    stages: [{
      type: Schema.Types.ObjectId,
      ref: 'Stage',
    }],
    sponsorships: [{
      type: Schema.Types.ObjectId,
      ref: 'Sponsorship',
    }],
    applications: [{
      type: Schema.Types.ObjectId,
      ref: 'Application',
    }],
    manager: {
      type: Schema.Types.ObjectId,
      ref: 'Actor'
    }
  },
  { strict: false }
);

TripSchema.pre('save', function(callback) {
  const trip = this

  const date = new Date()

  const year = date.getFullYear().toString() % 100

  const day = ('0' + date.getDay().toString()).slice(-2)

  const month = ('0' + date.getMonth().toString()).slice(-2)

  const generatedTicker = `${year}${month}${day}-${String.fromCharCode(
    65 + Math.floor(Math.random() * 26))}${String.fromCharCode(
      65 + Math.floor(Math.random() * 26))}${String.fromCharCode(
        65 + Math.floor(Math.random() * 26))}${String.fromCharCode(
          65 + Math.floor(Math.random() * 26))}`
  trip.ticker = generatedTicker

  callback()
})

TripSchema.index({ ticker: 'text', title: 'text', description: 'text' })

module.exports = mongoose.model("Trip", TripSchema);