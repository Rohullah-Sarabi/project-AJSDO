import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
    en: {
        name: {
            type: String,
            required: [true, "Project name is required"]
        },
        projectOwner: {
            type: String,
            required: [true, "Project owner is required!"]
        },
        location: {
            type: String,
            required: [true, "Location where project is implemented is required!"]
        },
        projectType: {
            type: String,
            required: [true, "project type is required!"],
            enum: {
                values: [
                    "Education",
                    "Healthcare",
                    "Social Services",
                    "Agriculture",
                    "Global Warming"
                ],
                message: "Please select correct project type"
            }
        },
        projectDuration: {
            type: String
        },
        projectBudget: {
            type: String
        },
        projectStaff: {
            type: String
        },
        projectBeneficiaries: {
            type: String
        },
        summary: [
            {
                content: {
                    type: String,
                }
            }
        ]
    },
    fa: {
        name: {
            type: String,
            required: [true, "Project name is required"]
        },
        projectOwner: {
            type: String,
            required: [true, "Project owner is required!"]
        },
        location: {
            type: String,
            required: [true, "Location where project is implemented is required!"]
        },
        projectType: {
            type: String,
            required: [true, "project type is required!"],
            enum: {
                values: [
                    "تحصیلات",
                    "بهداشت و درمان",
                    "خدمات اجتماعی",
                    "کشاورزی",
                    "گرمایش جهانی",
                ],
                message: ""
            }
        },
        projectDuration: {
            type: String
        },
        projectBudget: {
            type: String
        },
        projectStaff: {
            type: String
        },
        projectBeneficiaries: {
            type: String
        },
        summary: [
            {
                content: {
                    type: String,
                }
            }
        ]
    },
    ps: {
        name: {
            type: String,
            required: [true, "Project name is required"]
        },
        projectOwner: {
            type: String,
            required: [true, "Project owner is required!"]
        },
        location: {
            type: String,
            required: [true, "Location where project is implemented is required!"]
        },
        projectType: {
            type: String,
            required: [true, "project type is required!"],
            enum: {
                values: [
                    "زده کړه",
                    "روغتیای",
                    "ټولنیز خدمتونه",
                    "کرنه",
                    "نړیواله تودوخه"
                ],
                message: ""
            }
        },
        projectDuration: {
            type: String
        },
        projectBudget: {
            type: String
        },
        projectStaff: {
            type: String
        },
        projectBeneficiaries: {
            type: String
        },
        summary: [
            {
                content: {
                    type: String,
                }
            }
        ]
    },
    projectImplemented: {
        type: String
    },
    projectState:{
        type:String,
        required: [true, "project type is required!"],
        enum: {
            values: [
                "inprogress",
                "onplan",
                "completed"
            ],
            message: "Please select correct project type"
        }
    },
    post:{
        type:Boolean,
        default:false
    },
    images: [
        {
            url: {
                type: String
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.models.Program || mongoose.model("Program", programSchema);
