import connectToDb from "@/utils/connectToDb";
import homeTestimonialCard from "@/models/homeTestimonialCard";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await homeTestimonialCard.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting homeTestimonialCard Details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await homeTestimonialCard.create(body)
        return NextResponse.json({
            message: "homeTestimonialCard details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in adding homeTestimonialCard Details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await homeTestimonialCard.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "homeTestimonialCard details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating homeTestimonialCard Details" + e
        }, { status: 500 })
    }
}
export async function DELETE(request, response) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        await connectToDb();
        await homeTestimonialCard.findByIdAndDelete(id)
        return NextResponse.json({
            message: "homeTestimonialCard details Deleted successfully",
        }, { status: 200 })
    } 
    catch (e) {
        return NextResponse.json({
            message: "Error in deleting homeTestimonialCard Details" + e
        }, { status: 500 })
    }
}
