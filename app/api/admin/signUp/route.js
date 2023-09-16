import connectToDb from "@/utils/connectToDb";
import userSignUp from "@/models/admin/SignUp";
// import SignIn from "@/components/admin_SignIn/SignIn";
import { NextResponse } from "next/server";
const bcryptjs=require("bcryptjs")
import validator from "validator";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await userSignUp.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting userSignUp details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const {firstName,lastName,email,password} = await request.json();
        await connectToDb();
        if (!validator.isEmail(email)) {
            return NextResponse.json({
                message: "Invalid Email",
                status:400
            }, { status: 400 })
        }
        const isEmailExist=await userSignUp.findOne({email:email})
        if(isEmailExist){
            return NextResponse.json({
                message:"User Already Exist",
                status:400
            },{ status:400})
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        await userSignUp.create({firstName,lastName,email,password:hashedPassword})
        return NextResponse.json({
            message: "Sign Up Successfully",
            status:200
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting userSignUp details",
            status:400
        }, { status: 400 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const _id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await userSignUp.findByIdAndUpdate({_id}, {$set:body})
        return NextResponse.json({
            message: "userSignUp details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating userSignUp Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await userSignUp.findByIdAndDelete(id)
        return NextResponse.json({
            message: "userSignUp details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting userSignUp details" + e
        }, { status: 500 })
    }
}
