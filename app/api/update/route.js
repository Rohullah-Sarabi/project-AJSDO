import dbConnect from "@/backend/config/dbConnect"
import program from "@/backend/models/program";
import { NextResponse } from "next/server";
import fs from "fs"

export async function POST(req,res){
    const data = await req.json()
    const {_id,projectState,projectImplemented } = data
    try {
        dbConnect()
        const updateData = {};
        if(projectState){
            updateData["projectState"] = projectState
        }
        if(projectImplemented){
            updateData["projectImplemented"] = projectImplemented
        }
        const result = await program.updateOne({ _id }, { $set:updateData },{new:true})
        return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({error})
    }
}

export async function DELETE(req,res){
    const {id} = await req.json()

    try {
        dbConnect();
        const result = await program.findOneAndDelete({_id:id})

        result.images.map((item)=>{
            fs.unlinkSync(`${process.env.DELETE_IMAGE_LINK}/${item.url}`)
        })
        return NextResponse.json({id})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }
}


export async function PUT(req, res) {
    const data = await req.json()
    const { _id, en, fa, ps } = data;


    try {
        dbConnect();
        const updateData = {};
        if (en) {
            if (en.name) {
                updateData["en.name"] = en.name;
            } else if (en.projectOwner) {
                updateData["en.projectOwner"] = en.projectOwner;

            } else if (en.location) {
                updateData["en.location"] = en.location;

            } else if (en.projectType) {
                updateData["en.projectType"] = en.projectType;

            } else if (en.projectDuration) {
                updateData["en.projectDuration"] = en.projectDuration;

            } else if (en.projectBudget) {
                updateData["en.projectBudget"] = en.projectBudget;

            } else if (en.projectStaff) {
                updateData["en.projectStaff"] = en.projectStaff;

            } else if (en.projectBeneficiaries) {
                updateData["en.projectBeneficiaries"] = en.projectBeneficiaries;

            }
        }
        if (fa) {
            if (fa.name) {
                updateData["fa.name"] = fa.name;
            } else if (fa.projectOwner) {
                updateData["fa.projectOwner"] = fa.projectOwner;

            } else if (fa.location) {
                updateData["fa.location"] = fa.location;

            } else if (fa.projectType) {
                updateData["fa.projectType"] = fa.projectType;

            } else if (fa.projectDuration) {
                updateData["fa.projectDuration"] = fa.projectDuration;

            } else if (fa.projectBudget) {
                updateData["fa.projectBudget"] = fa.projectBudget;

            } else if (fa.projectStaff) {
                updateData["fa.projectStaff"] = fa.projectStaff;

            } else if (fa.projectBeneficiaries) {
                updateData["fa.projectBeneficiaries"] = fa.projectBeneficiaries;

            }
        }
        if (ps) {
            if (ps.name) {
                updateData["ps.name"] = ps.name;
            } else if (ps.projectOwner) {
                updateData["ps.projectOwner"] = ps.projectOwner;

            } else if (ps.location) {
                updateData["ps.location"] = ps.location;

            } else if (ps.projectType) {
                updateData["ps.projectType"] = ps.projectType;

            } else if (ps.projectDuration) {
                updateData["ps.projectDuration"] = ps.projectDuration;

            } else if (ps.projectBudget) {
                updateData["ps.projectBudget"] = ps.projectBudget;

            } else if (ps.projectStaff) {
                updateData["ps.projectStaff"] = ps.projectStaff;

            } else if (ps.projectBeneficiaries) {
                updateData["ps.projectBeneficiaries"] = ps.projectBeneficiaries;

            }
        }

        const result = await program.updateOne({ _id }, { $set:updateData },{new:true})
        return NextResponse.json({ result })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json(error)
    }
}
