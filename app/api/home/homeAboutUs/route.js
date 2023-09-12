import connectToDb from "@/utils/connectToDb";
import homeAboutUs from "@/models/homeAboutUs";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await homeAboutUs.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting homeAboutUs Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await homeAboutUs.create(body)
        return NextResponse.json({
            message: "homeAboutUs details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding homeAboutUs Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await homeAboutUs.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "homeAboutUs details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating homeAboutUs Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await homeAboutUs.findByIdAndDelete(id)
        return NextResponse.json({
            message: "homeAboutUs details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting homeAboutUs Details" + e
        }, { status: 500 })
    }
}
