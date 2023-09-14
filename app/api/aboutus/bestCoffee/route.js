import connectToDb from "@/utils/connectToDb";
import aboutBestCoffee from "@/models/aboutus/aboutBestCoffee";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await aboutBestCoffee.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting aboutBestCoffee Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await aboutBestCoffee.create(body)
        return NextResponse.json({
            message: "aboutBestCoffee details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding aboutBestCoffee Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await aboutBestCoffee.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "aboutBestCoffee details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating aboutBestCoffee Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await aboutBestCoffee.findByIdAndDelete(id)
        return NextResponse.json({
            message: "aboutBestCoffee details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting aboutBestCoffee Details" + e
        }, { status: 500 })
    }
}
