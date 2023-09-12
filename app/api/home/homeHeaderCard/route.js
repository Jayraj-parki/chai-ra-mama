import connectToDb from "@/utils/connectToDb";
import homeHeaderCard from "@/models/homeHeaderCard";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await homeHeaderCard.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting homeHeaderCard Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await homeHeaderCard.create(body)
        return NextResponse.json({
            message: "homeHeaderCard details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding homeHeaderCard Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await homeHeaderCard.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "homeHeaderCard details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating homeHeaderCard Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await homeHeaderCard.findByIdAndDelete(id)
        return NextResponse.json({
            message: "homeHeaderCard details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting homeHeaderCard Details" + e
        }, { status: 500 })
    }
}
