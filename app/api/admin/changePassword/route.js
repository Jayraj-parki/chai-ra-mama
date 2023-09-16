import connectToDb from "@/utils/connectToDb";
import userSignUp from "@/models/admin/SignUp";
// import SignIn from "@/components/admin_SignIn/SignIn";
import { NextResponse } from "next/server";
const bcryptjs = require("bcryptjs")
import validator from "validator";

export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const _id = url.searchParams.get("id")
        const { password, newPassword } =await request.json();
        const user=await userSignUp.findById(_id)
        await connectToDb();
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid Old Password" }, { status: 400 })
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(newPassword, salt)

        await userSignUp.findByIdAndUpdate({ _id }, { $set: {password:hashedPassword} })
        return NextResponse.json({
            message: "password updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating password" + e
        }, { status: 500 })
    }
}
