import connectToDb from "@/utils/connectToDb";
import SignUp from "@/models/admin/SignUp";
// import SignIn from "@/components/admin_SignIn/SignIn";
import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";
export async function GET(request) {
    try {
        const token=request.cookies.get("token")
        console.log(token)
        if(!token){
            return NextResponse.json({
                message: "token doesn't exist",
            }, { status: 200 })
        }
        const VerifyUser=jwt.verify(token,process.env.TOKEN_SECRET)
        await connectToDb()
        const rootUser=await SignUp.findOne({_id:VerifyUser.id})
        if(!rootUser){
            return NextResponse.json({
                message: null,
            }, { status: 200 })
        }
        return NextResponse.json({
            message: rootUser._id,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating password" + e
        }, { status: 500 })
    }
}
  