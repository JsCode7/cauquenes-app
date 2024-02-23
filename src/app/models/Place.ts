import { Schema, model, models } from 'mongoose';

const Places = new Schema ({
    _id: {
        type: Schema.Types.ObjectId,
    },
    id_google: {
        type: String,
    },
    name: {
        type: String,
    },
    types: [
        {
            type: String,
        }
    ],
    formatted_address: {
        type: String,
    },
    opening_hours: {
        openNow: {
            type: Boolean,
        },
        periods: [
            {
                close: {
                    day: {
                        type: Number,
                    },
                    hour: {
                        type: Number,
                    },
                    minute: {
                        type: Number,
                    },
                    truncated: {
                        type: Boolean,
                    },
                    date: {
                        year: {
                            type: Number,
                        },
                        month: {
                            type: Number,
                        },
                        day: {
                            type: Number,
                        },
                    },
                },
                open: {
                    day: {
                        type: Number,
                    },
                    hour: {
                        type: Number,
                    },
                    minute: {
                        type: Number,
                    },
                    truncated: {
                        type: Boolean,
                    },
                    date: {
                        year: {
                            type: Number,
                        },
                        month: {
                            type: Number,
                        },
                        day: {
                            type: Number,
                        },
                    },
                }
            }
        ],
        weekdayDescriptions: [
            {
                type: String,
            }
        ],

    },
    photos:[
        {
            name: {
                type: String,
            },
            heightPx: {
                type: Number,
            },
            widthPx: {
                type: Number,
            },
            authorAttributions: [
                {
                    displayName: {
                        type: String,
                    },
                    photoUri: {
                        type: String,
                    },
                    uri: {
                        type: String,
                    }
                }
            ],
        }
    ],
    google_maps_uri: {
        type: String,
    },
    website_uri: {
        type: String || null,
    },
    phone_number: {
        type: String,
    },
    reviews: [
        {
            name: {
                type: String,
            },
            relativePublishTimeDescription: {
                type: String,
            },
            rating: {
                type: Number,
            },
            text: {
                text: {
                    type: String,
                },
                languageCode: {
                    type: String,
                }
            },
            originalText: {
                text: {
                    type: String,
                },
                languageCode: {
                    type: String,
                }
            },
            authorAttribution: {
                displayName: {
                    type: String,
                },
                photoUri: {
                    type: String,
                },
                uri: {
                    type: String,
                }
            },
            publishTime: {
                type: String,
            },
        }
    ]
},
{ collection: 'places' });

export default models.Places || model('Places', Places);