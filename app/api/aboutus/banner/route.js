import connectToDb from "@/utils/connectToDb";
import aboutBanner from "@/models/aboutus/aboutBanner";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await aboutBanner.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting aboutBanner Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await aboutBanner.create(body)
        return NextResponse.json({
            message: "aboutBanner details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding aboutBanner Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await aboutBanner.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "aboutBanner details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating aboutBanner Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await aboutBanner.findByIdAndDelete(id)
        return NextResponse.json({
            message: "aboutBanner details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting aboutBanner Details" + e
        }, { status: 500 })
    }
}
